// LICENSE : MIT
"use strict";
import { test as powerDoctest } from "@power-doctest/tester";
import { parse } from "@power-doctest/markdown";
import { toTestCode } from "./lib/testing-code.js";
import { globbySync } from "globby";
import fs from "node:fs";
import path from "node:path";
import semver from "semver";
import url from "node:url";
import { describe, it } from "node:test";

const __filename__ = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename__);
const sourceDir = path.join(__dirname, "..", "source");


/**
 * 指定したECMAScriptバージョンをmetaにもつコードは実行環境によってはサポートされてないので無視する
 * 最新版のNodeでは無視しない
 * @type {string[]} サポートしてないECMAScriptバージョン
 */
const IgnoredECMAScriptVersions = (() => {
    // https://node.green/#ES2026
    if (semver.cmp(process.version, ">=", "26.0.0")) {
        return []; // すべて通る前提
    }
    if (semver.cmp(process.version, ">=", "24.0.0")) {
        return ["2026"]; // Map/WeakMap upsertがサポートされていない
    }
    if (semver.cmp(process.version, ">=", "22.0.0")) {
        return ["2025", "2026"]; // RegExp Pattern Modifiersは通らない
    }
    if (semver.cmp(process.version, ">=", "20.0.0")) {
        return ["2024", "2025", "2026"]; // Object.groupByがサポートされていない
    }
    if (semver.cmp(process.version, ">=", "18.0.0")) {
        return ["2023", "2024", "2025", "2026"]; // Array.prototype.withがサポートされていない
    }
    if (semver.cmp(process.version, ">=", "16.0.0")) {
        // Array.prototype.findLastIndex をサポートしていない
        return ["2023", "2024", "2025", "2026"];
    }
    if (semver.cmp(process.version, ">=", "14.0.0")) {
        // String#replaceAll をサポートしていない
        // Top-Level await をサポートしていない
        return ["2021", "2022", "2023", "2024", "2025", "2026"];
    }
    return ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
})();

/**
 * Markdownファイルの CodeBlock に対してdoctestを行う
 * CodeBlockは必ず実行できるとは限らないので、
 * AssertionError(doctestにおける失敗)以外は成功したことにして無視する
 *
 * `console.log(式); // => 結果` の書式で書かれているをチェックする
 * https://github.com/js-primer/js-primer/issues/195
 *
 * その他詳細は CONTRIBUTING.md を読む
 **/
describe("doctest:md", function() {
    const files = globbySync([
        `${sourceDir}/**/*.md`,
        `!${sourceDir}/**/node_modules{,/**}`,
        `!${sourceDir}/**/specs/**/*.md`,
        `!**/OUTLINE.md`
    ]);
    files.forEach(filePath => {
        const normalizeFilePath = filePath.replace(sourceDir, "");
        describe(`${normalizeFilePath}`, function() {
            const content = fs.readFileSync(filePath, "utf-8");
            const parsedCodes = parse({
                filePath,
                content
            });
            // try to eval
            const dirName = path.dirname(filePath).split(path.sep).pop();
            parsedCodes.forEach((parsedCode, index) => {
                const codeValue = parsedCode.code;
                const testLines = `L${parsedCode.location.start.line}-L${parsedCode.location.end.line}`;
                it(dirName + ": " + testLines, async function() {
                    try {
                        await powerDoctest({
                            ...parsedCode,
                            code: toTestCode(parsedCode.code)
                        }, {
                            defaultDoctestRunnerOptions: {
                                // Default timeout: 2sec
                                timeout: 1000 * 2,
                                context: {
                                    // ここでのcontextは、doctestの実行時に利用される
                                    // consoleログは邪魔なので出されないようにする
                                    console: {
                                        log: function(...args) {
                                            void 0;
                                        },
                                        error: function(...args) {
                                            void 0;
                                        },
                                        warn: function(...args) {
                                            void 0;
                                        }
                                    }
                                }
                            }
                        });
                    } catch (error) {
                        if (error.meta && IgnoredECMAScriptVersions.some(version => version === String(error.meta.ECMAScript))) {
                            console.log(`ECMAScript ${error.meta.ECMAScript}が指定されているコードは実行環境がサポートしてない場合があるのでスキップします`);
                            return;
                        }
                        // IDEとかで直接ジャンプできるファイルパスにしたいので file:// 形式にする
                        const fileProtocolPath = `file://${path.resolve(filePath)}`;
                        const testTargetPathWithLineNumber = `${fileProtocolPath}:${parsedCode.location.start.line}`;
                        const filePathLineColumn = `${error.fileName}:${error.lineNumber}:${error.columnNumber}`;
                        const newError = new Error(`Markdown Doctest is failed at ${testTargetPathWithLineNumber}

Error Location: 
-----------------
${filePathLineColumn}
-----------------

Assertion:
------------------
${error.message}
------------------

Code Block:
-----------------           
${codeValue}
----------------
`, {
                            cause: error
                        });
                        throw newError;
                    }
                });
            });
        });
    });
});

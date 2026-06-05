import { globbySync } from "globby";
import path from "node:path";
import url from "node:url";
import { describe, it } from "node:test";

const __filename__ = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename__);
const sourceDir = path.join(__dirname, "..", "source");

const skipBelowNode26 =
    Number(process.versions.node.split(".")[0]) < 26
        ? "Node.js >= 26 が必要 (Map.prototype.getOrInsertComputed)"
        : false;

/**
 * ESMのexampleを評価するテスト
 * Note: ESMには対応していない
 **/
describe("example:es", function() {
    const esmFiles = globbySync([
        `${sourceDir}/use-case/todoapp/**/*-example.js`, // *-example.js
        `${sourceDir}/use-case/todoapp/**/*.example.js`, // *.example.js
        `${sourceDir}/use-case/nodecli/**/example/**/*.js`,
        `!${sourceDir}/**/node_modules{,/**}`,
    ]);
    esmFiles.forEach(filePath => {
        const normalizeFilePath = filePath.replace(sourceDir, "");
        const isTodoApp = filePath.includes("/use-case/todoapp/");

        // TODO: doctestはしていないで、読み込んでOKかどうかだけ
        it(`example:es ${normalizeFilePath}`, { timeout: 5000, skip: isTodoApp && skipBelowNode26 }, async function() {
            try {
                await import(filePath);
            } catch (error) {
                // Stack Trace like
                console.error(`Dynamic Eval is failed
    at doctest (${filePath}:1:1)`);
                throw error;
            }
        });
    });
});

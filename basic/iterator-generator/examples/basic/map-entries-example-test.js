import { describe, it } from "node:test";
import assert from "node:assert";
import strictEval from "strict-eval";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Code = fs.readFileSync(path.join(__dirname, "./map-entries.example.js"), "utf-8");

describe("map-entries-example", () => {
    it("Map.prototype.entries のイテレータを for...of で反復できる", () => {
        const actualLogs = [];
        const consoleMock = {
            log(message) {
                actualLogs.push(message);
            }
        };
        strictEval(Code, {
            console: consoleMock
        });
        assert.deepEqual(actualLogs, ["one: 1", "two: 2", "three: 3"]);
    });
});

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("converts Markdown to HTML", () => {
    const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), "utf8");
    const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), "utf8");

    assert(md2html(sample) === expected);
});

const assert = require("assert");
const strictEval = require("strict-eval");
const fs = require("fs");
const path = require("path");
const Code = fs.readFileSync(path.join(__dirname, "../../src/if/leap-year-flat-example.js"), "utf-8");
const testLeapYear = (year, expectedMessage) => {
    const MockDate = class MockDate {
        getFullYear() {
            return year;
        }
    };
    const console = {
        log(message) {
            assert.equal(message, expectedMessage, `year: ${year}`);
        }
    };
    strictEval(Code, {
        Date: MockDate,
        console
    });
};
describe("leap-year-flat", function() {
    context("うるう年であるならば", function() {
        it("should return \"うるう年です\"", function() {
            testLeapYear(0, "うるう年です");
            testLeapYear(4, "うるう年です");
            testLeapYear(400, "うるう年です");
            testLeapYear(2000, "うるう年です");
            testLeapYear(2016, "うるう年です");
            testLeapYear(1289031804, "うるう年です");
        });
    });
    context("うるう年でないならば", function() {
        it("should return \"うるう年ではありません\"", function() {
            testLeapYear(100, "うるう年ではありません");
            testLeapYear(200, "うるう年ではありません");
            testLeapYear(1234, "うるう年ではありません");
            testLeapYear(2100, "うるう年ではありません");
        });
    });
});

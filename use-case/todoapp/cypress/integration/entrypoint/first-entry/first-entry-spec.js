const URL = "/entrypoint/first-entry";
const visitWithConsole = require("../../../helper/visit-with-console").visitWithConsole;
describe(URL, function() {
    it("ロードするとログが表示される", function() {
        visitWithConsole(URL).then(({ logSpy }) => {
            expect(logSpy).to.be.calledWith("index.js: loaded");
        });
    });
});

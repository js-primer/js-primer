const URL = "/entrypoint/module-entry";
const visitWithConsole = require("../../../helper/visit-with-console").visitWithConsole;
describe(URL, function() {
    it("ロードするとApp.jsのログが表示される", function() {
        visitWithConsole(URL).then(({ logSpy }) => {
            const log0 = logSpy.getCall(0).args[0];
            const log1 = logSpy.getCall(1).args[0];
            expect(log0).to.equal("App.js: loaded");
            expect(log1).to.equal("App initialized");
        });
    });
});

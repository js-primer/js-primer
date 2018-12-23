const URL = "/app-structure/todo-html";
const visitWithConsole = require("../../../helper/visit-with-console").visitWithConsole;
describe(URL, function() {
    it(".todoappにスタイルが適応されている", function() {
        cy.visit(URL).then((win) => {
            const position = win.getComputedStyle(win.document.querySelector(".todoapp")).position;
            expect(position).to.equal("relative");
        });
        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("0");
        });
    });
    it("ロードするとApp.jsのログが表示される", function() {
        visitWithConsole(URL).then(({ logSpy }) => {
            const log0 = logSpy.getCall(0).args[0];
            const log1 = logSpy.getCall(1).args[0];
            expect(log0).to.equal("App.js: loaded");
            expect(log1).to.equal("App initialized");
        });
    });
});

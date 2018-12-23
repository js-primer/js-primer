const addNewTodo = require("../../../helper/todo-helper").addNewTodo;

const URL = "/final/final";
describe("Todo", function() {
    it("追加と削除", function() {
        // https://on.cypress.io/visit
        cy.visit(URL);

        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("0");
        });
        addNewTodo("新しいTODO 1");
        cy.get("li").should(items => {
            expect(items).to.have.length(1);
        });
        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("1");
        });
        addNewTodo("新しいTODO 2");
        cy.get("li").should(items => {
            expect(items).to.have.length(2);
        });
        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("2");
        });
        // 削除
        cy.get("li > button").each(e => e.click());
        cy.get("li").should(items => {
            expect(items).to.have.length(0);
        });
        // 削除後
        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("0");
        });
    });
    it("チェックの付け外し", function() {
        // https://on.cypress.io/visit
        cy.visit(URL);
        addNewTodo("新しいTODO 1");

        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("1");
        });
        // check
        cy.get("li > input[type=\"checkbox\"]").check();
        cy.get("li > s").should(items => {
            expect(items).to.have.length(1);
        });
        // uncheck
        cy.get("li > input[type=\"checkbox\"]").uncheck();
        cy.get("li > s").should(items => {
            expect(items).to.have.length(0);
        });
        // 変わらない
        cy.get("#js-todo-count").should(count => {
            expect(count).to.contain("1");
        });
    });
});

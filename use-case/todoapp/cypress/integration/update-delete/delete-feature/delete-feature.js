const URL = "/update-delete/delete-feature";
const addNewTodo = require("../../../helper/todo-helper").addNewTodo;
describe(URL, function() {
    it("Todoアイテムは削除できる", function() {
        cy.visit(URL);
        // checkbox は 0コ
        cy.get(".checkbox").should(items => {
            expect(items).to.have.length(0);
        });
        const inputText = "テスト";
        addNewTodo(inputText).then(() => {
            // checkbox は 1コ
            cy.get(".checkbox").should(items => {
                expect(items).to.have.length(1);
            });
            // チェックボックスを削除できる
            cy.get(".delete").click();
            // チェックボックスは 0コになる
            cy.get(".checkbox").should(items => {
                expect(items).to.have.length(0);
            });
        }).then(() => {
            const titleItems = ["a", "b", "c"];
            const promise = Promise.all(titleItems.map(item => addNewTodo(item)));
            promise.then(() => {
                cy.get(".checkbox").should(items => {
                    expect(items).to.have.length(titleItems.length);
                });
                // すべて削除できる
                titleItems.forEach(() => {
                    cy.get(".delete").first().click();
                });
                // チェックボックスは 0コになる
                cy.get(".checkbox").should(items => {
                    expect(items).to.have.length(0);
                });
            });
        });
    });
});

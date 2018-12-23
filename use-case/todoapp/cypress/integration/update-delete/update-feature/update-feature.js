const URL = "/update-delete/update-feature";
const addNewTodo = require("../../../helper/todo-helper").addNewTodo;
describe(URL, function() {
    it("input[type=checkbox]が追加される", function() {
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
            // checkedは 1コでトグルできる
            cy.get(".checkbox").check();
            cy.get(".checkbox").should("be.checked");
            cy.get(".checkbox").uncheck();
            cy.get(".checkbox").should("not.be.checked");
            cy.get(".checkbox").check();
        });
        addNewTodo(inputText).then(() => {
            // 新しく追加してもcheckedは維持される
            // モデルが更新されているため
            cy.get(".checkbox[checked]").should(items => {
                expect(items).to.have.length(1);
            });
            // checkbox は 2コ
            cy.get(".checkbox").should(items => {
                expect(items).to.have.length(2);
            });
            // すべてチェックできる
            cy.get(".checkbox").check();
            cy.get(".checkbox").should("be.checked");
        });
    });
});

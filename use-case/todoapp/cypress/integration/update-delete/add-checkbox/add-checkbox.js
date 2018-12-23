const URL = "/update-delete/add-checkbox";
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
            // checkedは 1コ
            cy.get(".checkbox").check();
            cy.get(".checkbox").should("be.checked");
        });
        addNewTodo(inputText).then(() => {
            // 新しく追加するとcheckedが消える
            cy.get(".checkbox[checked]").should(items => {
                expect(items).to.have.length(0);
            });
            // checkbox は 2コ
            cy.get(".checkbox").should(items => {
                expect(items).to.have.length(2);
            });
        });
    });
});

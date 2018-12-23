const addNewTodo = require("../../../helper/todo-helper").addNewTodo;
const URL = "/event-model/event-emitter";
describe(URL, function() {
    it("入力欄を埋めて送信するとTodoリストにTodoアイテムが追加される", function() {
        cy.visit(URL);
        const inputText = "test";
        addNewTodo(inputText).then(() => {
            // ulはある
            cy.get("#js-todo-list ul").should(items => {
                expect(items).to.have.length(1);
            });
            // liはある
            cy.get("#js-todo-list li").should(items => {
                expect(items).to.have.length(1);
            });
            // countは増える
            cy.get("#js-todo-count").should(count => {
                expect(count).to.contain("1");
            });
        });
        addNewTodo(inputText).then(() => {
            // liが増える
            cy.get("#js-todo-list li").should(items => {
                expect(items).to.have.length(2);
            });
            cy.get("#js-todo-count").should(count => {
                expect(count).to.contain("2");
            });
        });
    });
});

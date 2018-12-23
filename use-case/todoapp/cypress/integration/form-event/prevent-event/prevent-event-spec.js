const addNewTodo = require("../../../helper/todo-helper").addNewTodo;
const URL = "/form-event/prevent-event";
const visitWithConsole = require("../../../helper/visit-with-console").visitWithConsole;
describe(URL, function() {
    it("入力欄を埋めて送信するとコンソールログに表示される", function() {
        visitWithConsole(URL).then(({ logSpy }) => {
            const inputText = "test";
            addNewTodo(inputText).then(() => {
                const logCalls = logSpy.getCalls();
                const lastLog = logCalls[logCalls.length - 1].args[0];
                expect(lastLog).to.equal(`入力欄の値: ${inputText}`);
            });
        });
    });
});

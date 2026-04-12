import { test, expect } from "../../fixtures";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/event-model/event-emitter";

test.describe(URL, () => {
    test("入力欄を埋めて送信するとTodoリストにTodoアイテムが追加される", async ({ page }) => {
        await page.goto(URL);
        const inputText = "test";

        await addNewTodo(page, inputText);
        // ulはある
        await expect(page.locator("#js-todo-list ul")).toHaveCount(1);
        // liはある
        await expect(page.locator("#js-todo-list li")).toHaveCount(1);
        // countは増える
        await expect(page.locator("#js-todo-count")).toContainText("1");

        await addNewTodo(page, inputText);
        // liが増える
        await expect(page.locator("#js-todo-list li")).toHaveCount(2);
        await expect(page.locator("#js-todo-count")).toContainText("2");
    });
});

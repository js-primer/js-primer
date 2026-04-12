import { test, expect } from "../../fixtures";
import { visitWithConsole } from "../../helper/console-helper";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/form-event/prevent-event";

test.describe(URL, () => {
    test("入力欄を埋めて送信するとコンソールログに表示される", async ({ page }) => {
        const { consoleLogs } = await visitWithConsole(page, URL);
        const inputText = "test";
        await addNewTodo(page, inputText);
        // フォーム送信後のログを待つ
        await page.waitForTimeout(100);
        const lastLog = consoleLogs[consoleLogs.length - 1].text;
        expect(lastLog).toBe(`入力欄の値: ${inputText}`);
    });
});

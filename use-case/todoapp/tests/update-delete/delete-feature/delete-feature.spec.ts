import { test, expect } from "../../fixtures";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/update-delete/delete-feature";

test.describe(URL, () => {
    test("Todoアイテムは削除できる", async ({ page }) => {
        await page.goto(URL);
        // checkbox は 0コ
        await expect(page.locator(".checkbox")).toHaveCount(0);

        const inputText = "テスト";
        await addNewTodo(page, inputText);
        // checkbox は 1コ
        await expect(page.locator(".checkbox")).toHaveCount(1);
        // 削除できる
        await page.locator(".delete").click();
        // チェックボックスは 0コになる
        await expect(page.locator(".checkbox")).toHaveCount(0);

        // 複数追加して削除
        const titleItems = ["a", "b", "c"];
        for (const item of titleItems) {
            await addNewTodo(page, item);
        }
        await expect(page.locator(".checkbox")).toHaveCount(titleItems.length);

        // すべて削除できる
        for (let i = 0; i < titleItems.length; i++) {
            await page.locator(".delete").first().click();
        }
        // チェックボックスは 0コになる
        await expect(page.locator(".checkbox")).toHaveCount(0);
    });
});

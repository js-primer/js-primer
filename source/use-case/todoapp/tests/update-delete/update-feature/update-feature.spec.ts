import { test, expect } from "../../fixtures";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/update-delete/update-feature";

test.describe(URL, () => {
    test("input[type=checkbox]が追加される", async ({ page }) => {
        await page.goto(URL);
        // checkbox は 0コ
        await expect(page.locator(".checkbox")).toHaveCount(0);

        const inputText = "テスト";
        await addNewTodo(page, inputText);
        // checkbox は 1コ
        await expect(page.locator(".checkbox")).toHaveCount(1);
        // checkedは 1コでトグルできる
        await page.locator(".checkbox").check();
        await expect(page.locator(".checkbox")).toBeChecked();
        await page.locator(".checkbox").uncheck();
        await expect(page.locator(".checkbox")).not.toBeChecked();
        await page.locator(".checkbox").check();

        await addNewTodo(page, inputText);
        // 新しく追加してもcheckedは維持される
        // モデルが更新されているため
        await expect(page.locator(".checkbox[checked]")).toHaveCount(1);
        // checkbox は 2コ
        await expect(page.locator(".checkbox")).toHaveCount(2);
        // すべてチェックできる
        await page.locator(".checkbox").first().check();
        await page.locator(".checkbox").last().check();
        await expect(page.locator(".checkbox").first()).toBeChecked();
        await expect(page.locator(".checkbox").last()).toBeChecked();
    });
});

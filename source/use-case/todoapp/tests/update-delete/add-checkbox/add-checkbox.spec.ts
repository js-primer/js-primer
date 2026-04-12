import { test, expect } from "../../fixtures";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/update-delete/add-checkbox";

test.describe(URL, () => {
    test("input[type=checkbox]が追加される", async ({ page }) => {
        await page.goto(URL);
        // checkbox は 0コ
        await expect(page.locator(".checkbox")).toHaveCount(0);

        const inputText = "テスト";
        await addNewTodo(page, inputText);
        // checkbox は 1コ
        await expect(page.locator(".checkbox")).toHaveCount(1);
        // checkedは 1コ
        await page.locator(".checkbox").check();
        await expect(page.locator(".checkbox")).toBeChecked();

        await addNewTodo(page, inputText);
        // 新しく追加するとcheckedが消える
        await expect(page.locator(".checkbox[checked]")).toHaveCount(0);
        // checkbox は 2コ
        await expect(page.locator(".checkbox")).toHaveCount(2);
    });
});

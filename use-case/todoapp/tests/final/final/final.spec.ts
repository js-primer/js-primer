import { test, expect } from "../../fixtures";
import { addNewTodo } from "../../helper/todo-helper";

const URL = "/final/final";

test.describe("Todo", () => {
    test("追加と削除", async ({ page }) => {
        await page.goto(URL);

        await expect(page.locator("#js-todo-count")).toContainText("0");
        await addNewTodo(page, "新しいTODO 1");
        await expect(page.locator("li")).toHaveCount(1);
        await expect(page.locator("#js-todo-count")).toContainText("1");

        await addNewTodo(page, "新しいTODO 2");
        await expect(page.locator("li")).toHaveCount(2);
        await expect(page.locator("#js-todo-count")).toContainText("2");

        // 削除
        const buttons = page.locator("li > button");
        const count = await buttons.count();
        for (let i = 0; i < count; i++) {
            await page.locator("li > button").first().click();
        }
        await expect(page.locator("li")).toHaveCount(0);
        // 削除後
        await expect(page.locator("#js-todo-count")).toContainText("0");
    });

    test("チェックの付け外し", async ({ page }) => {
        await page.goto(URL);
        await addNewTodo(page, "新しいTODO 1");

        await expect(page.locator("#js-todo-count")).toContainText("1");
        // check
        await page.locator('li > input[type="checkbox"]').check();
        await expect(page.locator("li > s")).toHaveCount(1);
        // uncheck
        await page.locator('li > input[type="checkbox"]').uncheck();
        await expect(page.locator("li > s")).toHaveCount(0);
        // 変わらない
        await expect(page.locator("#js-todo-count")).toContainText("1");
    });
});

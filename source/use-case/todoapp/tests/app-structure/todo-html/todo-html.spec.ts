import { test, expect } from "../../fixtures";
import { visitWithConsole } from "../../helper/console-helper";

const URL = "/app-structure/todo-html";

test.describe(URL, () => {
    test(".todoappにスタイルが適応されている", async ({ page }) => {
        await page.goto(URL);
        const position = await page.locator(".todoapp").evaluate((el) => {
            return window.getComputedStyle(el).position;
        });
        expect(position).toBe("relative");
        await expect(page.locator("#js-todo-count")).toContainText("0");
    });

    test("ロードするとApp.jsのログが表示される", async ({ page }) => {
        const { consoleLogs } = await visitWithConsole(page, URL);
        expect(consoleLogs[0].text).toBe("App.js: loaded");
        expect(consoleLogs[1].text).toBe("App initialized");
    });
});

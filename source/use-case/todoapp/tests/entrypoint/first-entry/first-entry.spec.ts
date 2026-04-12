import { test, expect } from "../../fixtures";
import { visitWithConsole } from "../../helper/console-helper";

const URL = "/entrypoint/first-entry";

test.describe(URL, () => {
    test("ロードするとログが表示される", async ({ page }) => {
        const { consoleLogs } = await visitWithConsole(page, URL);
        expect(consoleLogs.some((log) => log.text === "index.js: loaded")).toBe(true);
    });
});

import { test, expect } from "../../fixtures";
import { visitWithConsole } from "../../helper/console-helper";

const URL = "/entrypoint/module-entry";

test.describe(URL, () => {
    test("ロードするとApp.jsのログが表示される", async ({ page }) => {
        const { consoleLogs } = await visitWithConsole(page, URL);
        expect(consoleLogs[0].text).toBe("App.js: loaded");
        expect(consoleLogs[1].text).toBe("App initialized");
    });
});

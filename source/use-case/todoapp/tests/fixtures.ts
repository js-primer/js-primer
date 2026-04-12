import { test as base } from "@playwright/test";
import * as path from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TODOAPP_DIR = path.resolve(__dirname, "..");

/**
 * jsprimer.netへの外部リクエストをローカルファイルから応答するカスタムテスト
 * CI環境で外部URLにアクセスできない場合でもテストが動作するようにする
 */
export const test = base.extend({
    page: async ({ page }, use) => {
        await page.route("https://jsprimer.net/use-case/todoapp/**", async (route) => {
            const url = new URL(route.request().url());
            const relativePath = url.pathname.replace(
                "/use-case/todoapp/",
                ""
            );
            const localFilePath = path.join(TODOAPP_DIR, relativePath);
            if (fs.existsSync(localFilePath)) {
                const contentType = localFilePath.endsWith(".css")
                    ? "text/css"
                    : "application/octet-stream";
                await route.fulfill({
                    status: 200,
                    contentType,
                    body: fs.readFileSync(localFilePath),
                });
            } else {
                await route.continue();
            }
        });
        await use(page);
    },
});

export { expect } from "@playwright/test";

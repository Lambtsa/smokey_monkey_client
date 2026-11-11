/* eslint-disable */
// Screenshots of every page, desktop and phone, for one site
import { chromium, devices } from "playwright";

const [base, prefix] = process.argv.slice(2);
const pages = ["/", "/restaurant", "/smoker", "/bar", "/contact", "/terms", "/does-not-exist"];
const browser = await chromium.launch({ channel: "chrome" });
for (const [label, options] of [
  ["desktop", { viewport: { width: 1440, height: 900 } }],
  ["phone", { ...devices["iPhone 13"] }],
]) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`${page.url()} ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") errors.push(`${page.url()} console: ${m.text()}`); });
  for (const path of pages) {
    const name = path === "/" ? "home" : path.slice(1);
    try {
      await page.goto(base + path, { waitUntil: "networkidle", timeout: 45000 });
      // scroll through so lazy pictures load, then back to the top
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 150));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: `${prefix}-${label}-${name}.png`, fullPage: true });
    } catch (e) {
      errors.push(`${path} FAILED ${e.message}`);
    }
  }
  if (label === "phone") {
    // open the mobile menu
    await page.goto(base + "/", { waitUntil: "networkidle" });
    const menu = page.getByRole("button", { name: "Menu" });
    if (await menu.count()) { await menu.first().click(); await page.waitForTimeout(500); }
    await page.screenshot({ path: `${prefix}-${label}-menu-open.png` });
  }
  await import("node:fs").then((fs) => fs.writeFileSync(`${prefix}-${label}-errors.txt`, errors.join("\n") + "\n"));
  await context.close();
}
await browser.close();

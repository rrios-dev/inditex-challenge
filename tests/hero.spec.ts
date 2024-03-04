import { expect, test } from "@playwright/test";

test("Hero Finder", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot();
});

test("Click on first hero", async ({ page }) => {
  await page.goto("/");
  await page.click("ul li a");
  await page.waitForLoadState("networkidle");
  await expect(page.getByText("Comics")).toBeTruthy();
});

test("Add heroes to fav", async ({ page }) => {
  await page.goto("/");
  await page.click(
    "body > main > div:nth-child(3) > ul > li:nth-child(1) > a > div > button"
  );
  await page.click(
    "body > header > div > a.link_link__db9uP.header-heart_button_header-heart-link__gn6V4"
  );
  await page.waitForLoadState("networkidle");
  await expect(page.getByText("1 Result")).toBeTruthy();
});

test("Seach heroes", async ({ page }) => {
  await page.goto("/");

  await page.waitForLoadState("networkidle");
  await expect(page.getByText("1 Result")).toBeTruthy();

  await page.fill('input[placeholder="Search"]', "spider");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot();
});

test("Hero detail", async ({ page }) => {
  await page.goto("/hero/1011334-3-d-man");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot();
});

test("Add hero to fav", async ({ page }) => {
  await page.goto("/hero/1011334-3-d-man");
  await page.waitForLoadState("networkidle");
  await page.click("body > main > section > div > div > div > button");
  await page.click(
    "body > header > div > a.link_link__db9uP.header-heart_button_header-heart-link__gn6V4"
  );
  await page.waitForLoadState("networkidle");
  await expect(page.getByText("1 Result")).toBeTruthy();
});

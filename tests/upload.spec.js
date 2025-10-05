const { test, expect } = require("@playwright/test");

test("Verify file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  // Upload file
  await page.locator("#file-upload").setInputFiles("./upload/image1.jpg");

  // Click upload button
  await page.locator("#file-submit").click();
  await page.waitForTimeout(5000)

  // Assertion
  await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!");
});

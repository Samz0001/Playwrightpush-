const { test, expect } = require("@playwright/test");

//  Using Loop

test("Verify Application Title Using Loop", async ({ page }) => {
  await page.goto("https://www.google.com");

  // Type query
  await page.locator("textarea[name='q']").fill("playwright");

  // Wait for autosuggestions
  await page.waitForSelector("//li[@role='presentation']");

  // Navigate suggestions
  const elements =await page.$$("//li[@role='presentation']")

  for(let i=0;elements.length;i++) {
    const text =await elements[i].textContent()

    if(text.includes("youtube")) {
      await elements[i].click()
      break
    }
  }
 

});

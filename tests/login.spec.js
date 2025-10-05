const{test,expect} = require("@playwright/test")

test("Valid Login Test", async function({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/")

    await page.getByPlaceholder("Username").fill("Admin",{delay:200})
    await page.locator("input[name='password']").fill("admin123",{delay:100})

    await page.locator("//button[@type='submit']").click()
    // await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()
        // await page.waitForTimeout(5000)


    await expect(page).toHaveURL(/login/)
} )
const {test,expect} = require("@playwright/test")

test("Keyboard Events in PlayWright",async  function ({page}){
    await page.goto("https://www.google.com/")
await page.locator("textarea[name='q']").focus()

await page.keyboard.type("Mukesh Otwani!")
await page.keyboard.press("ArrowLeft")
await page.keyboard.down("Shift")
for(let i =0;i<'Otwani'.length;i++) {
    await page.keyboard.press("ArrowLeft")
}

await page.keyboard.up("Shift")

await page.keyboard.press("Backspace")
    // await page.locator("textarea[name='q']").fill("Mukesh Otwani")
    // await page.waitForTimeout(5000)
    //  await page.keyboard.press("Control+A")
    // await page.waitForTimeout(5000)

    //  await page.keyboard.press("Control+C")
    // await page.waitForTimeout(5000)

    //  await page.keyboard.press("Backspace")
    // await page.waitForTimeout(5000)

    //  await page.keyboard.press("Control+V")
    // await page.waitForTimeout(5000)
})
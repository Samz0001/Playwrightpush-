const {test,expect} = require("@playwright/test")

test("Handle Frames",async function({page}){
    
    await page.goto("https://practice-automation.com/iframes/")

   const iframe= await page.frameLocator("(//iframe[@id='iframe-2'])[1]")
   await page.pause()
})
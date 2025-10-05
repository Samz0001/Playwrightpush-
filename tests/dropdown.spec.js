const {test,expect} = require("@playwright/test")


test("Dropdown",async function({page}) {


    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    /*
    label
    value
    index


    */

    await page.locator("#state").selectOption({label:"Goa"})
    // await page.waitForTimeout(1000)

    // await page.locator("#state").selectOption({value:"Himachal Pradesh"})
    // await page.waitForTimeout(5000)

    // await page.locator("#state").selectOption({index:4})
    // await page.waitForTimeout(3000)

    // const value = await page.locator("#state").textContent()

    // await expect(value.includes("Shyam")).toBeTruthy()

    let state =await page.$("#state")

    let allElements= await state.$$("option")

    let ddStatus= false

    for(let i =0;i<allElements.length;i++) {
       let element=  await allElements[i]
       let value =await  element.textContent()
        console.log("Value from dropdown usng for loop "+ value);

       if(value.includes("Goa")) {
        ddStatus=true
        break
       }
    }
    await expect(ddStatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing',"Swimming"])
    await page.waitForTimeout(5000)



})
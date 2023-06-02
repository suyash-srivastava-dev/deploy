const puppeteer = require("puppeteer-extra");


const instagram = {
    browser: null,
    page: null,

    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: true,
            args: [`--window-size=1920,1080`],
        });
        instagram.page = await instagram.browser.newPage();
        // await instagram.page.emulate(iPhone);
    },

    video: async (url) => {
        await instagram.page.goto(url, { waitUntil: "networkidle2" });
        await instagram.page.waitForTimeout(1000);

        // Fetch the script
        const infoJson = await instagram.page.$eval(
            "video",
            (txt) => txt.textContent
        );
        console.log(infoJson);
        // const json = '{"result":true, "count":42}';

        return infoJson
    },
    closeBrowser: async () => {
        await instagram.browser.close();
      },

}
    (async () => {
        await instagram.initialize();
        await instagram.video('https://www.tiktok.com/@diva__flawless/video/7236132098770308357');
        await instagram.closeBrowser();
    })();
module.exports = instagram;

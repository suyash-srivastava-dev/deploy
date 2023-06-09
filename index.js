const puppeteer = require("puppeteer-extra");


const instagram = {
    browser: null,
    page: null,

    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: true,
            executablePath: '/usr/bin/chromium-browser',
            args: ['--no-sandbox'],
        });
        instagram.page = await instagram.browser.newPage();
        // await instagram.page.emulate(iPhone);
    },

    video: async (url) => {
        await instagram.page.goto(url, { waitUntil: "networkidle2" });
        await instagram.page.waitForTimeout(1000);
        console.log('page loaded');

        // Fetch the script
        const infoJson = await instagram.page.$eval(
            "video",
            (txt) => txt.getAttribute("src")
        );

        console.log(infoJson);
        // const json = '{"result":true, "count":42}';

        return infoJson
    },
    closeBrowser: async () => {
        await instagram.browser.close();
      },

}

module.exports = instagram;

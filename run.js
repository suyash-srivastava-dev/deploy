const ig = require("./index");

(async () => {
  await ig.initialize();
  let scriptVal= await ig.video('https://www.tiktok.com/@diva__flawless/video/7236132098770308357');
  console.log('output from main')
  await ig.closeBrowser();

  console.log(scriptVal)
})();
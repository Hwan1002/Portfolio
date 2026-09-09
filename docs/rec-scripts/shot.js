// 빠른 스크린샷 유틸: node shot.js <url> <outfile> [w] [h]
const puppeteer = require("puppeteer-core");

(async () => {
  const [url, out, w = "1280", h = "800"] = process.argv.slice(2);
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    args: ["--no-sandbox", `--window-size=${w},${h}`],
    defaultViewport: { width: +w, height: +h },
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: out });
  console.log("saved", out);
  await browser.close();
})();

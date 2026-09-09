// 메인 페이지 → 렌탈물품 목록 둘러보기 데모
const { launch, installCursor, moveClick, byText, sleep, BASE, ffmpegPath } = require("./lib");

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await installCursor(page);
  await page.goto(BASE, { waitUntil: "networkidle2" });
  await sleep(800);

  const rec = await page.screencast({ path: "out/main.webm", ffmpegPath });
  await sleep(1200);

  // 히어로/카테고리 훑기
  await page.mouse.move(640, 270, { steps: 20 });
  await sleep(500);
  await page.mouse.move(497, 377, { steps: 18 }); // 가전제품
  await sleep(350);
  await page.mouse.move(497, 453, { steps: 12 }); // 캠핑용품
  await sleep(350);
  await page.mouse.move(784, 453, { steps: 12 }); // 운동기구
  await sleep(600);

  // 스크롤로 인기 물품 섹션 노출
  await page.evaluate(() => window.scrollBy({ top: 320, behavior: "smooth" }));
  await sleep(1300);

  // 렌탈물품 목록으로 이동
  const nav = await byText(page, "a, button, li, span", "렌탈물품");
  await moveClick(page, nav, { pause: 450 });
  await sleep(2200);

  // 목록 스크롤
  await page.evaluate(() => window.scrollBy({ top: 300, behavior: "smooth" }));
  await sleep(1400);
  await page.evaluate(() => window.scrollBy({ top: -300, behavior: "smooth" }));
  await sleep(1500);

  await rec.stop();
  await browser.close();
  console.log("main.webm done");
})();

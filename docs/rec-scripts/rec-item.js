// 물품 상세 + 찜 데모 (master 로그인 상태)
const { launch, installCursor, moveClick, byText, login, sleep, BASE, ffmpegPath } = require("./lib");

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await installCursor(page);
  await login(page, "master", "123");
  await page.goto(BASE + "/rentalitem", { waitUntil: "networkidle2" });
  await sleep(1000);

  const rec = await page.screencast({ path: "out/item.webm", ffmpegPath });
  await sleep(1000);

  // 텐트 카드로 이동 후 클릭
  const card = await byText(page, ".rental-item", "텐트");
  await moveClick(page, card, { pause: 600 });
  await sleep(2200);

  // 상세 정보 훑어보기
  await page.mouse.move(870, 420, { steps: 20 });
  await sleep(700);
  await page.evaluate(() => window.scrollBy({ top: 350, behavior: "smooth" }));
  await sleep(1500);
  await page.evaluate(() => window.scrollBy({ top: -350, behavior: "smooth" }));
  await sleep(1200);

  // 찜(하트) 클릭
  await moveClick(page, ".wish-btn", { pause: 600 });
  await sleep(1500);
  // "위시리스트에 추가되었습니다" 모달 확인
  const ok = await byText(page, "button", "확인");
  await moveClick(page, ok, { pause: 400 });
  await sleep(1500);

  await rec.stop();
  await page.screenshot({ path: "probe_after_wish.png" });
  await browser.close();
  console.log("item.webm done");
})();

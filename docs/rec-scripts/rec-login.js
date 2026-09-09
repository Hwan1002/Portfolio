// 로그인 데모 녹화
const { launch, installCursor, moveClick, typeInto, sleep, BASE, ffmpegPath } = require("./lib");

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await installCursor(page);
  await page.goto(`${BASE}/login`, { waitUntil: "networkidle2" });
  await sleep(500);

  const rec = await page.screencast({ path: "out/login.webm", ffmpegPath });
  await sleep(800);
  await typeInto(page, 'input[placeholder="아이디 입력"]', "master");
  await sleep(300);
  await typeInto(page, 'input[placeholder="비밀번호 입력"]', "123");
  await sleep(400);
  await moveClick(page, "button.login_button", { pause: 500 });
  await sleep(1500);
  // 로그인 성공 모달의 "확인" 클릭 → 메인으로 이동
  const { byText } = require("./lib");
  const ok = await byText(page, "button", "확인");
  await moveClick(page, ok, { pause: 400 });
  await sleep(3000);
  await rec.stop();
  await browser.close();
  console.log("login.webm done");
})();

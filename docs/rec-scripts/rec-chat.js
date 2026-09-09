// 실시간 채팅 데모: master(빌리는 사람) vs master1/성수동이웃(빌려주는 사람)
// 두 화면을 동시에 녹화한 뒤 ffmpeg hstack으로 합칩니다.
const { launch, installCursor, moveClick, byText, login, sleep, BASE, ffmpegPath } = require("./lib");

const W = 820, H = 800;

async function typeMsg(page, text) {
  const input = await page.waitForSelector('input[placeholder="메시지를 입력하세요"]', { visible: true, timeout: 10000 });
  await moveClick(page, input, { pause: 300 });
  await page.keyboard.type(text, { delay: 60 });
  await sleep(300);
  await page.keyboard.press("Enter");
}

(async () => {
  const browser = await launch({ width: W, height: H });
  const ctxA = await browser.createBrowserContext();
  const ctxB = await browser.createBrowserContext();
  const A = await ctxA.newPage(); // master: 빌리는 사람
  const B = await ctxB.newPage(); // master1: 물건 주인
  await A.setViewport({ width: W, height: H });
  await B.setViewport({ width: W, height: H });
  await installCursor(A, "빌리는 사람 (master)");
  await installCursor(B, "물건 주인 (성수동이웃)");
  A.on("dialog", (d) => { console.log("DIALOG A:", d.message()); d.accept(); });
  B.on("dialog", (d) => { console.log("DIALOG B:", d.message()); d.accept(); });

  await login(A, "master", "123");
  await login(B, "master1", "123");

  // A: 텐트 상세 페이지에서 시작
  await A.goto(BASE + "/post/item/202", { waitUntil: "networkidle2" });
  // B: 채팅 목록 대기
  await B.goto(BASE + "/chat", { waitUntil: "networkidle2" });
  await sleep(1200);

  const recA = await A.screencast({ path: "out/chatA.webm", ffmpegPath });
  const recB = await B.screencast({ path: "out/chatB.webm", ffmpegPath });
  await sleep(800);

  // A: 채팅하기 클릭 → 채팅방 진입
  await A.evaluate(() => window.scrollBy({ top: 400, behavior: "smooth" }));
  await sleep(900);
  const chatBtn = await byText(A, "button", "채팅하기");
  await moveClick(A, chatBtn, { pause: 500 });
  // 채팅방 진입 + WebSocket 연결 대기
  await A.waitForSelector('input[placeholder="메시지를 입력하세요"]', { visible: true, timeout: 15000 });
  await sleep(4000);

  // A: 첫 메시지
  await typeMsg(A, "안녕하세요! 텐트 이번 주말에 빌릴 수 있을까요?");
  await sleep(2000);

  // B: 채팅 목록 새로고침 → 방 입장
  await B.reload({ waitUntil: "networkidle2" });
  await sleep(1500);
  await moveClick(B, ".chatRoom", { pause: 600 });
  await sleep(2200);

  // 대화 주고받기
  await typeMsg(B, "안녕하세요 :) 네, 토요일부터 가능해요!");
  await sleep(2200);
  await typeMsg(A, "좋아요! 토요일 오전에 픽업하러 갈게요");
  await sleep(2200);
  await typeMsg(B, "네~ 성수역 3번 출구에서 뵐게요");
  await sleep(2800);

  await recA.stop();
  await recB.stop();
  await A.screenshot({ path: "probe_chatA.png" });
  await B.screenshot({ path: "probe_chatB.png" });
  await browser.close();
  console.log("chatA/chatB webm done");
})();

// masil 데모 녹화 공용 헬퍼
const puppeteer = require("puppeteer-core");
const ffmpegPath = require("ffmpeg-static");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:3001";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function launch({ width = 1280, height = 800 } = {}) {
  return puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", `--window-size=${width},${height + 120}`, "--lang=ko-KR", "--force-device-scale-factor=1"],
    defaultViewport: { width, height },
    protocolTimeout: 180000,
  });
}

// 가짜 커서 오버레이(스크린캐스트에는 실제 커서가 안 찍히므로)
async function installCursor(page, label) {
  await page.evaluateOnNewDocument((labelText) => {
    const install = () => {
      if (document.getElementById("__cursor")) return;
      const c = document.createElement("div");
      c.id = "__cursor";
      c.style.cssText =
        "position:fixed;z-index:2147483647;width:20px;height:20px;border-radius:50%;" +
        "background:rgba(22,163,74,.30);border:2.5px solid #16a34a;pointer-events:none;" +
        "transform:translate(-50%,-50%);left:-60px;top:-60px;box-shadow:0 1px 6px rgba(0,0,0,.25)";
      document.body.appendChild(c);
      window.addEventListener("mousemove", (e) => { c.style.left = e.clientX + "px"; c.style.top = e.clientY + "px"; }, true);
      window.addEventListener("mousedown", () => { c.style.width = "13px"; c.style.height = "13px"; }, true);
      window.addEventListener("mouseup", () => { c.style.width = "20px"; c.style.height = "20px"; }, true);
      if (labelText) {
        const b = document.createElement("div");
        b.style.cssText =
          "position:fixed;z-index:2147483647;top:8px;left:8px;padding:4px 12px;border-radius:999px;" +
          "background:#16a34a;color:#fff;font-size:13px;font-weight:700;pointer-events:none;font-family:sans-serif";
        b.textContent = labelText;
        document.body.appendChild(b);
      }
    };
    if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", install);
    else install();
  }, label || "");
}

// 요소 중앙으로 부드럽게 이동 후 클릭
async function moveClick(page, target, { pause = 350, steps = 22 } = {}) {
  const el = typeof target === "string" ? await page.waitForSelector(target, { visible: true, timeout: 10000 }) : target;
  await el.scrollIntoViewIfNeeded();
  await sleep(150);
  const box = await el.boundingBox();
  const x = box.x + box.width / 2, y = box.y + box.height / 2;
  await page.mouse.move(x, y, { steps });
  await sleep(pause);
  await el.click();
  return el;
}

// 텍스트로 요소 찾기 (버튼/카드 등)
async function byText(page, selector, text) {
  await page.waitForSelector(selector, { visible: true, timeout: 10000 });
  const handles = await page.$$(selector);
  for (const h of handles) {
    const t = await h.evaluate((el) => el.textContent);
    if (t && t.includes(text)) return h;
  }
  throw new Error(`byText: "${text}" not found in ${selector}`);
}

async function typeInto(page, selector, text, { delay = 75 } = {}) {
  await moveClick(page, selector, { pause: 250 });
  await page.keyboard.type(text, { delay });
}

// 녹화 시작/종료
async function record(page, path) {
  const recorder = await page.screencast({ path, ffmpegPath });
  return recorder;
}

// UI 로그인 (녹화 없이 세션 확보용) — 성공 모달의 "확인"까지 눌러야 userId가 저장됨
async function login(page, id, pw) {
  await page.goto(`${BASE}/login`, { waitUntil: "networkidle2" });
  await page.type('input[placeholder="아이디 입력"]', id, { delay: 20 });
  await page.type('input[placeholder="비밀번호 입력"]', pw, { delay: 20 });
  await page.click("button.login_button");
  const ok = await confirmModal(page);
  if (!ok) throw new Error(`login modal 확인 버튼을 찾지 못함 (${id})`);
  await sleep(1500);
}

// 화면의 모달에서 "확인" 버튼 클릭
async function confirmModal(page, timeout = 8000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    const buttons = await page.$$("button");
    for (const b of buttons) {
      const t = await b.evaluate((el) => el.textContent.trim());
      if (t === "확인") {
        await b.click();
        return true;
      }
    }
    await sleep(300);
  }
  return false;
}

module.exports = { launch, installCursor, moveClick, byText, typeInto, record, login, confirmModal, sleep, BASE, ffmpegPath };

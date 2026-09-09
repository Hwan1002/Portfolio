// Wikimedia Commons에서 데모용 물품 사진 후보를 내려받는다.
const fs = require("fs");
const path = require("path");

const items = [
  { key: "tent", q: "camping tent dome" },
  { key: "drill", q: "cordless drill" },
  { key: "lantern", q: "camping lantern" },
  { key: "projector", q: "video projector" },
  { key: "suitcase", q: "travel suitcase luggage" },
  { key: "bicycle", q: "folding bicycle" },
];

const OUT = path.join(__dirname, "imgs");
fs.mkdirSync(OUT, { recursive: true });

async function main() {
  for (const item of items) {
    const api =
      "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
      "&gsrsearch=" + encodeURIComponent(item.q + " filetype:bitmap") +
      "&gsrlimit=4&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json";
    try {
      const res = await fetch(api, { headers: { "User-Agent": "portfolio-demo-seed/1.0" } });
      const json = await res.json();
      const pages = Object.values(json?.query?.pages || {});
      let i = 0;
      for (const p of pages.slice(0, 3)) {
        const url = p.imageinfo?.[0]?.thumburl;
        if (!url) continue;
        const img = await fetch(url, { headers: { "User-Agent": "portfolio-demo-seed/1.0" } });
        const buf = Buffer.from(await img.arrayBuffer());
        const ext = url.includes(".png") ? "png" : "jpg";
        fs.writeFileSync(path.join(OUT, `${item.key}_${i}.${ext}`), buf);
        console.log(`${item.key}_${i}.${ext} <- ${p.title} (${buf.length} bytes)`);
        i++;
      }
      if (i === 0) console.log(`${item.key}: NO RESULTS`);
    } catch (e) {
      console.log(`${item.key}: ERROR ${e.message}`);
    }
  }
}
main();

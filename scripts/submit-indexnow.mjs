// Submit the site's URLs to IndexNow (Bing, Yandex, Seznam, and other
// participating engines) for near-instant indexing of new/updated pages.
//
// Usage:  node scripts/submit-indexnow.mjs [https://your-domain.com]
// Run it after a deploy. The default host below should match the live domain;
// the key file must be reachable at https://HOST/<key>.txt (it is committed
// to /public).

const KEY = "ae11a67868638997e23601bb12426a49";

const HOST = (process.argv[2] || "https://nextchaptertravel.com").replace(/\/$/, "");

// Keep this list in sync with src/app/sitemap.ts.
const routes = [
  "/",
  "/about",
  "/team",
  "/experiences",
  "/how-it-works",
  "/plan-your-trip",
  "/testimonials",
  "/stories",
  "/resources",
  "/faq",
  "/terms",
  "/privacy",
];

const host = new URL(HOST).host;

const payload = {
  host,
  key: KEY,
  keyLocation: `${HOST}/${KEY}.txt`,
  urlList: routes.map((r) => `${HOST}${r}`),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`IndexNow → ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log(`Submitted ${routes.length} URLs for ${host}.`);
} else {
  console.log(await res.text());
  process.exitCode = 1;
}

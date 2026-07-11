const res = await fetch("https://www.avenuecalgary.com/things-to-do/fun-things-to-do-calgary-may-june/", {
  headers: { "User-Agent": "Mozilla/5.0 (compatible; test)" }
});
const html = await res.text();

// Find from first h3 containing "bigbooksale" link context - look at raw 4000 chars
const idx = html.indexOf("bigbooksale");
const raw = html.slice(Math.max(0, idx - 800), idx + 3500);
const clean = raw
  .replace(/<noscript>[\s\S]*?<\/noscript>/gi, "")
  .replace(/srcset="[^"]+"/g, "")
  .replace(/data-srcset="[^"]+"/g, "")
  .replace(/data-src="([^"]+)"/g, 'data-src="$1"')
  .replace(/\s{2,}/g, " ");
console.log(clean);

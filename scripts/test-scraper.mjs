import { parse } from "node-html-parser";

const MONTH_NUM = {january:1,february:2,march:3,april:4,may:5,june:6,july:7,august:8,september:9,october:10,november:11,december:12};
const fmt=(y,m,d)=>`${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
function parseDateText(text){
  const t=text.trim().toLowerCase().replace(/\s+/g," "),year=2026;
  const cross=t.match(/^(\w+)\s+(\d+)\s+to\s+(\w+)\s+(\d+)/);
  if(cross){const m1=MONTH_NUM[cross[1]],m2=MONTH_NUM[cross[3]];if(m1&&m2)return{start:fmt(year,m1,+cross[2]),end:fmt(year,m2,+cross[4])}}
  const range=t.match(/^(\w+)\s+(\d+)\s*(?:to|-)\s*(\d+)/);
  if(range){const m=MONTH_NUM[range[1]];if(m)return{start:fmt(year,m,+range[2]),end:fmt(year,m,+range[3])}}
  const single=t.match(/^(\w+)\s+(\d+)/);
  if(single){const m=MONTH_NUM[single[1]];if(m)return{start:fmt(year,m,+single[2])}}
  return null;
}

const res = await fetch("https://www.avenuecalgary.com/things-to-do/fun-things-to-do-calgary-may-june/",{headers:{"User-Agent":"Mozilla/5.0"}});
const html = await res.text();
const root = parse(html);
const nodes = root.querySelectorAll("h3, p, figure");

let pending = null, events = [], currentSection = "Festivals";
function flush(){if(pending?.name&&pending?.date)events.push({...pending});pending=null;}
function mapSection(t){t=t.toLowerCase();if(t.includes("listen"))return"Concerts";if(t.includes("see"))return"Arts & Theatre";return"Festivals";}

for(const node of nodes){
  const tag=node.tagName?.toLowerCase();
  if(tag==="h3"){
    const ext=node.querySelectorAll("a").filter(a=>a.getAttribute("target")==="_blank"||(a.getAttribute("href")??"").startsWith("http"));
    if(ext.length===0){flush();currentSection=mapSection(node.text.trim());}
    else{flush();pending={name:ext[0].text.trim(),sourceUrl:ext[0].getAttribute("href")??"",category:currentSection};}
    continue;
  }
  if(!pending)continue;
  if(tag==="p"){
    const text=node.text.trim().replace(/ /g,"").trim();if(!text)continue;
    const strong=node.querySelector("strong,b");
    if(strong&&!pending.date){const p=parseDateText(strong.text);if(p){pending.date=p.start;pending.endDate=p.end;continue;}}
    if(node.querySelector("em")&&text.length<40)continue;
    if(pending.date&&!pending.description&&text.length>20)pending.description=text;
  }
  if(tag==="figure"){
    // FIXED: prioritise data-src over src (src is a blank data URI on lazy-loaded images)
    for(const img of node.querySelectorAll("img")){
      const src=img.getAttribute("data-src")??img.getAttribute("src");
      if(src&&!src.startsWith("data:")&&!pending.imageUrl){pending.imageUrl=src;break;}
    }
  }
}
flush();

console.log(`Found ${events.length} events:\n`);
events.forEach(e=>{
  console.log(`✓ ${e.name}`);
  console.log(`  ${e.date}${e.endDate?` → ${e.endDate}`:""} | ${e.category}`);
  console.log(`  Image: ${e.imageUrl?"✓ "+e.imageUrl.slice(e.imageUrl.lastIndexOf("/")+1):"none"}`);
  console.log();
});

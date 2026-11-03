// PURE web guide: offline knowledge base + optional live AI (server.json -> <url>/api/web-guide)
(()=>{const APK='https://github.com/purefxaidev/purecall-web/releases/download/v0.10.1/PURE-0.10.1.apk';
const L=()=>document.documentElement.lang==='th'?'th':'en';
const T={th:{title:'ถามผู้ช่วย PURE',ph:'พิมพ์คำถาม…',send:'ส่ง',close:'ปิด',hello:'สวัสดีครับ ผมช่วยแนะนำการติดตั้งและใช้งาน PURE ได้ เลือกหัวข้อด้านล่างหรือพิมพ์คำถามได้เลย',miss:'ขอโทษครับ ผมยังไม่มีคำตอบเรื่องนี้ ลองเลือกหัวข้อด้านล่างนะครับ',next:'ขั้นต่อไป',prev:'ย้อนกลับ',done:'เสร็จแล้ว',step:'ขั้นที่',live:'ตอบโดย AI ออนไลน์',offline:'คู่มือในตัว',soon:'มีแล้ว'},
en:{title:'Ask PURE guide',ph:'Type a question…',send:'Send',close:'Close',hello:'Hi! I can help you install and use PURE. Pick a topic below or type a question.',miss:'Sorry, I don\'t have an answer for that yet. Try one of the topics below.',next:'Next',prev:'Back',done:'Done',step:'Step',live:'Answered by online AI',offline:'Built-in guide',soon:'Available'}};
// KB: id -> {k:{th:[keywords],en:[...]}, chip:{th,en}, steps:[{th,en,img?}], soon?}
const KB=[
{id:'download',chip:{th:'ดาวน์โหลด',en:'Download'},k:['ดาวน์โหลด','โหลด','apk','download','get','ไฟล์'],steps:[
{th:`เปิดหน้านี้บนมือถือ Android 8 ขึ้นไป แล้วกด <a href="${APK}">ดาวน์โหลด PURE-0.10.1.apk</a>`,en:`Open this page on an Android 8+ phone and tap <a href="${APK}">Download PURE-0.10.1.apk</a>`,img:'assets/img/hero.webp'},
{th:'ถ้าเบราว์เซอร์เตือนว่าไฟล์อาจเป็นอันตราย ให้กด "ดาวน์โหลดต่อ" เพราะเป็นไฟล์ APK ที่ไม่ได้มาจาก Google Play',en:'If the browser warns the file may be harmful, tap "Download anyway". It warns because the APK is not from Google Play.'}]},
{id:'unknown',chip:{th:'อนุญาตแหล่งที่ไม่รู้จัก',en:'Unknown sources'},k:['แหล่งที่ไม่รู้จัก','ไม่รู้จัก','อนุญาต','unknown','sources','permission','blocked','บล็อก'],steps:[
{th:'เปิด ตั้งค่า › แอป › เลือกเบราว์เซอร์ที่ใช้ดาวน์โหลด (เช่น Chrome)',en:'Open Settings › Apps › choose the browser you downloaded with (e.g. Chrome)'},
{th:'แตะ "ติดตั้งแอปที่ไม่รู้จัก" แล้วเปิด "อนุญาตจากแหล่งนี้" ชื่อเมนูอาจต่างกันเล็กน้อยตามยี่ห้อมือถือ',en:'Tap "Install unknown apps" and turn on "Allow from this source". Menu names vary slightly by phone brand.'}]},
{id:'install',chip:{th:'ติดตั้ง',en:'Install'},k:['ติดตั้ง','install','setup','ลง'],steps:[
{th:'เปิดไฟล์ PURE-0.10.1.apk จากแถบแจ้งเตือนหรือโฟลเดอร์ ดาวน์โหลด',en:'Open PURE-0.10.1.apk from the notification or your Downloads folder'},
{th:'กด "ติดตั้ง" รอสักครู่ แล้วกด "เปิด"',en:'Tap "Install", wait a moment, then tap "Open"'},
{th:'ใส่ที่อยู่เซิร์ฟเวอร์ PURE ที่คุณได้รับ หรือเซิร์ฟเวอร์ที่คุณรันเอง',en:'Enter the PURE server address you were given, or one you run yourself'}]},
{id:'signup',chip:{th:'สมัครสมาชิก',en:'Sign up'},k:['สมัคร','สมาชิก','บัญชี','ล็อกอิน','เข้าสู่ระบบ','sign up','signup','register','account','login'],steps:[
{th:'ในแอป เลือก "สมัครสมาชิก" ตั้งชื่อผู้ใช้และรหัสผ่าน',en:'In the app, choose "Sign up" and pick a username and password'},
{th:'ครั้งต่อไปใช้ชื่อผู้ใช้และรหัสผ่านเดิมเข้าสู่ระบบ บัญชีจะเก็บอยู่บนเซิร์ฟเวอร์ที่คุณเชื่อมต่อ',en:'Next time, log in with the same username and password. Your account lives on the server you connected to.'}]},
{id:'qr',chip:{th:'แอดเพื่อนด้วย QR',en:'Add friends (QR)'},k:['qr','คิวอาร์','แอด','เพิ่มเพื่อน','เพื่อน','add friend','friend','scan','สแกน'],steps:[
{th:'เปิดหน้าเพื่อน แล้วกดแสดง QR ของคุณให้เพื่อนสแกน',en:'Open Friends and show your QR code for your friend to scan',img:'assets/img/chat.webp'},
{th:'หรือกดสแกน QR แล้วเล็งกล้องไปที่ QR ของเพื่อน ทั้งสองคนต้องใช้เซิร์ฟเวอร์เดียวกัน',en:'Or tap Scan and point the camera at your friend\'s QR. You both need to be on the same server.'}]},
{id:'calls',chip:{th:'โทร & วิดีโอคอล',en:'Calls'},k:['โทร','วิดีโอคอล','คอล','call','video','voice','เสียง'],steps:[
{th:'เปิดแชตกับเพื่อน แล้วกดไอคอนโทรศัพท์ (เสียง) หรือกล้อง (วิดีโอ)',en:'Open a chat with a friend and tap the phone icon (voice) or camera icon (video)',img:'assets/img/hero.webp'},
{th:'อนุญาตไมโครโฟนและกล้องเมื่อแอปถาม สายจะเชื่อมต่อผ่าน WebRTC',en:'Allow microphone and camera when asked. Calls connect over WebRTC.'}]},
{id:'group',chip:{th:'วิดีโอคอลกลุ่ม',en:'Group calls'},k:['กลุ่ม','หลายคน','group call','group','conference'],steps:[
{th:'เปิดแชตกลุ่ม แล้วกดปุ่มวิดีโอคอลด้านบน เพื่อนในกลุ่มจะได้รับสายพร้อมกัน',en:'Open a group chat and tap the video-call button at the top; everyone in the group gets the call.',img:'assets/img/group.webp'}]},
{id:'stories',chip:{th:'สตอรี่',en:'Stories'},k:['สตอรี่','story','stories','24'],steps:[
{th:'ไปที่ไทม์ไลน์ กดวงกลม สตอรี่ของคุณ ด้านบน เลือกรูปหรือพิมพ์ข้อความ สตอรี่จะหายไปเองใน 24 ชั่วโมง',en:'Go to Timeline, tap Your story at the top, pick a photo or type text. Stories disappear after 24 hours.',img:'assets/img/stories.webp'}]},
{id:'nearby',chip:{th:'โหมดออฟไลน์',en:'Offline nearby'},k:['ออฟไลน์','ไม่มีเน็ต','ใกล้','บลูทูธ','bluetooth','wifi','wi-fi','offline','nearby','hotspot'],steps:[
{th:'เปิด Wi-Fi หรือ Bluetooth ทั้งสองเครื่อง และให้ทั้งสองเครื่องเปิดแอป PURE',en:'Turn on Wi-Fi or Bluetooth on both phones and open PURE on both',img:'assets/img/nearby.webp'},
{th:'เลือกโหมดข้อความใกล้ตัว แล้วเลือกเครื่องของเพื่อน ข้อความจะเข้ารหัสและส่งได้โดยไม่ต้องใช้อินเทอร์เน็ต',en:'Choose nearby messaging and pick your friend\'s device. Messages are encrypted and work without internet.'}]},
{id:'update',chip:{th:'อัปเดต',en:'Updates'},k:['อัปเดต','อัพเดต','เวอร์ชัน','update','upgrade','version','ใหม่'],steps:[
{th:'ดาวน์โหลด APK รุ่นใหม่จากหน้านี้ แล้วติดตั้งทับได้เลย ข้อมูลบนเซิร์ฟเวอร์ยังอยู่',en:'Download the newer APK from this page and install it over the old one. Your server data stays.'},
{th:'ถ้าติดตั้งทับไม่ได้ (ลายเซ็นไม่ตรง) ให้ลบแอปเดิมก่อน แล้วค่อยติดตั้งใหม่',en:'If it won\'t install over the old one (signature mismatch), uninstall the old app first, then install again.'}]},
{id:'trouble',chip:{th:'แก้ปัญหา',en:'Troubleshooting'},k:['ปัญหา','ไม่ได้','เปิดไม่ขึ้น','เด้ง','error','ค้าง','problem','not working','crash','fail','help','ช่วย'],steps:[
{th:'"ไม่ได้ติดตั้งแอป": ลบรุ่นเก่าก่อน และเช็กว่ามือถือเป็น Android 8 ขึ้นไป',en:'"App not installed": uninstall the old version first and check the phone runs Android 8+'},
{th:'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้: เช็กที่อยู่เซิร์ฟเวอร์และอินเทอร์เน็ต',en:'Can\'t reach the server: check the server address and your internet connection'},
{th:'โทรแล้วไม่มีเสียง/ภาพ: อนุญาตไมโครโฟนและกล้องใน ตั้งค่า › แอป › PURE › สิทธิ์',en:'No audio/video in calls: allow microphone and camera in Settings › Apps › PURE › Permissions'},
{th:'นี่เป็นรุ่นทดสอบ (debug) ถ้ายังมีปัญหา แจ้งรุ่นมือถือและอาการที่เจอให้ทีมงาน',en:'This is a test (debug) build. If problems continue, report your phone model and what you see to the team.'}]}];
let liveURL=null,history=[],tut=null;
fetch('server.json',{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(j=>{if(j&&/^https:\/\//.test(j.url||''))liveURL=j.url.replace(/\/$/,'')}).catch(()=>{});
const root=document.createElement('div');root.className='guide';root.innerHTML=`<button class="guide-fab glass" type="button" aria-expanded="false" aria-controls="guide-panel"><span class="guide-dot"></span><span class="g-t"></span></button>
<section id="guide-panel" class="guide-panel glass" role="dialog" aria-labelledby="guide-h" hidden><header><b id="guide-h"></b><button class="guide-x" type="button">×</button></header>
<div class="guide-log" role="log" aria-live="polite"></div><div class="guide-chips"></div>
<form class="guide-form"><input type="text" maxlength="300" autocomplete="off"><button class="btn sm" type="submit"></button></form></section>`;
document.body.appendChild(root);
const $=s=>root.querySelector(s),fab=$('.guide-fab'),panel=$('.guide-panel'),log=$('.guide-log'),chips=$('.guide-chips'),inp=$('input');
function labels(){const t=T[L()];$('.g-t').textContent=t.title;$('#guide-h').textContent=t.title;inp.placeholder=t.ph;inp.setAttribute('aria-label',t.ph);$('.guide-form .btn').textContent=t.send;$('.guide-x').setAttribute('aria-label',t.close);renderChips()}
function msg(html,who,meta){const d=document.createElement('div');d.className='gm '+who;d.innerHTML=html+(meta?`<small>${meta}</small>`:'');log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function renderChips(){chips.replaceChildren(...KB.map(k=>{const b=document.createElement('button');b.type='button';b.className='chip'+(k.soon?' soon':'');b.textContent=k.chip[L()]+(k.soon?' · '+T[L()].soon:'');b.onclick=()=>{msg(esc(k.chip[L()]),'me');start(k)};return b}))}
function start(k){tut={k,i:0};showStep()}
function showStep(){const {k,i}=tut,t=T[L()],s=k.steps[i],n=k.steps.length;
const d=msg(`${n>1?`<b>${t.step} ${i+1}/${n}</b> `:''}${k.soon?`<span class="tag">${t.soon}</span> `:''}${s[L()]}${s.img?`<img src="${s.img}" alt="" loading="lazy">`:''}`,'bot',t.offline);
if(n>1){const nav=document.createElement('div');nav.className='gnav';if(i>0)nav.appendChild(btn(t.prev,()=>{tut.i--;nav.remove();showStep()}));nav.appendChild(btn(i<n-1?t.next:t.done,()=>{nav.remove();if(i<n-1){tut.i++;showStep()}else tut=null}));d.appendChild(nav)}}
function btn(txt,f){const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=txt;b.onclick=f;return b}
function match(q){q=q.toLowerCase();let best=null,sc=0;KB.forEach(k=>{let s=0;k.k.forEach(w=>{if(q.includes(w.toLowerCase()))s+=w.length});if(s>sc){sc=s;best=k}});return best}
function offline(q){const k=match(q);if(k)start(k);else msg(T[L()].miss,'bot',T[L()].offline)}
async function ask(q){msg(esc(q),'me');history.push({role:'user',content:q});
if(liveURL){const d=msg('<span class="typing">…</span>','bot');try{const ctl=new AbortController();setTimeout(()=>ctl.abort(),20000);
const r=await fetch(liveURL+'/api/web-guide',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q,lang:L(),history:history.slice(-8)}),signal:ctl.signal});
if(!r.ok||!r.body)throw 0;const rd=r.body.getReader(),dec=new TextDecoder();let a='';d.textContent='';
for(;;){const {done,value}=await rd.read();if(done)break;a+=dec.decode(value,{stream:true});d.textContent=a;log.scrollTop=log.scrollHeight}
if(!a.trim())throw 0;const m=document.createElement('small');m.textContent=T[L()].live;d.appendChild(m);history.push({role:'assistant',content:a});return}catch(e){d.remove()}}
offline(q)}
function open(o){panel.hidden=!o;fab.setAttribute('aria-expanded',o);if(o){if(!log.children.length)msg(T[L()].hello,'bot');inp.focus()}else fab.focus()}
fab.onclick=()=>open(panel.hidden);$('.guide-x').onclick=()=>open(false);
panel.addEventListener('keydown',e=>{if(e.key==='Escape')open(false)});
$('.guide-form').onsubmit=e=>{e.preventDefault();const q=inp.value.trim();if(!q)return;inp.value='';ask(q)};
labels();new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
window.PUREguide={open,KB};if(/[?&]guide/.test(location.search))open(true);})();

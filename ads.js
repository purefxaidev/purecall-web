// Random ad rotation: picks a weighted item for the current language from assets/ads/manifest.json
(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const lang=()=>document.documentElement.lang==='th'?'th':'en';
function pick(items,slot){const key='pure.ad.last.'+slot;let last;try{last=localStorage.getItem(key)}catch(e){}
let c=items.filter(i=>(i.lang==='any'||i.lang===lang())&&(!i.slots||i.slots.includes(slot)));
if(c.length>1)c=c.filter(i=>i.id!==last);if(!c.length)return null;
let t=c.reduce((s,i)=>s+(+i.weight||1),0),r=Math.random()*t,it=c[0];for(const i of c){r-=(+i.weight||1);if(r<=0){it=i;break}}
try{localStorage.setItem(key,it.id)}catch(e){}return it}
function el(it,cls,eager){if(it.type==='video'&&!RM){const v=document.createElement('video');v.className=cls||'';v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.preload=eager?'metadata':'none';if(it.poster)v.poster=it.poster;v.setAttribute('aria-hidden','true');
[].concat(it.src).forEach(s=>{const so=document.createElement('source');so.src=s;so.type=/\.webm$/.test(s)?'video/webm':'video/mp4';v.appendChild(so)});
if(!eager){const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){v.preload='auto';v.load();v.play().catch(()=>{});io.disconnect()}});setTimeout(()=>io.observe(v))}
v.addEventListener('error',()=>{if(it.poster){const i=img(it.poster);v.replaceWith(i)}},true);return v}
return img(it.type==='video'?it.poster:it.src,eager)}
function img(src,eager){const i=new Image();i.src=src;i.alt='';i.decoding='async';if(!eager)i.loading='lazy';return i}
fetch('assets/ads/manifest.json',{cache:'no-cache'}).then(r=>r.json()).then(m=>{const items=m.items||[];window.PUREads={items,pick,el};
const hv=document.querySelector('.hero-visual');if(hv){const it=pick(items,'hero');if(it){hv.replaceChildren(el(it,'anim',true));hv.dataset.ad=it.id}}
const pa=document.querySelector('.promo-art');if(pa){const it=pick(items,'promo');if(it){const n=el(it,'anim',false),old=pa.querySelector('img:not(.promo-logo),video');old&&old.replaceWith(n);pa.dataset.ad=it.id}}
}).catch(()=>{/* keep static markup */});})();

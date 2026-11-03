(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),D=window.I18N||{};
// i18n
const OK=l=>l==='th'||l==='en';let lang=null;
const qp=(new URLSearchParams(location.search).get('lang')||'').toLowerCase().slice(0,2);
if(OK(qp))lang=qp;else{try{const sv=localStorage.getItem('pure.lang');if(OK(sv))lang=sv}catch(e){}}
if(!lang)lang=/^th/i.test(navigator.language||'')?'th':'en';
function apply(l){lang=l;const d=D[l]||{};document.documentElement.lang=l;
$$('[data-i18n]').forEach(e=>{const v=d[e.dataset.i18n];if(v!=null)e.innerHTML=v});
$$('[data-i18n-meta]').forEach(e=>{const v=d[e.dataset.i18nMeta];if(v!=null)e.setAttribute('content',v.replace(/&amp;/g,'&'))});
$$('[data-i18n-aria]').forEach(e=>{const v=d[e.dataset.i18nAria];if(v)e.setAttribute('aria-label',v)});
if(d['meta.title'])document.title=d['meta.title'];
$$('#lang span').forEach(s=>s.classList.toggle('on',s.dataset.l===l));
try{localStorage.setItem('pure.lang',l)}catch(e){}}
apply(lang);const lb=$('#lang');lb&&lb.addEventListener('click',()=>apply(lang==='th'?'en':'th'));
// reveal
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>RM?el.classList.add('on'):io.observe(el));
// nav shrink + progress
const nav=$('.nav'),pb=$('#progress');let tk=0;
function onS(){tk=0;const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;nav&&nav.classList.toggle('shrink',y>40);pb&&(pb.style.transform='scaleX('+(m>0?y/m:0)+')')}
addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(onS)}},{passive:true});onS();
// tilt / magnetic
if(!RM&&matchMedia('(hover:hover)').matches){$$('.card,.step,.soon-card').forEach(c=>{c.classList.add('tilt');
c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(800px) rotateX(${(.5-y)*6}deg) rotateY(${(x-.5)*8}deg) translateY(-4px)`});
c.addEventListener('pointerleave',()=>{c.style.transform=''})});
$$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.25}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')})}
// aurora canvas
const cv=$('#aurora');if(cv&&!RM){const x=cv.getContext('2d');let w,h,P=[],run=true,raf;const dpr=Math.min(devicePixelRatio||1,1.5);
function rs(){w=cv.width=innerWidth*dpr;h=cv.height=innerHeight*dpr;const n=Math.min(70,Math.round(innerWidth/22));P=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:(Math.random()*1.4+.4)*dpr,vx:(Math.random()-.5)*.15*dpr,vy:(Math.random()-.5)*.15*dpr,a:Math.random()*.5+.2}))}
let t=0;function fr(){if(!run)return;t+=.003;x.clearRect(0,0,w,h);
[[.25,.15,'0,230,118'],[.75,.35,'16,185,129']].forEach(([px,py,c],i)=>{const cx=w*(px+.08*Math.sin(t+i*2)),cy=h*(py+.06*Math.cos(t*1.3+i)),g=x.createRadialGradient(cx,cy,0,cx,cy,Math.max(w,h)*.45);g.addColorStop(0,`rgba(${c},.10)`);g.addColorStop(1,`rgba(${c},0)`);x.fillStyle=g;x.fillRect(0,0,w,h)});
P.forEach(p=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fillStyle=`rgba(200,255,225,${p.a})`;x.fill()});raf=requestAnimationFrame(fr)}
rs();addEventListener('resize',rs);fr();document.addEventListener('visibilitychange',()=>{run=!document.hidden;if(run){cancelAnimationFrame(raf);fr()}})}
// promo modal
const pm=$('#promo');if(pm){const K='pure.promo.until',box=pm.querySelector('.promo-box');let last,shown=false;
const blocked=()=>{try{return sessionStorage.getItem('pure.promo.s')||(+localStorage.getItem(K)||0)>Date.now()}catch(e){return false}};
function open(){if(shown||blocked())return;shown=true;try{sessionStorage.setItem('pure.promo.s','1')}catch(e){}last=document.activeElement;pm.hidden=false;
if(innerWidth>640)document.body.style.overflow='hidden';(pm.querySelector('.btn')||box).focus()}
function close(){pm.hidden=true;document.body.style.overflow='';try{localStorage.setItem(K,Date.now()+7*864e5)}catch(e){}last&&last.focus&&last.focus()}
pm.addEventListener('click',e=>{if(e.target.closest('[data-close]'))close()});
document.addEventListener('keydown',e=>{if(pm.hidden)return;if(e.key==='Escape')close();if(e.key==='Tab'){const f=[...box.querySelectorAll('a[href],button')];const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
window.PUREpromo=open;if(/[?&]promo/.test(location.search)){try{sessionStorage.clear();localStorage.removeItem(K)}catch(e){}open()}else if(!/[?&]nopromo/.test(location.search)){setTimeout(open,6000);
if(matchMedia('(hover:hover)').matches)document.addEventListener('mouseout',e=>{if(!e.relatedTarget&&e.clientY<=0)open()})}}
})();

(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const set=()=>document.querySelectorAll('video.anim').forEach(v=>{if(q.matches){v.removeAttribute('autoplay');v.pause();v.currentTime=0}else{v.play&&v.play().catch(()=>{})}});set();q.addEventListener&&q.addEventListener('change',set)})();

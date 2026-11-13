(()=>{
var D=document,W=[...D.querySelectorAll('.win')],C=navigator.connection,ready=0,
still=matchMedia('(prefers-reduced-motion: reduce)').matches||(C&&C.saveData)||(navigator.deviceMemory&&navigator.deviceMemory<=2),
toy=D.querySelector('.toy,.gaptoy'),R=D.documentElement,
shape=w=>getComputedStyle(w).getPropertyValue('--shape').trim(),key=w=>shape(w)+w.querySelector('.win-box').offsetHeight;
if(toy)new IntersectionObserver(e=>{R.classList.toggle('toynear',e[0].isIntersecting);R.classList.toggle('toyaway',!e[0].isIntersecting)}).observe(toy);
else R.classList.add('toyaway');
if(still||!W[0])return;
function loop(w){
var u=w.getAttribute('data-loop-'+shape(w)),v=w.querySelector('.win-view'),o=v.querySelector('.world');
if(!u||!o)return;
var i=new Image;w.l=i;i.alt='';i.className=o.className;i.decoding='async';i.src=u;
i.onload=()=>{if(w.l==i)v.appendChild(i)};
}
function on(w){
if(w.on)return;w.on=1;
var L=[...w.o].filter(o=>o.getClientRects().length),t0=performance.now();
L.forEach(o=>{o.q=o.dataset.seq.split(',');o.m=+o.dataset.ms;o.f='0';o.w=o.getBoundingClientRect().width});
w.k=key(w);
if(L[0])w.i=setInterval(()=>{var e=performance.now()-t0;L.forEach(o=>{var f=o.q[(e/o.m|0)%o.q.length];if(f!=o.f){o.f=f;o.firstChild.style.transform='translateX('+-f*o.w+'px)'}})},Math.min(...L.map(o=>o.m)));
loop(w);
}
function off(w){
clearTimeout(w.w);
if(!w.on)return;w.on=0;
clearInterval(w.i);w.o.forEach(o=>o.firstChild.style.transform='');
if(w.l){w.l.remove();w.l=0}
}
function want(w){clearTimeout(w.w);if(w.v&&ready&&!D.hidden)w.w=setTimeout(()=>on(w),250);else off(w)}
var ob=new IntersectionObserver(e=>e.forEach(x=>{x.target.v=x.intersectionRatio>=.25;want(x.target)}),{threshold:.25});
W.forEach(w=>{w.o=w.querySelectorAll('[data-seq]');ob.observe(w)});
addEventListener('visibilitychange',()=>W.forEach(want));
addEventListener('resize',()=>W.forEach(w=>{if(w.on&&key(w)!=w.k){off(w);on(w)}}));
var go=()=>{ready=1;W.forEach(want)};
D.readyState=='complete'?go():addEventListener('load',go);
})();

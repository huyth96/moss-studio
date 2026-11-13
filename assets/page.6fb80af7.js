(()=>{
var D=document,N=navigator,o=(e,f,m)=>new IntersectionObserver(x=>f(x[0].isIntersecting),m).observe(e),b=D.getElementById('board'),j;
N.share&&D.querySelectorAll('[data-share]').forEach(e=>{e.hidden=0;e.onclick=()=>N.share(e.dataset).catch(e=>0)});
matchMedia('(prefers-reduced-motion: reduce)').matches||D.querySelectorAll('[data-blink]').forEach(e=>{
var s=e.children[0].style,t,v,g=()=>{clearTimeout(t);s.cssText='';if(v)t=setTimeout(()=>{s.cssText=D.hidden?'':'--f:3';t=setTimeout(g,130)},28e2+Math.random()*32e2)};
o(e,i=>{v=i;g()});
});
b&&addEventListener('load',()=>o(b,i=>{if(i&&!j){j=D.head.appendChild(D.createElement('script'));j.src=JSON.parse(D.getElementById('moss-data').textContent).assets.boardjs}},{rootMargin:'600px'}));
})();

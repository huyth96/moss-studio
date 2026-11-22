window.Moss=window.Moss||{};Moss.cfg={"layouts":{"desk":{"w":480,"h":194,"toy":{"x":217,"y":118},"calm":{"x0":213,"y0":116,"x1":261,"y1":164},"lamp_center":237,"moss_runs":[{"y":150,"x0":78,"x1":402,"sx":237,"spr":[218,255,84,382,398]}],"toy_ref":{"x":237,"y":155},"cone":{"x":237,"y":62,"y1":148,"a":0.62,"b":10},"motes":14,"fireflies":[[[172,74],[180,70],[188,76],[176,80]],[[226,100],[230,92],[244,88],[252,96],[246,106],[232,108]],[[396,118],[402,112],[396,104],[390,112]]],"jar_sparks":[[393,149],[395,147],[391,151]],"helpers":{"snail":{"x":201,"y":145,"from_x":180},"kin":{"x":259,"y":141},"frog":{"x":130,"y":141},"shroom":{"x":373,"y":140}},"cloud":{"sprite":"cloud","x":217,"y":98,"enter":"left"}},"tablet":{"w":360,"h":174,"toy":{"x":160,"y":90},"calm":{"x0":156,"y0":88,"x1":204,"y1":136},"lamp_center":180,"moss_runs":[{"y":122,"x0":52,"x1":308,"sx":180,"spr":[157,199,150,206,101,257,304]}],"toy_ref":{"x":180,"y":127},"cone":null,"motes":0,"fireflies":[[[140,60],[150,52],[156,64],[146,70]]],"jar_sparks":[],"helpers":{"snail":{"x":145,"y":117,"from_x":112},"kin":{"x":202,"y":113},"frog":{"x":92,"y":113},"shroom":{"x":296,"y":112}},"cloud":{"sprite":"cloud_small","x":160,"y":71,"enter":"left"}},"phone":{"w":360,"h":282,"toy":{"x":160,"y":133},"calm":{"x0":156,"y0":131,"x1":204,"y1":179},"lamp_center":180,"moss_runs":[{"y":165,"x0":96,"x1":264,"sx":180,"spr":[162,196,118,241]},{"y":254,"x0":96,"x1":264,"sx":177,"spr":[183,228,125,234]}],"toy_ref":{"x":180,"y":170},"cone":null,"motes":0,"fireflies":[[[208,34],[216,30],[226,36],[216,42]],[[166,208],[176,206],[186,210],[176,212]]],"jar_sparks":[[176,249],[178,247],[174,251]],"helpers":{"snail":{"x":146,"y":160,"from_x":120},"kin":{"x":199,"y":156},"frog":{"x":224,"y":244},"shroom":{"x":120,"y":243}},"helpers_under_360":{"frog":{"x":217,"y":244},"shroom":{"x":128,"y":243}},"cloud":{"sprite":"cloud_small","x":160,"y":114,"enter":"right"}}},"assets":{"toy":"/assets/toy.02d10dc4.webp","cast":"/assets/cast.41b3ea00.webp","life":"/assets/life.e3716859.webp","lifejs":"/assets/life.a88c76d5.js","dip":{"desk":"/assets/dip_desk.163df40c.webp","tablet":"/assets/dip_tablet.93cb97a2.webp","phone":"/assets/dip_phone.f6588e7d.webp"},"props":{"desk":"/assets/props_desk.eb21b933.webp","tablet":"/assets/props_tablet.44f4e21a.webp","phone":"/assets/props_phone.d1c36395.webp"},"lit":{"moss":"/assets/box_moss_lit.f7264131.webp","mag":"/assets/box_mag_lit.939bc451.webp","sac":"/assets/box_sac_lit.a1493238.webp","rag":"/assets/box_rag_lit.120d8908.webp"}},"sheets":{"eyes":{"ox":4,"oy":6,"w":2,"h":3,"frames":[{"l":[15,23],"r":[23,23]},{"l":[15,23],"r":[23,23]},{"l":[15,23],"r":[23,23]},{"l":[15,23],"r":[23,23]},{"l":[14,24],"r":[24,24]},{"l":[15,22],"r":[23,22]},{"l":[15,21],"r":[23,21]},{"l":[15,22],"r":[23,22]},{"l":[14,24],"r":[24,24]},{"l":[15,23],"r":[23,23]},{"l":[15,23],"r":[23,23]}]},"cast":{"sheet":"cast","w":160,"h":108,"strips":{"snail":{"x":0,"y":0,"w":16,"h":12,"n":4,"feet":{"x":3,"w":11,"y":11}},"kin":{"x":0,"y":12,"w":16,"h":16,"n":4,"feet":{"x":4,"w":8,"y":15}},"frog":{"x":0,"y":28,"w":16,"h":16,"n":4,"feet":{"x":4,"w":9,"y":15}},"shroom":{"x":0,"y":44,"w":12,"h":16,"n":4,"feet":{"x":4,"w":6,"y":15}},"cloud":{"x":0,"y":60,"w":40,"h":24,"n":4},"cloud_small":{"x":0,"y":84,"w":40,"h":24,"n":4},"z":{"x":66,"y":0,"w":5,"h":6,"n":1,"at":[27,1]}}},"props":{"desk":{"sheet":"props_desk","lamp":{"x":221,"y":14,"w":33,"h":45,"dx":[0,1,-1],"frames":[[0,0],[33,0],[66,0]]},"jar":{"x":387,"y":139,"w":12,"h":16,"dx":[0,1,-1],"frames":[[0,45],[12,45],[24,45]]}},"tablet":{"sheet":"props_tablet","lamp":{"x":135,"y":13,"w":25,"h":28,"dx":[0,1,-1],"frames":[[0,0],[25,0],[50,0]]}},"phone":{"sheet":"props_phone","lamp":{"x":195,"y":13,"w":25,"h":27,"dx":[0,1,-1],"frames":[[0,0],[25,0],[50,0]]},"jar":{"x":170,"y":239,"w":12,"h":20,"dx":[0,1,-1],"frames":[[0,27],[12,27],[24,27]]}}}}};
(()=>{'use strict';
const M=Moss,H={},E=[],O=()=>!Object.keys(H).length&&S.length;
let S=[],I=0,T=0,A=0,N=0;
const K=M.clock={
add(f,e=1,g){
const s={f,e,n:T+e};
S=S.concat(s);
if(g=='life')A=N=0;
Y();
return()=>{s.f=0;S=S.filter(x=>x!=s);Y()}
},
pause(r){H[r]=1;Y()},
resume(r){delete H[r];Y()},
level:navigator.deviceMemory<=2?1:0,
onLevel(f){E.push(f)}
};
function Y(){
if(O()&&!I)I=setInterval(B,K.level?250:125);
if(!O()&&I)I=clearInterval(I);
}
function B(){
const a=performance.now();
T+=K.level?2:1;
for(const s of S)if(s.f&&T>=s.n){while(s.n<=T)s.n+=s.e;s.f(T)}
if(N>=0&&K.level<2){
A+=performance.now()-a;
if(++N>=40){
if(A/N>(K.level?8:4)){K.level++;A=N=0;I=clearInterval(I);Y();E.forEach(f=>f(K.level))}
else N=-1;
}
}
}
M.$=s=>document.querySelector(s);
M.calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
M.sv=(e,o)=>{for(const k in o)e.style.setProperty('--'+k,o[k])};
M.el=(t,c,p,v)=>{const e=document.createElement(t);e.className=c;if(v)M.sv(e,v);p.appendChild(e);return e};
M.css=t=>{M.el('style','',document.head).textContent=t};
const V=()=>document.hidden?K.pause('h'):K.resume('h'),P=M.$('.shop');
document.addEventListener('visibilitychange',V);
V();
if(P&&window.IntersectionObserver)new IntersectionObserver(e=>e[e.length-1].isIntersecting?K.resume('v'):K.pause('v')).observe(P);
})();
(()=>{'use strict';
const M=window.Moss=window.Moss||{},Y='moss.toy.v1',I=()=>performance.now(),F=[587.33,659.25,739.99,880,987.77,1174.66,1318.51,1479.98,1760];
let a,b,m=null,L,H=[];
const J=()=>{try{return JSON.parse(localStorage.getItem(Y))}catch(e){}},
muted=()=>{if(m===null)m=!!(J()||{}).m;return m},
U=()=>{const u=navigator.userActivation;return u&&!u.hasBeenActive},
C=()=>{
if(!a){
const A=window.AudioContext||window.webkitAudioContext;
if(!A||U())return 0;
try{a=new A({latencyHint:'interactive'})}catch(e){return 0}
}
if(a.state!='running')a.resume().catch(()=>{});
return a;
},
G=(n,p,l,o)=>{
const g=a.createGain(),t=a.currentTime;
g.gain.setValueAtTime(1e-4,t);
g.gain.exponentialRampToValueAtTime(p,t+.003);
g.gain.exponentialRampToValueAtTime(1e-4,t+l);
n.connect(o||g);
if(o)o.connect(g);
g.connect(a.destination);
n.start(t);
if(n.stop)n.stop(t+l+.02);
return n;
},
O=(y,f,p,l)=>{
const o=a.createOscillator();
o.type=y;o.frequency.value=f;
return G(o,p,l);
},
V={
tine(o){
const f=F[Math.min(8,o&&o.step||0)];
O('sine',f,.11,.6);
O('sine',f*2.76,.05,.12);
},
lamp(){
if(!b){
b=a.createBuffer(1,a.sampleRate*.015|0,a.sampleRate);
b.getChannelData(0).forEach((v,i,d)=>{d[i]=Math.random()*2-1});
}
const s=a.createBufferSource(),q=a.createBiquadFilter();
s.buffer=b;q.type='bandpass';q.frequency.value=2400;
G(s,.5,.015,q);
},
jar(){O('sine',2100,.09,.18);O('sine',3170,.05,.18)},
frog(){
const o=O('triangle',900,.14,.25),w=a.createOscillator(),g=a.createGain();
w.frequency.value=18;g.gain.value=140;
w.connect(g);g.connect(o.frequency);
w.start();w.stop(a.currentTime+.27);
},
startle(){
const o=O('sine',520,.12,.1).frequency,t=a.currentTime;
o.setValueAtTime(520,t);
o.exponentialRampToValueAtTime(1900,t+.1);
}
},
P=(n,o)=>{
const t=I();
H=H.filter(x=>t-x<1e3);
if(H.length<6){H.push(t);V[n](o)}
},
E=x=>['pointerup','keydown'].forEach(e=>x(e,R,true)),
R=()=>{
if((L||a)&&C()){
if(a.state=='running')E(removeEventListener);
const l=L;
L=0;
if(l&&!muted()&&I()-l[2]<1e3)P(l[0],l[1]);
}
};
E(addEventListener);
M.sound={
play(n,o){
if(muted())return;
if(a)C(),P(n,o);
else{L=[n,o,I()];if(!U())setTimeout(R)}
},
buzz(n){
if(!muted()&&navigator.vibrate&&!U())try{navigator.vibrate(n)}catch(e){}
},
muted,
setMuted(v){
m=!!v;
try{const s=J()||{t:0,g:0,h:[],at:0};s.m=m;localStorage.setItem(Y,JSON.stringify(s))}catch(e){}
}
};
})();
(()=>{'use strict';
const M=Moss,G=M.cfg,$=M.$,K=M.clock,B=M.sound,CA=M.calm,I=()=>performance.now(),mq=q=>matchMedia(q),ro=Math.round,fl=Math.floor,RN=Math.random,
to=$('#toy'),st=$('.stage'),sh=$('.shop'),sp=to.firstElementChild,KY='moss.toy.v1',S={t:0,g:0,h:[],m:false,at:0},E={},
wi=mq('(min-width:1024px)'),mi=mq('(min-width:768px)'),D=M.data=JSON.parse($('#moss-data').textContent),
on=(t,n,f,o)=>t.addEventListener(n,f,o),em=(n,...a)=>(E[n]||[]).forEach(f=>f(...a)),CT=(...a)=>a.forEach(clearTimeout),
R=(g,c,x,y,w=1,h=1)=>{g.fillStyle=c;g.fillRect(x,y,w,h)},INK='#16231d',GO='#f0b443',CV='width:100%;height:100%;image-rendering:pixelated;pointer-events:none',
pk=()=>G.layouts[wi.matches?'desk':mi.matches?'tablet':'phone'];
for(const k in G.layouts)G.layouts[k].name=k;
try{Object.assign(S,JSON.parse(localStorage.getItem(KY)))}catch(e){}
S.t=+S.t||0;S.g=+S.g||S.t;if(!Array.isArray(S.h))S.h=[];
let L=pk();
function px(){
const d=devicePixelRatio;
return ro(st.getBoundingClientRect().width/L.w*d)/d;
}
function ly(c,z){
const e=M.el('canvas',c,st);
e.setAttribute('aria-hidden',true);e.width=L.w;e.height=L.h;
e.style.cssText=CV+';position:absolute;left:0;top:0;z-index:'+z;
return e;
}
const MO=['#1f4f4c','#2f7442','#58a33c','#a9d44a'],rr=(a,b)=>a+rn()*(b-a);
let mo,c,s=7,cu,J=[],jt=0;
function rn(){s=(s*1664525+1013904223)>>>0;return s/4294967296}
function lu(a,b,u,v,o){
for(let y=fl(b-v-1);y<=b+v+1;y++)for(let x=fl(a-u-1);x<=a+u+1;x++){
const p=(x+.5-a)/u,q=(y+.5-b)/v,d=p*p+q*q,l=-.5*p-.86*q;
if(d<=1)R(c,MO[Math.max(0,(l>.66&&d>.42?3:l>-.12?2:l>-.58?1:0)+o)],x,y);
}
}
function he(C,r,x,w,d,o){
let a=0;
for(let i=0;i<w;i++){
const k=ro(x)+i,e=Math.min(30,Math.max(1,d-fl(Math.abs(i-(w-1)/2)*.8))),h=C.h[k]||0;
if(k<0||k>=L.w||e<=h)continue;
for(let j=h;j<e;j++)R(c,MO[j<e-1?Math.max(0,1+o):0],k,r.y+8+j);
C.h[k]=e;a=1;
}
return a;
}
function so(x,y,h){
const t=y-h;
R(c,MO[2],x,t,1,h);
R(c,INK,x,t-4,2);R(c,INK,x,t,2);R(c,INK,x-1,t-3,1,3);R(c,INK,x+2,t-3,1,3);
R(c,GO,x,t-3,2,3);
R(c,'#ece6c6',x,t-3);
}
const tn=x=>Math.abs(x-L.lamp_center)>rr(52,76)?-1:0;
function pl(g){
const u=L.moss_runs,n=u.length>1&&cu[0].t>=12&&g%2==0?1:0,r=u[n],C=cu[n],y=r.y+6,l=J.length;
for(let e=-1;e<2;e+=2){
if(e<0?C.l<=C.a:C.r>=C.b)continue;
const v=rr(4,9);
if(e<0)C.l-=v;else C.r+=v;
const x=e<0?C.l:C.r,t=tn(x),q=rr(2.4,4),w=ro(rr(4,8)),d=ro(rr(2,6)),m=ro(rr(4,10));
J.push(()=>he(C,r,x-3,w,d,t),()=>lu(x,y-rr(.6,2),q*1.45*.6,q*.82*.6,t),()=>lu(x,y-rr(.2,1),q*1.45,q*.82,t));
if(rn()<.4)J.push(()=>he(C,r,x,1,m,t));
if(rn()<.5)J.push(()=>lu(x+rr(-3,3),y+rr(-1,1),q*1.1,q*.7,t));
}
if(J.length==l){
C.t++;
for(let i=0;i<3;i++){
let x=ro(rr(C.a,C.b));
for(let k=0;k<5;k++){const v=ro(rr(C.a,C.b));if((C.h[v]||0)<(C.h[x]||0))x=v}
const w=ro(rr(3,7)),d=(C.h[x]||0)+ro(rr(2,5)),t=tn(x);
J.push(()=>he(C,r,x-(w>>1),w,d,t));
}
}
if(g%5==0&&C.n<r.spr.length){
const x=r.spr[C.n++],h=ro(rr(4,7));
J.push(()=>so(x,y-2,h));
}
}
function fh(n){while(J.length&&n>0)if(J.shift()()!==0)n--}
function rp(){
jt=clearInterval(jt);
J.length=0;s=7;
const v=Math.ceil(innerWidth/px())||L.w;
cu=L.moss_runs.map(r=>({l:r.sx-13,r:r.sx+13,t:0,h:{},n:0,a:Math.max(r.x0,fl(L.w/2-v/2)-1),b:Math.min(r.x1,Math.ceil(L.w/2+v/2)+1)}));
for(let i=1;i<=Math.min(S.g,400);i++)pl(i);
fh(1e6);
}
function en(){
if(!mo){mo=ly('moss',4);c=mo.getContext('2d');rp()}
}
function gr(n){
en();
while(n-->0)pl(++S.g);
if(CA)fh(1e6);
else if(!jt){fh(2);if(J.length)jt=setInterval(()=>{fh(2);if(!J.length)jt=clearInterval(jt)},45)}
mk();
}
let fc,f,pt=[],ft=0;
function fa(a){
if(!fc){fc=ly('fx',6);f=fc.getContext('2d')}
pt=pt.concat(a);
if(!ft)ft=setInterval(()=>{
f.clearRect(0,0,L.w,L.h);
pt=pt.filter(p=>p.l>0);
for(const p of pt){
p.l--;p.x+=p.a;p.y+=p.b;
if(!p.c||p.k){if(p.l%2==0)p.b++;if(p.a&&p.l%3==0)p.a-=Math.sign(p.a)}
if(p.c)R(f,p.c,p.x,p.y,1,p.k||1);
else{R(f,GO,p.x,p.y,2,3);R(f,'#ece6c6',p.x,p.y)}
}
if(!pt.length)ft=clearInterval(ft);
},70);
}
const EY=G.sheets.eyes.frames,HP=[[4,0,55],[5,0,45],[6,0,45],[6,0,45],[7,0,45],[8,0,70]];
let g,im,F=0,A='o',X=0,Y=0,ke,Z=0,P=0,tm=0,W=0,W2=0,gt=0,bt=0,lk=0;
function ey(p){
const x=p[0],y=p[1],a=F==3?'c':A,n=x+X;
R(g,MO[1],x,y,2);
R(g,'#c3c3ae',x,y+1,2,2);
if(a=='o')R(g,INK,n,y+(Y>0),2,Y<0?2:3);
else if(a=='h')R(g,INK,n,y+1,2,2);
else if(a=='c')R(g,INK,n,y+2,2);
else{R(g,INK,n,y+1,2);R(g,INK,n-1,y+2);R(g,INK,n+2,y+2)}
}
function pa(){
if(!g)return sp.style.setProperty('--f',F);
const k=F+A+X+'.'+Y;
if(k!=ke){
ke=k;
g.clearRect(0,0,40,40);
g.drawImage(im,F*40,0,40,40,0,0,40,40);
ey(EY[F].l);ey(EY[F].r);
}
}
function rs(){F=Z?10:0;A=Z?'c':'o';pa()}
function ru(a,e){
clearTimeout(tm);P=1;
let i=0;
(function n(){
if(i<a.length){const q=a[i++];F=q[0];if(q[1])A=q[1];if(q[3]!=null)ga(q[3],q[4]);pa();tm=setTimeout(n,q[2])}
else{P=0;rs();if(e)e()}
})();
}
function ga(x,y,o){
if(Z||(W&&!o))x=y=0;
if(x!=X||y!=Y){X=x;Y=y;pa();em('gaze',x,y)}
}
function ai(q,h){
CT(gt,bt);
gt=setTimeout(()=>{
const v=q(),a=v[0]-L.toy.x-20,b=v[1]-L.toy.y-24;
ga(Math.abs(a)>10?Math.sign(a):0,b<-14?-1:b>12?1:0);
},80);
bt=setTimeout(()=>ga(0,0),h||600);
}
function at(e,h){
if(I()>=lk&&!Z)ai(()=>{
const r=st.getBoundingClientRect(),p=px(),o=e.getBoundingClientRect?e.getBoundingClientRect():0;
return[((o?o.left+o.width/2:e[0])-r.left)/p,((o?o.top+o.height/2:e[1])-r.top)/p];
},h);
}
let la=I(),li=0,JT,iv=0,dz=0,wk=0,up=1,hd=0,lx=0,ly2=0,zs=0,zn=0,hi=0,se=0;
function jt2(){const r=n=>(RN()*2-1)*n;JT=[7+r(1),14+r(1),22+r(3),34+r(4)]}
jt2();
function po(e){
la=I();
if(li){li=0;jt2()}
const t=e.target;
if(CA&&Z&&!(t.closest&&t.closest('.toy,.hint')))wa();
}
function sl(a){
CT(bt);
Z=1;dz++;li=9;X=Y=0;zn=0;
em('doze');
if(a)ru(a);else rs();
}
function wa(h){
Z=0;la=I();li=0;jt2();
if(M.cast)M.cast.z(-1);
em('wake');
if(CA){clearTimeout(tm);F=0;A='a';pa();tm=setTimeout(rs,500)}
else if(h&&!wk){
wk=1;
ru(HP.map(q=>[q[0],'c',q[2]]),()=>{F=9;A='c';pa();P=hd=1;if(up)al()});
}else ru([[10,'c',160],[10,'h',190],[0,'h',200],[0,'o',400],[0,'c',300]]);
}
function al(){
hd=0;
tm=setTimeout(()=>{
at([lx,ly2],1100);
ru([[0,'o',600],[3,0,125],[0,0,125],[3,0,125],[0,0,125],[0,'a',500]]);
},120);
}
function up2(){up=1;if(hd)al()}
function ld(){
const q=(I()-la)/1e3,h=()=>500+RN()*250;
if(q>=[52,90,150][Math.min(dz,2)])sl([[0,'h',1200],[0,'c',625],[10,0,625],[0,0,625],[10,0,525]]);
else if(li<2){
if(iv>1)li=2;
else if(q>=JT[li]){li++;iv++;ru(HP.concat([[0,'a',450]]))}
}else if(li==2&&q>=JT[2]){
li=3;CT(bt);
ru([[0,1,2],[1,0,2],[2,0,1],[0,2,1]][fl(RN()*4)].map(i=>[0,0,h(),...[[-1,0],[1,0],[0,-1]][i]]).concat([[3,0,125,0,0]]));
}else if(li==3&&q>=JT[3]){
li=4;
ru([[0,'h',200],[9,'c',500],[0,'h',600],[0,'c',300]]);
}
}
const BO=[0,1,0,2];
let bi=0,nb=I()+2800,bl=0,mx=0,my=0,mv=0,sc=0;
K.add(T=>{
se=1;
if(mv){mv=0;if(!W)at([mx,my])}
if(sc){
sc=0;
if(scrollY>40&&!Z&&!W&&I()>=lk){ga(X,1);clearTimeout(bt);bt=setTimeout(()=>ga(0,0),600)}
}
if(Z){
if(!P&&M.cast){
if(CA)M.cast.z(0);
else{if(T>=zn){zs=T;zn=T+20}M.cast.z(T-zs<8?T-zs:-1)}
}
}else if(CA){if(I()-la>=52e3)sl()}
else if(!P){
ld();
if(!P&&!Z){
if(bl){bl=0;F=BO[bi];pa()}
if(T%4==0){bi=(bi+1)%4;F=BO[bi];pa()}
if(I()>=nb){nb=I()+2800+RN()*3200;bl=1;F=3;pa()}
}
}
},1,'toy');
const ts=[],ME=[['snail',8],['kin',20],['frog',30],['shroom',40]];
let wt=0,cm=0,lt=-1e9,rd=0,ra=0,lo=0,pd=0;
function pr(){
const t=I(),w=Z,T=()=>{W=W2=0;em('streak',false)};
la=t;
ts.push(t);if(ts.length>3)ts.shift();
if(ts.length>2&&t-ts[0]<=1200){
if(W)W2++;
else{W=1;W2=3;CT(gt,bt);ga(0,0);em('streak',true)}
clearTimeout(wt);
wt=setTimeout(T,1200-(t-ts[1]));
}
cm=t-lt<650?cm+1:0;lt=t;
hd=0;
B.play(w&&!wk?'startle':'tine',{step:fl(cm/3)});
B.buzz(12);
if(w)wa(1);
else ru(CA?[[4,0,80]]:W?[[4,0,55],[8,0,70]]:HP);
S.t++;lo++;
const y=ra?3:1,u=S.t,G2=()=>{
gr(y);
if(!CA&&(u==1||u%3==0)){
const n=2+fl(rn()*3),q=L.toy_ref,a=[];
for(let i=0;i<n;i++)a.push({x:q.x+(i%2?5:-3),y:q.y-34-(i%2?0:3),a:(i%2?1:-1)*ro(rr(1,3)),b:-ro(rr(2,4)),l:ro(rr(7,11))});
fa(a);
}
};
if(mo)G2();else setTimeout(()=>{G2();M.cast.ready()});
if(!rd&&(W2>=24||S.t==55||(lo==40&&S.t>55))){
rd=ra=1;
CT(gt,bt);
lk=I()+400;
ga(0,-1,1);
bt=setTimeout(()=>ga(0,0),400);
em('rainstart');
setTimeout(()=>{ra=0;em('rainend')},15e3);
}
for(const h of ME)if(S.t>=h[1]&&S.h.indexOf(h[0])<0){S.h.push(h[0]);M.cast.helper(h[0])}
if(S.t>11)py(1);
em('tap',S.t);
}
function py(l){
if(!pd){
pd=1;
const a=M.el('a','payoff',$('.slot-pay'));
a.href=D.links.moss;a.textContent=D.strings.payoff;
document.documentElement.classList.add('paid');
if(l)setTimeout(()=>{const o=a.getBoundingClientRect().bottom+8-innerHeight;if(o>0)scrollBy(0,o)});
}
}
let dy=0,sv=0;
function wr(){
dy=0;S.m=B.muted();S.at=Date.now();
try{localStorage.setItem(KY,JSON.stringify(S))}catch(e){}
}
function mk(){dy=1;if(!sv)sv=setTimeout(()=>{sv=0;if(dy)wr()},1e3)}
on(window,'pagehide',()=>{if(dy||S.t)wr()});
on(sh,'pointerdown',e=>{
if(e.button)return;
const t=e.target,b=t.closest('.box');
lx=e.clientX;ly2=e.clientY;
if(t.closest('.toy,.hint')){up=0;pr()}
else if(Z&&!CA)wa();
if(!W)at(b||[lx,ly2]);
},{passive:true});
on(to,'click',e=>{if(!e.detail){up=1;pr()}});
const hn=$('.hint'),mb=$('.mute'),sm=()=>{const m=B.muted();mb.setAttribute('aria-pressed',m);mb.setAttribute('aria-label',D.strings[m?'unmute':'mute'])};
on(hn,'click',e=>e.preventDefault());
sm();
on(mb,'click',()=>{B.setMuted(!B.muted());sm()});
const op={capture:true,passive:true};
['pointerup','pointercancel'].forEach(n=>on(window,n,up2,op));
['pointerdown','keydown'].forEach(n=>on(window,n,po,op));
on(window,'scroll',e=>{sc=1;po(e)},op);
on(window,'pointermove',e=>{if(e.pointerType=='mouse'){mx=e.clientX;my=e.clientY;mv=1;po(e)}},op);
on(document,'visibilitychange',()=>{
if(document.hidden)hi=I();
else if(se&&hi&&I()-hi>=6e4&&!Z)sl();
});
const u3=mq('(max-width:359px)');
let lk3=L.name+u3.matches;
[wi,mi,u3].forEach(m=>m.addListener(()=>{
const n=pk(),k=n.name+u3.matches;
if(k!=lk3){
lk3=k;
if(n!=L){
L=n;
if(mo){mo.width=n.w;mo.height=n.h;rp()}
if(fc){fc.width=n.w;fc.height=n.h;pt=[]}
}
em('layout',L.name);
}
}));
M.toy={
on(n,f){(E[n]=E[n]||[]).push(f)},
taps:()=>S.t,
look(x,y,h){if(!Z){lk=I()+h;ai(()=>[x,y],h)}},
wave(){if(!CA&&!P&&!Z&&!W)ru([[3,0,125],[1,0,125],[2,0,125],[1,0,125],[2,0,125]])},
dry(){
if(CA)return;
if(!P&&!Z&&!W)ru([[3,0,125],[0,0,125],[3,0,125]]);
const q=L.toy_ref,a=[];
for(let i=0;i<6;i++){const e=i%2?1:-1;a.push({x:q.x+e*(7+i*2),y:q.y-20-i%3*2,a:e*(1+(i>>1)%2),b:-2-i%2,l:7+i%3,c:'#a7d3c4',k:2})}
fa(a);
},
grow:gr,
layout:()=>L,
px,
layer:ly,
fx:fa
};
im=new Image();
im.onload=()=>{
const e=M.el('canvas','',sp);
e.width=e.height=40;e.setAttribute('aria-hidden',true);
e.style.cssText='display:block;'+CV;
g=e.getContext('2d');
sp.style.backgroundImage='none';
pa();
};
im.src=G.assets.toy;
if(S.t>11)py();
if(S.t&&S.at){
const a=Date.now()-S.at,h=Math.min(12,fl(a/36e5));
if(h>0){S.g+=h;mk()}
if(a>6e4)sl();
}
const ar=$('.lay.art img'),bk=()=>{if(S.g)requestAnimationFrame(()=>setTimeout(en))};
if(ar&&!ar.complete)on(ar,'load',bk);else bk();
function bo(){
const n=navigator.connection;
if(!CA&&!(n&&n.saveData))M.el('script','',document.head).src=G.assets.lifejs;
M.props.mount();
S.h.forEach(i=>M.cast.helper(i,{instant:1}));
}
if(document.readyState=='complete')bo();else on(window,'load',bo);
})();
(()=>{'use strict';
const M=Moss,T=M.toy,sv=M.sv,CA=M.calm,G=M.cfg,AT=G.sheets.cast,ST=AT.strips,st=M.$('.stage'),U=matchMedia('(max-width:359px)'),HP=[-3,-5,-3,0],H={},Q=[],
I=()=>performance.now(),V='*var(--px)',fr=(e,s,i)=>sv(e,{bx:s.x+i*s.w}),
sz='width:calc(var(--w)'+V+');height:calc(var(--h)'+V+')';
let pr,im,lk=0,cl,zE,tc=-1e4;
M.css('.cs{position:absolute;left:0;top:0;display:block;'+sz+';background:url('+G.assets.cast+') calc(var(--bx)*-1'+V+') calc(var(--by)*-1'+V+')/calc('+AT.w+V+') calc('+AT.h+V+');transform:translate(calc(var(--dx,0)'+V+'),calc(var(--dy,0)'+V+'));image-rendering:pixelated;pointer-events:none}'+
'.hl,.pb{z-index:5;'+sz+';padding:0;border:0;background:none;cursor:pointer;touch-action:manipulation}.pb{z-index:9}'+
'.hl::before,.pb::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,48px);height:max(100%,48px);transform:translate(-50%,-50%)}'+
'.hl::after{content:"";position:absolute;left:calc((var(--fx) + var(--dx,0))'+V+');top:calc(var(--fy)'+V+');width:calc(var(--fw)'+V+');height:var(--px);background:#16231d}'+
'.box .lit{position:absolute;left:0;top:0;visibility:hidden}a.box:focus-visible .lit{visibility:visible}@media (hover:hover){a.box:hover .lit{visibility:visible}}@media (max-width:359px){.slot-pay{--x:128;--w:104}}.mute::after{top:auto;bottom:0;transform:translateX(-50%)}.hint::after{top:calc(-3*var(--px));margin-top:0}');
function ready(){
if(!pr)pr=new Promise(r=>{
im=new Image();im.onload=im.onerror=r;im.src=G.assets.cast;
M.clock.add(be,1,'cast');
});
return pr;
}
const mk=(p,s)=>M.el('i','cs',p,{w:s.w,h:s.h,bx:s.x,by:s.y});
function sp(i){
const L=T.layout(),u=L.helpers_under_360;
return u&&U.matches&&u[i]||L.helpers[i];
}
function ma(i){
const s=ST[i],d=sp(i),f=s.feet,b=M.el('button','hl at',st,{x:d.x,y:d.y,w:s.w,h:s.h,fx:f.x,fy:f.y,fw:f.w}),h=H[i]={i,s,b,e:mk(b,s),a:0,n:0,k:0};
b.type='button';b.setAttribute('aria-label',M.data.strings.helpers[i]);
b.addEventListener('click',()=>{
tc=I();
if(i=='frog')M.sound.play('frog');
if(!CA){if(!h.a)ho(h)}
else if(i=='shroom'){fr(h.e,s,2);h.k=1}
});
return h;
}
function se(h){
h.a=h.n=0;
h.b.style.clipPath=h.b.style.pointerEvents='';
h.b.removeAttribute('tabindex');
sv(h.b,{dx:0,dy:0});
fr(h.e,h.s,0);
}
function pc(i){
const d=sp(i),h=H[i]||ma(i);
sv(h.b,{x:d.x,y:d.y});
se(h);
}
function gr(h,f){
const d=sp(h.i);
T.look(d.x+h.s.w/2,d.y+h.s.h/2,1200);
setTimeout(()=>{T.wave();if(!f)lk=0},1200);
}
function ho(h,e){
let i=0;
h.a=()=>{
if(i<4){sv(h.b,{dy:HP[i]});fr(h.e,h.s,h.i=='shroom'?i?0:2:i);i++}
else{se(h);if(e)e()}
};
}
function ar(i){
const h=ma(i),s=h.s,d=sp(i),b=h.b;
b.tabIndex=-1;b.style.pointerEvents='none';
if(i=='snail'){
let x=d.from_x-d.x,y=s.h,f=0,n=0;
b.style.clipPath='inset(-99vw -99vw 0 -99vw)';
sv(b,{dx:x,dy:y});
T.look(d.from_x,d.y+6,1200);
h.a=t=>{
if(t>=n){
n=t+2;
y?sv(b,{dy:--y}):sv(b,{dx:++x});
fr(h.e,s,f=(f+1)%4);
if(!y&&x>=0){se(h);gr(h,1)}
}
};
return;
}
lk=1;
b.style.clipPath='inset(-99px -99px 0 -99px)';
if(i=='shroom'){
let y=s.h;
sv(b,{dy:y});fr(h.e,s,2);
h.a=()=>{sv(b,{dy:--y});if(y<1){se(h);gr(h)}};
}else{
sv(b,{dy:9});
ho(h,()=>gr(h));
}
}
function be(t){
for(const i in H){
const h=H[i];
if(h.a)h.a(t);
else if(h.k){h.k=0;fr(h.e,h.s,0)}
else if(!CA&&(i=='frog'||i=='shroom')){
if(h.n&&t>=h.n){fr(h.e,h.s,1);h.k=1;h.n=0}
else if(!h.n)h.n=t+48+Math.random()*64;
}
}
if(!lk&&Q.length){
const j=Q.findIndex(i=>{
const r=st.getBoundingClientRect(),p=T.px(),d=sp(i),x=r.left+d.x*p,y=r.top+d.y*p;
return x+ST[i].w*p>0&&x<innerWidth&&y>=0&&y+ST[i].h*p<=innerHeight;
});
if(j>=0)ar(Q.splice(j,1)[0]);
}
if(cl&&cl.a)cl.a(t);
}
function helper(i,o){
ready().then(()=>{
if(H[i]||Q.includes(i))return;
if(CA||(o&&o.instant)){pc(i);if(!o)gr(H[i],1)}
else Q.push(i);
});
}
const dr=()=>{cl.e.remove();cl=0};
function cloud(o){
if(cl)return;
const L=T.layout(),c=L.cloud,s=ST[c.sprite],e=mk(st,s);
e.style.zIndex=9;
cl={e,d:0,a:0};
sv(e,{dx:c.x,dy:c.y});
if(CA||(o&&o.instant))return fr(e,s,2);
const v=innerWidth/T.px(),f=c.enter=='left'?Math.floor((L.w-v)/2)-s.w:Math.ceil((L.w+v)/2),go=(t,y)=>{
const d=2*(l?t-l:1);
l=t;
x=x<y?Math.min(y,x+d):Math.max(y,x-d);
fr(e,s,t>>1&1);
sv(e,{dx:x});
return x==y;
};
let x=f,l=0,k=0;
sv(e,{dx:x});
cl.a=t=>{
if(!k){
if(go(t,c.x)){
k=t;
T.look(L.toy.x+20,c.y,1200);
const h=H.frog;
if(h&&!h.a){ho(h);if(I()-tc<1e3)M.sound.play('frog')}
}
}
else if(k>0&&!(cl.d&&t-k>63))fr(e,s,2+(t>>1&1));
else{
if(k>0){k=-1;l=0;T.dry()}
if(go(t,f))dr();
}
};
}
T.on('tap',()=>{tc=I()});
T.on('rainstart',()=>ready().then(()=>setTimeout(cloud,CA?0:400)));
T.on('rainend',()=>{if(cl)CA?dr():cl.d=1});
T.on('layout',()=>{
Q.splice(0).forEach(pc);
for(const i in H)pc(i);
lk=0;
if(cl)dr();
});
M.cast={
ready,
helper,
cloud,
z(k){
if(k<0){if(zE)zE.style.display='none'}
else{
ready();
if(im&&im.complete){
const t=T.layout().toy,a=ST.z.at;
if(!zE){zE=mk(st,ST.z);zE.style.zIndex=9}
zE.style.display='';
sv(zE,{dx:t.x+a[0],dy:t.y+a[1]-k});
}
}
}
};
})();
(()=>{'use strict';
const M=Moss,T=M.toy,G=M.cfg,st=M.$('.stage'),V='*var(--px)',KS=['moss','mag','sac','rag'],IM={};
let it=[],wr=0,bu=0;
function mount(){
it.forEach(e=>e.remove());
it=[];
if(!wr){
wr=1;
KS.forEach(k=>{
const b=M.$('.box--'+k),l=f=>()=>{if(M.life)M.life[f](k)};
['pointerenter','focus'].forEach(n=>b.addEventListener(n,l('pauseBox')));
['pointerleave','blur'].forEach(n=>b.addEventListener(n,l('resumeBox')));
});
T.on('layout',mount);
}
const L=T.layout(),P=G.sheets.props[L.name],S=M.data.strings,n=navigator.connection;
['lamp','jar'].forEach(a=>{
const d=P[a];
if(!d)return;
const b=M.el('button','pb at',st,{x:d.x,y:d.y,w:d.w,h:d.h}),U=G.assets.props[L.name],
go=e=>{
let i=IM[U];
if(!i){i=IM[U]=new Image();i.src=U}
i.decode().then(()=>{
if(T.layout()!=L)return e();
const c=M.el('canvas','',st),g=c.getContext('2d'),f=x=>{const q=d.frames[x];g.drawImage(i,q[0],q[1],d.w,d.h,0,0,d.w,d.h)};
c.width=d.w;c.height=d.h;c.setAttribute('aria-hidden',true);
c.style.cssText='position:absolute;left:calc('+d.x+V+');top:calc('+d.y+V+');width:calc('+d.w+V+');height:calc('+d.h+V+');image-rendering:pixelated;pointer-events:none;z-index:1';
f(1);
setTimeout(()=>{f(2);setTimeout(()=>{c.remove();e()},125)},125);
},e);
};
b.type='button';b.setAttribute('aria-label',S[a]);
b.addEventListener('click',()=>{
M.sound.play(a);
if(a=='jar')T.fx(L.jar_sparks.map((p,i)=>({x:p[0],y:p[1],a:0,b:0,l:2+Math.random()*4|0,c:i%2?'#f0b443':'#b57c21'})));
if(!M.calm&&!bu){bu=1;go(()=>{bu=0;if(a=='lamp'&&M.life)M.life.dip()})}
});
it.push(b);
});
if(L.name=='desk'&&matchMedia('(hover:hover)').matches&&!(n&&n.saveData))KS.forEach(k=>{
const i=new Image(),p=M.$('.box--'+k+' picture');
i.alt='';i.className='lit';
i.onload=()=>{if(T.layout()==L&&!p.querySelector('.lit')){p.appendChild(i);it.push(i)}};
i.src=G.assets.lit[k];
});
}
M.props={mount};
})();

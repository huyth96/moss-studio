window.Moss=window.Moss||{};Moss.boardMeta={"sheet":"board","canvas":[96,92],"cell":12,"ox":18,"oy":16,"floor":{"x":0,"y":0,"w":96,"h":92},"pieces":{"R":{"x":97,"y":0,"w":12,"h":12},"B":{"x":109,"y":0,"w":12,"h":12},"G":{"x":121,"y":0,"w":12,"h":12},"Y":{"x":133,"y":0,"w":12,"h":12}},"cells":{"a":{"x":145,"y":0,"w":12,"h":12},"b":{"x":157,"y":0,"w":12,"h":12}},"magnets":{"R":{"edge":"top","x":40,"y":0,"w":16,"h":14,"rest":[97,14],"firing":[114,14],"refused":[131,14]},"Y":{"edge":"bottom","x":40,"y":78,"w":16,"h":14,"rest":[97,31],"firing":[114,31],"refused":[131,31]},"B":{"edge":"left","x":1,"y":38,"w":14,"h":16,"rest":[97,48],"firing":[114,48],"refused":[131,48]},"G":{"edge":"right","x":81,"y":38,"w":14,"h":16,"rest":[97,65],"firing":[114,65],"refused":[131,65]}},"padlock":{"x":169,"y":0,"w":8,"h":9},"w":177,"h":92};
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
(()=>{
var D=document,M=window.Moss,A=M.boardMeta,DIR={R:[0,-1],Y:[0,1],B:[-1,0],G:[1,0]},each=(b,f)=>b.forEach((r,y)=>r.forEach((p,x)=>f(p,x,y))),el=D.getElementById('board'),sheet;
function fire(b,c){
var H=b.length,W=b[0].length,v=c=='R'||c=='Y',far=c=='Y'||c=='G',L=v?H:W,n=v?W:H,changed=false;
for(var l=0;l<n;l++){var slot=0,open=true;
for(var i=0;i<L;i++){var d=far?L-1-i:i,x=v?l:d,y=v?d:l,p=b[y][x];
if(p=='.')continue;
if(p==c){ if(open){b[y][x]='.';changed=true}
else{ if(slot!=i){var s=far?L-1-slot:slot;b[v?s:l][v?l:s]=c;b[y][x]='.';changed=true} slot++ } }
else{open=false;slot=i+1}}}
return changed;}
function locked(b){
var k=b.map(r=>r.map(p=>p!='.')),go=1,o=[];
while(go){go=0;each(b,(p,x,y)=>{if(k[y][x]){var d=DIR[p],q=k[y+d[1]];if(!q||!q[x+d[0]]){k[y][x]=0;go=1}}})}
each(k,(l,x,y)=>{if(l)o.push([x,y])});
return o;
}
function moves(a,c){
var d=DIR[c],o=[];
each(a,(p,x,y)=>{
if(p==c){
var i=x+d[0],j=y+d[1],e=0,n=1,q;
while((q=a[j]&&a[j][i])&&(q==c||q=='.')){if(q=='.')e++;i+=d[0];j+=d[1];n++}
o.push({x:x,y:y,g:!q,d:(q?e:n)*12});
}
});
return o;
}
function mount(el,levels,str){
var stage=el.querySelector('.board-stage'),line=el.querySelector('.board-status'),S=M.sound,im=new Image,ic=new Image,c=D.createElement('canvas'),g=c.getContext('2d'),
slow=matchMedia('(prefers-reduced-motion: reduce)').matches,X=A.ox,Y=A.oy,lv=0,live=[],lock=[],first,sky,b,left,mag,no,t0,end,over,sh,nt,tm,rung,
pic=(r,x,y)=>g.drawImage(im,r.x,r.y,r.w,r.h,x,y,r.w,r.h),
u=n=>'calc('+n+'*var(--px))';
function draw(t){
g.putImageData(sky,0,0);
each(b,(p,x,y)=>{if(p!='.'&&p!=mag)pic(A.pieces[p],X+x*12+(sh&&lock.some(k=>k[0]==x&&k[1]==y)?sh:0),Y+y*12)});
if(live[0]){
var d=DIR[mag];
g.save();g.beginPath();g.rect(X,Y,60,60);g.clip();
live.forEach(m=>{
var o=slow?(t<66?m.d/2:m.d):Math.min(m.d,(t/33|0)*3);
pic(A.pieces[mag],X+m.x*12+d[0]*o,Y+m.y*12+d[1]*o);
if(m.g&&!m.r&&o>=m.d-12){m.r=1;S.play('tine',{step:rung++})}
});
g.restore();
}else if(over=='jam'){
var s=0,e=0;
lock.map(k=>{s+=k[0];e+=k[1]});
s=X+Math.round(s*12/lock.length)+2;e=Y+Math.round(e*12/lock.length)+1;
pic(A.padlock,s,e);
g.fillStyle='#cfd6da';g.fillRect(s+2,e,4,1);g.fillRect(s+1,e+1,1,2);g.fillRect(s+6,e+1,1,2);
}
for(var k in A.magnets){var m=A.magnets[k],f=m[k==no?'refused':k==mag?'firing':'rest'];g.drawImage(im,f[0],f[1],m.w,m.h,m.x,m.y,m.w,m.h)}
g.drawImage(ic,S.muted()?13:0,0,13,11,83,0,13,11);
}
function button(f){
var r=D.createElement('button');
r.type='button';r.onclick=f;
return r;
}
function say(s,retry){
line.textContent=s;
if(retry){
var r=button(e=>{reset();e.detail||first.focus()});
r.className='sharebtn';r.textContent=str.retry;
r.style='font:inherit;min-width:48px;margin:calc(8.5*var(--g1) - 24px) 0;padding:calc(24px - 8.5*var(--g1)) 0;touch-action:manipulation';
line.append(' ',r);
}
}
function count(){say(str.progress.replace('{n}',lv+1)+' · '+(left==1?str.taps_one:str.taps.replace('{n}',left)))}
function reset(){
clearTimeout(tm);b=levels[lv].board.map(r=>r.split(''));left=levels[lv].taps;live=[];lock=[];mag=no=sh=over=0;
draw(0);count();
}
function settle(){
var q=[1,-1,1,-1,0],f=()=>{sh=q.shift();draw(0);if(q[0]!=null)tm=setTimeout(f,66)};
live=[];mag=0;
if(over=='clear')setTimeout(()=>{if(++lv<levels.length)reset();else{over='done';say(str.done)}},568);
else if(over)say(str[over],1);
if(over=='jam'&&!slow)f();else draw(0);
}
function loop(){
if(live[0]){
var t=performance.now()-t0;
if(t<end){draw(t);requestAnimationFrame(loop)}else settle();
}
}
function refuse(k){
S.buzz(8);
no=k;clearTimeout(nt);
if(!live[0])draw(0);
nt=setTimeout(()=>{no=0;if(!live[0])draw(0)},125);
}
function tap(k){
if(over)return refuse(k);
var run=live[0],o=moves(b,k);
if(!fire(b,k))return refuse(k);
left--;live=o;mag=k;t0=performance.now();rung=0;
end=slow?66:Math.max(...live.map(m=>m.d))*11;
if(!b.join().replace(/[.,]/g,''))over='clear';
else if((lock=locked(b))[0])over='jam';
else if(!left)over='out';
count();draw(0);
if(!run)requestAnimationFrame(loop);
}
function btn(k,x,y,w,h,f){
var r=button(f||(()=>tap(k)));
r.setAttribute('aria-label',str.magnets[k]);
r.style='position:absolute;border:0;background:none;cursor:pointer;touch-action:manipulation;min-width:48px;min-height:48px;left:'+u(x)+';top:'+u(y)+';width:'+u(w)+';height:'+u(h);
stage.appendChild(r);
return r;
}
ic.onload=()=>{
c.width=96;c.height=92;c.setAttribute('aria-hidden',true);
c.style='position:absolute;left:0;top:0;width:100%;height:100%';
pic(A.floor,0,0);sky=g.getImageData(0,0,96,92);
el.querySelector('.board-static').style.opacity=0;
reset();
stage.appendChild(c);
first=btn('R',16,0,64,16);
btn('B',0,16,16,60);
btn('G',80,16,16,60);
btn('Y',16,76,64,16);
var p=btn('',80,0,16,16,()=>{S.setMuted(!S.muted());face();if(!live[0])draw(0)}),
face=()=>{p.setAttribute('aria-pressed',S.muted());p.setAttribute('aria-label',S.muted()?str.unmute:str.mute)};
p.className='mute';face();
};
im.onload=()=>{ic.src='data:image/webp;base64,UklGRmYAAABXRUJQVlA4TFoAAAAvGYACEFUoaCSpEUNRgX8pGPmKgyUnJCCaKvs/0QGlbRsw/38ZXj5R/xW2bdtkJ11Cz2D8TCkg/kmZ/gpia+ACThsQSKAEIhOZglIIobagp/A0fj4GPYiHvwc='};
im.src=sheet;
}
M.board={mount:mount,fire:fire,locked:locked};
if(el&&A){
var d=JSON.parse(D.getElementById('moss-data').textContent);
sheet=d.assets.board;
mount(el,d.levels,d.strings);
}
})();

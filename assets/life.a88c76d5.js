window.Moss=window.Moss||{};Moss.lifeMeta={"sheet":"life","w":36,"h":58,"desk":[{"box":"moss","kind":"star","x":97,"y":102,"w":3,"h":3,"sx":0,"sy":0,"n":2},{"box":"mag","kind":"blink","x":169,"y":95,"w":18,"h":12,"sx":0,"sy":3,"n":2},{"box":"sac","kind":"flame","x":276,"y":98,"w":5,"h":4,"sx":0,"sy":15,"n":3},{"box":"sac","kind":"flame","x":289,"y":93,"w":5,"h":4,"sx":0,"sy":19,"n":3},{"box":"sac","kind":"flame","x":302,"y":98,"w":5,"h":4,"sx":0,"sy":23,"n":3},{"box":"rag","kind":"flame","x":342,"y":95,"w":3,"h":1,"sx":0,"sy":27,"n":3}],"tablet":[{"box":"moss","kind":"star","x":65,"y":93,"w":3,"h":3,"sx":0,"sy":28,"n":2},{"box":"mag","kind":"blink","x":116,"y":89,"w":14,"h":8,"sx":0,"sy":31,"n":2},{"box":"sac","kind":"flame","x":223,"y":89,"w":3,"h":1,"sx":0,"sy":39,"n":3},{"box":"sac","kind":"flame","x":233,"y":86,"w":3,"h":1,"sx":0,"sy":40,"n":3},{"box":"sac","kind":"flame","x":243,"y":89,"w":3,"h":1,"sx":0,"sy":41,"n":3},{"box":"rag","kind":"flame","x":273,"y":88,"w":3,"h":1,"sx":0,"sy":42,"n":3}],"phone":[{"box":"moss","kind":"star","x":128,"y":136,"w":3,"h":3,"sx":0,"sy":43,"n":2},{"box":"mag","kind":"blink","x":211,"y":132,"w":14,"h":8,"sx":0,"sy":46,"n":2},{"box":"sac","kind":"flame","x":135,"y":221,"w":3,"h":1,"sx":0,"sy":54,"n":3},{"box":"sac","kind":"flame","x":145,"y":218,"w":3,"h":1,"sx":0,"sy":55,"n":3},{"box":"sac","kind":"flame","x":155,"y":221,"w":3,"h":1,"sx":0,"sy":56,"n":3},{"box":"rag","kind":"flame","x":197,"y":220,"w":3,"h":1,"sx":0,"sy":57,"n":3}]};
(()=>{'use strict';if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const M=window.Moss,T=M&&M.toy,K=M&&M.clock,X=M&&M.lifeMeta;
if(!T||!K||!X)return;
const AMBER=['#553c27','#b57c21','#f0b443'],FLASH=[0,0,0,0,0,0,0,0,0,0,1,2,3,3,3,2,1,0,0,0,0,0,0,0],FLAME=[0,0,1,0,2,0,1,2],hold={},rnd=(a,b)=>a+Math.random()*(b-a);
let L,bc,fc,b,f,motes=[],flies=[],stamps=[],dips={},dipI=null,seq=[],next=0,lastDip=-99,tick=0,sheet=new Image(),loaded=0;
sheet.onload=()=>{loaded=1};
sheet.src=M.cfg.assets.life;
function spawn(){
const c=L.cone,y=rnd(c.y,c.y1),hw=(y-c.y)*c.a+c.b,x=c.x+rnd(-hw,hw);
return{x:Math.round(x),y:Math.round(y),k:3+Math.floor(rnd(0,5)),dx:Math.random()<.5?-1:1};
}
function inCalm(m){const c=L.calm;return m.x>=c.x0&&m.x<c.x1&&m.y>=c.y0&&m.y<c.y1}
function mote(m){
const c=L.cone,hw=(m.y-c.y)*c.a+c.b;
b.fillStyle=Math.abs(m.x-c.x)<hw*.55?'#c9a35c':'#8c683a';
b.fillRect(m.x,m.y,1,1);
}
function build(){
L=T.layout();
if(!bc){bc=T.layer('life-b',1);fc=T.layer('life-f',5);b=bc.getContext('2d');f=fc.getContext('2d')}
bc.width=fc.width=L.w;bc.height=fc.height=L.h;
motes=[];
if(L.motes&&L.cone&&K.level<1)for(let i=0;i<L.motes;i++)motes.push(spawn());
motes=motes.filter(m=>!inCalm(m));
flies=L.fireflies.map((p,i)=>({p,s:0,x:p[0][0],y:p[0][1],ph:i*13}));
stamps=(X[L.name]||[]).map(s=>Object.assign({c:0,nb:0},s));
const n=L.name;
if(!dips[n]){const i=new Image();i.src=M.cfg.assets.dip[n];dips[n]=i}
dipI=dips[n];
seq=[];
}
function dust(t){
const c=L.cone;
for(let i=0;i<motes.length;i++){
let m=motes[i];
if(t%m.k)continue;
b.clearRect(m.x,m.y,1,1);
m.y++;
if(t%(m.k*3)===0)m.x+=m.dx;
if(m.y>=c.y1||Math.abs(m.x-c.x)>(m.y-c.y)*c.a+c.b||inCalm(m))m=motes[i]=spawn();
if(inCalm(m))continue;
mote(m);
}
}
function lamp(){
if(!seq.length){
if(tick<next||!dipI.complete||!dipI.naturalWidth)return;
seq=[1,0,1,0,2,2];
next=tick+Math.round(rnd(72,192));
}
const s=seq.shift();
if(s===2)return;
if(s)b.drawImage(dipI,0,0);else b.clearRect(0,0,L.w,L.h);
motes.forEach(m=>inCalm(m)||mote(m));
lastDip=tick;
}
function glow(x,y,v){
if(v===1||v===2){f.fillStyle=AMBER[v-1];f.fillRect(x,y,1,1)}
if(v===3){f.fillStyle=AMBER[1];f.fillRect(x-1,y,3,1);f.fillRect(x,y-1,1,3);f.fillStyle=AMBER[2];f.fillRect(x,y,1,1)}
}
function bugs(t){
const q=v=>Math.abs(t-next)<33||t-lastDip<33?v&&1:v;
for(const y of flies){
f.clearRect(y.x-1,y.y-1,3,3);
if(t%4===0){
const to=y.p[(y.s+1)%y.p.length];
if(y.x===to[0]&&y.y===to[1])y.s=(y.s+1)%y.p.length;
else{y.x+=Math.sign(to[0]-y.x);y.y+=Math.sign(to[1]-y.y)}
}
glow(y.x,y.y,q(FLASH[(t+y.ph)%24]));
}
L.jar_sparks.forEach((p,i)=>{
const v=q(FLASH[(t+i*13)%40]);
f.clearRect(p[0],p[1],1,1);
if(v){f.fillStyle=AMBER[v-1];f.fillRect(p[0],p[1],1,1)}
});
}
function show(s,v){
if(s.c===v)return;
s.c=v;
f.clearRect(s.x,s.y,s.w,s.h);
if(v)f.drawImage(sheet,s.sx+v*s.w,s.sy,s.w,s.h,s.x,s.y,s.w,s.h);
}
function covers(t){
if(!loaded)return;
const l=K.level;
stamps.forEach((s,i)=>{
if(hold[s.box])return show(s,0);
if(s.kind==='flame')return show(s,l>1?0:t%2?s.c:FLAME[((t>>1)+i*3)%8]);
if(l)return show(s,0);
if(s.kind==='star')return show(s,t%16===0?1:0);
if(!s.nb)s.nb=t+Math.round(rnd(32,72));
if(t>=s.nb){show(s,1);s.nb=t+Math.round(rnd(32,72))}
else show(s,0);
});
}
function beat(t){
tick=t;
if(!next)next=t+40;
if(motes.length&&!seq.length)dust(t);
lamp();
bugs(t);
covers(t);
}
K.onLevel(l=>{
if(l&&motes.length){motes=[];if(!seq.length)b.clearRect(0,0,L.w,L.h)}
});
T.on('layout',build);
build();
K.add(beat,1,'life');
M.life={
pauseBox(k){hold[k]=1;stamps.forEach(s=>{if(s.box===k)show(s,0)})},
resumeBox(k){delete hold[k]},
dip(){
if(seq.length||tick-lastDip<8||!dipI||!dipI.complete||!dipI.naturalWidth)return;
seq=[1,0];
next=Math.max(next,tick+72);
}
};
})();

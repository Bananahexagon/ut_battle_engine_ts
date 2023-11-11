const A=h=>{const t=(e,s)=>{e()||(s(),requestAnimationFrame(()=>t(e,s)))},c=(e,s,i=0)=>{i<e&&(s(i),requestAnimationFrame(()=>c(e,s,i+1)))},r=e=>{e(),requestAnimationFrame(()=>r(e))};return{frameWhile:t,frameFor:c,frameLoop:r}},P=[{type:"image",name:"soul",src:"./assets/images/soul.png"},{type:"image",name:"soul_blue",src:"./assets/images/soul_blue.png"},{type:"image",name:"commands",src:"./assets/images/commands.png"},{type:"image",name:"back",src:"./assets/images/back.png"},{type:"image",name:"sans",src:"./assets/images/sans.png"},{type:"image",name:"hp_kr_purple",src:"./assets/images/hp_kr_purple.png"},{type:"image",name:"determination_white",src:"./assets/images/font/determination_white.png"},{type:"image",name:"determination_red",src:"./assets/images/font/determination_red.png"},{type:"image",name:"determination_orange",src:"./assets/images/font/determination_orange.png"},{type:"image",name:"determination_blue",src:"./assets/images/font/determination_blue.png"},{type:"image",name:"determination_yellow",src:"./assets/images/font/determination_yellow.png"},{type:"image",name:"status_white",src:"./assets/images/font/status_white.png"},{type:"image",name:"status_red",src:"./assets/images/font/status_red.png"},{type:"image",name:"status_orange",src:"./assets/images/font/status_orange.png"},{type:"image",name:"status_blue",src:"./assets/images/font/status_blue.png"},{type:"image",name:"status_yellow",src:"./assets/images/font/status_yellow.png"},{type:"image",name:"status_purple",src:"./assets/images/font/status_purple.png"},{type:"image",name:"hp_kr_white",src:"./assets/images/hp_kr_white.png"},{type:"image",name:"hp_kr_red",src:"./assets/images/hp_kr_red.png"},{type:"image",name:"hp_kr_purple",src:"./assets/images/hp_kr_purple.png"},{type:"image",name:"bone_head_white",src:"./assets/images/bone_head_white.png"},{type:"image",name:"bananahexagon",src:"./assets/images/normal_icon.png"},{type:"audio",name:"damage",src:"./assets/audios/damage.mp3"}],z=async h=>{const t={},c={},r={},e=P,s=[];return console.log(e),e.forEach(i=>s.push(new Promise(p=>{switch(i.type){case"image":{const l=new Image;l.src=i.src,l.onload=()=>{t[i.name]=l,p()}}break;case"audio":(async()=>{const a=await(await fetch(i.src)).arrayBuffer();c[i.name]=await h.decodeAudioData(a)})().then(p);break;case"font":(async()=>{const n=await(await(await fetch(i.src)).text()).match(/url\(.+?\)/g);if(!n)throw new Error("フォントが見つかりませんでした");const g=[];n.forEach(d=>{g.push((async()=>{const o=new FontFace(i.name,d);await o.load(),r[i.name]=o,await document.fonts.add(o)})())}),Promise.all(g)})().then(p);break}}))),await Promise.all(s),{Images:t,Audios:c,Fonts:r}},y=h=>Math.sin(h/360*Math.PI*2),m=h=>Math.cos(h/360*Math.PI*2),E=(h,t,c,r,e,s)=>{const i=(n,g,d,o=0,_=100,f=1,u="center",w,b=!1)=>{if(b){const x=c[n],[$,v,q,M]=w===void 0?[0,0,x.width,x.height]:[w.left,w.top,w.width,w.height];switch(t.globalAlpha=f,u){case"center":t.save(),t.translate(g*e.display_quality,-d*e.display_quality+h.height),t.rotate(o*Math.PI/180),t.drawImage(x,$,v,q,M,-q*_/200*e.display_quality,-M*_/200*e.display_quality,q*_/100*e.display_quality,M*_/100*e.display_quality),t.restore();break;case"start":t.save(),t.translate(g*e.display_quality,-d*e.display_quality+h.height),t.rotate(o*Math.PI/180),t.drawImage(x,$,v,q,M,0,0,q*_/100*e.display_quality,M*_/100*e.display_quality),t.restore()}}else{const x=(m(s.d)*g-y(s.d)*d+s.x)*s.size/100,$=(y(s.d)*g+m(s.d)*d+s.y)*s.size/100,v=o+s.d;i(n,x,$,v,_*s.size/100,f,u,w,!0)}};return{stamp:i,drawRect:(n,g,d,o,_,f=0,u="center")=>{switch(t.globalAlpha=1,t.save(),u){case"center++":t.translate(n*e.display_quality,-g*e.display_quality+h.height),t.rotate(f*Math.PI/180),t.beginPath(),t.rect(-d/2*e.display_quality,-o/2*e.display_quality,d*e.display_quality,o*e.display_quality);break;case"center":t.translate((n-d/2)*e.display_quality,-(g-o/2)*e.display_quality+h.height),t.rotate(f*Math.PI/180),t.beginPath(),t.rect(0,0,d*e.display_quality,-o*e.display_quality);break;case"start":default:t.translate(n*e.display_quality,-g*e.display_quality+h.height),t.rotate(f*Math.PI/180),t.beginPath(),t.rect(0,0,d*e.display_quality,-o*e.display_quality);break}t.fillStyle=_,t.fill(),t.restore()},drawLine:(n,g,d,o,_,f,u=0)=>{switch(t.globalAlpha=1,t.beginPath(),u){case 0:t.moveTo((n-o*Math.sin(d)/2)*e.display_quality,-(g+o*Math.cos(d)/2)*e.display_quality+h.height),t.lineTo((n+o*Math.sin(d)/2)*e.display_quality,-(g-o*Math.cos(d)/2)*e.display_quality+h.height);break;case 1:t.moveTo(n*e.display_quality,-g*e.display_quality+h.height),t.lineTo((n+o*Math.sin(d))*e.display_quality,-(g-o*Math.cos(d))*e.display_quality+h.height);break}t.strokeStyle=f,t.lineWidth=_*e.display_quality,t.stroke()},drawText:(n,g,d,o,_,f="serif",u="left")=>{t.globalAlpha=1;const[w,b]=[g*e.display_quality,-d*e.display_quality+h.height];t.font=`${o*e.display_quality}px ${f}`,t.textAlign=u,t.fillStyle=_,t.fillText(n,w,b)}}},L=h=>{class t{constructor(r,e,s=0,i=100,p="",l=!1){this.x=r,this.y=e,this.d=s,this.size=i,this.costume=p,this.visible=l}stamp(){this.visible&&h.stamp(this.costume,this.x,this.y,this.d,this.size)}move(r){this.x+=y(this.d)*r,this.y+=m(this.d)*r}}return t},D=(h,t,c)=>({raw_to_stage:(e,s,i=0)=>{const p=h.getBoundingClientRect(),l=((e-p.left)/c.size*100-c.x)*t.stage_width/t.display_width,a=(t.display_height-((s-p.top)/c.size*100-c.y))*t.stage_height/t.display_height,n=i+c.d;return{x:l,y:a,d:n}}}),I=h=>{const t=new(window.AudioContext||window.webkitAudioContext);return{play:r=>{const e=t.createBufferSource();e.buffer=h[r],e.connect(t.destination),e.start(0)}}},R=async h=>{const t=document.getElementById(h.canvas_name);t.height=h.stage_height*h.display_quality,t.width=h.stage_width*h.display_quality;const c=t.getContext("2d"),r=new(window.AudioContext||window.webkitAudioContext),{Images:e,Audios:s,Fonts:i}=await z(r),p={up:!1,down:!1,left:!1,right:!1,z:!1,x:!1,c:!1,d:!1},l={x:0,y:0,clicking:!1,is_in_rect(w,b,x,$,v="center"){switch(v){case"center":return w-x/2<this.x&&this.x<w+x/2&&b-$/2<this.y&&this.y<b+$/2;case"start":default:return w<this.x&&this.x<w+x&&b<this.y&&this.y<b+$}}},a={canvas:{size:100,x:0,y:0,d:0}},n=E(t,c,e,i,h,a.canvas),g=I(s),d=L(n);c.imageSmoothingEnabled=!1;const o=D(t,h,a.canvas);window.addEventListener("keydown",w=>{switch(w.key){case"ArrowUp":p.up=!0;break;case"ArrowDown":p.down=!0;break;case"ArrowLeft":p.left=!0;break;case"ArrowRight":p.right=!0;break;case"z":case"Z":p.z=!0;break;case"x":case"X":p.x=!0;break;case"c":case"C":p.c=!0;break;case"d":case"D":p.d=!0;break}}),window.addEventListener("keyup",w=>{switch(w.key){case"ArrowUp":p.up=!1;break;case"ArrowDown":p.down=!1;break;case"ArrowLeft":p.left=!1;break;case"ArrowRight":p.right=!1;break;case"z":case"Z":p.z=!1;break;case"x":case"X":p.x=!1;break;case"c":case"C":p.c=!1;break;case"d":case"D":p.d=!1;break}}),t.addEventListener("mousedown",w=>{l.clicking=!0;const b=o.raw_to_stage(w.x,w.y);l.x=b.x,l.y=b.y}),t.addEventListener("mousemove",w=>{const b=o.raw_to_stage(w.x,w.y);l.x=b.x,l.y=b.y}),t.addEventListener("mouseup",w=>{l.clicking=!1;const b=o.raw_to_stage(w.x,w.y);l.x=b.x,l.y=b.y});const{frameWhile:_,frameFor:f,frameLoop:u}=A();return{canvas:t,ctx:c,Images:e,Audios:s,Fonts:i,inputKeys:p,inputMouse:l,props:a,cLib:n,aLib:g,Sprite:d,for:f,while:_,loop:u}},F=2,S=640,C=480,B=800,G=400,j="canvas",T={display_quality:F,stage_width:S,stage_height:C,display_width:B,display_height:G,canvas_name:j},W=(h,t,c,r)=>{let e={};const s=class k extends c{constructor(a,n,g,d,o,_,f,u,w,b){super(a,n,g,d,void 0,!0),this.start_x=a,this.start_y=n,this.start_d=g,this.move_x=_,this.move_y=f,this.move_d=u,this.start_len=o,this.move_len=w,this.len=o,this.age=0,this.id=k.current_id,this.width=d,e[this.id]=this,k.current_id++}move_self(){this.age++,this.x=this.start_x+k.get_move(this.move_x,this.age),this.y=this.start_y+k.get_move(this.move_y,this.age),this.d=this.start_d+k.get_move(this.move_d,this.age),this.len=this.start_len+k.get_move(this.move_len,this.age)}draw(){m(this.d),h.stamp("bone_head_white",this.x+m(this.d)*this.width*8/6,this.y-y(this.d)*this.width*8/6,this.d+180,this.width*100/6,1,"start"),h.drawRect(this.x+y(this.d)*this.width*6/6,this.y+m(this.d)*this.width*6/6,this.width,this.len+this.width*2/6,"white",this.d,"start"),h.stamp("bone_head_white",this.x+y(this.d)*(this.len+this.width*14/6)-m(this.d)*this.width*2/6,this.y+m(this.d)*(this.len+this.width*14/6)+y(this.d)*this.width*2/6,this.d,this.width*100/6,1,"start")}judge(){h.drawRect(this.x,this.y,this.width,this.len+this.width*14/6,"red",this.d,"start"),h.drawRect(this.x+y(this.d)*(this.len/2+this.width*7/6)+m(this.d)*this.width*3/6,this.y+m(this.d)*(this.len/2+this.width*7/6)-y(this.d)*this.width*3/6,this.width,this.len+this.width*14/6,"blue",this.d,"center++");{const a=r.soul.x-this.x,n=r.soul.y-this.y,g=a*m(this.d)+n*-y(this.d),d=n*m(this.d)+a*y(this.d);this.len+this.width*14/6>d&&d>0&&this.width>g&&g>0&&(r.hp-=1,t.play("damage"))}}static process(){for(const a in e){const n=e[a];n.move_self(),n.draw(),n.judge()}}static get_move(a,n){if(typeof a=="number")return a*n;switch(a.type){case"sin":case"cos":return y(a.cycle*n)*a.amp;case"custom":return a.fn(n)}}};s.current_id=0;let i=s;return{boneDict:e,normal:i,process:()=>{i.process()}}},K={height_basic:15,width_basic:2,name:"determination"},U={left:10,up:34,width:6,height:9,gap:0},X={left:20,up:34,width:6,height:9,gap:0},Z={left:30,up:34,width:6,height:9,gap:0},H={left:40,up:34,width:6,height:9,gap:0},V={left:50,up:34,width:6,height:9,gap:0},J={left:60,up:34,width:6,height:9,gap:0},N={left:70,up:34,width:6,height:9,gap:0},O={left:80,up:34,width:6,height:9,gap:0},Q={left:90,up:34,width:6,height:9,gap:0},Y={left:100,up:34,width:6,height:9,gap:0},tt={left:110,up:34,width:6,height:9,gap:0},et={left:120,up:34,width:6,height:9,gap:0},st={left:130,up:34,width:7,height:9,gap:0},it={left:140,up:34,width:6,height:9,gap:0},ht={left:150,up:34,width:6,height:9,gap:0},at={left:0,up:50,width:6,height:9,gap:0},nt={left:10,up:50,width:6,height:9,gap:0},pt={left:20,up:50,width:6,height:9,gap:0},lt={left:30,up:50,width:6,height:9,gap:0},dt={left:40,up:50,width:6,height:9,gap:0},gt={left:50,up:50,width:6,height:9,gap:0},ot={left:60,up:50,width:6,height:9,gap:0},rt={left:70,up:50,width:7,height:9,gap:0},ct={left:80,up:50,width:6,height:9,gap:0},ut={left:90,up:50,width:6,height:9,gap:0},wt={left:100,up:50,width:6,height:9,gap:0},ft={left:10,up:68,width:6,height:7,gap:2},_t={left:20,up:66,width:6,height:9,gap:0},yt={left:30,up:68,width:6,height:7,gap:2},mt={left:40,up:66,width:6,height:9,gap:0},bt={left:50,up:68,width:6,height:7,gap:2},xt={left:60,up:66,width:6,height:9,gap:0},$t={left:70,up:68,width:6,height:10,gap:5},kt={left:80,up:66,width:6,height:9,gap:0},vt={left:90,up:65,width:6,height:10,gap:-1},qt={left:100,up:65,width:6,height:13,gap:2},Mt={left:110,up:66,width:6,height:9,gap:0},At={left:120,up:66,width:6,height:9,gap:0},Pt={left:130,up:68,width:7,height:7,gap:2},zt={left:140,up:68,width:6,height:7,gap:2},Et={left:150,up:68,width:6,height:7,gap:2},Lt={left:0,up:84,width:6,height:10,gap:5},Dt={left:10,up:84,width:6,height:10,gap:5},It={left:20,up:84,width:6,height:7,gap:2},Rt={left:30,up:84,width:6,height:7,gap:2},Ft={left:40,up:82,width:6,height:9,gap:0},St={left:50,up:84,width:6,height:7,gap:2},Ct={left:60,up:84,width:6,height:7,gap:2},Bt={left:70,up:84,width:7,height:7,gap:2},Gt={left:80,up:84,width:6,height:7,gap:2},jt={left:90,up:84,width:6,height:10,gap:5},Tt={left:100,up:84,width:6,height:7,gap:2},Wt={left:0,up:0,width:1,height:1,gap:0},Kt={left:150,up:82,width:6,height:9,gap:0},Ut={left:40,up:0,width:6,height:13,gap:0},Xt={left:150,up:61,width:4,height:1,gap:14},Zt={0:{left:0,up:18,width:6,height:9,gap:0},1:{left:10,up:18,width:6,height:9,gap:0},2:{left:20,up:18,width:6,height:9,gap:0},3:{left:30,up:18,width:6,height:9,gap:0},4:{left:40,up:18,width:6,height:9,gap:0},5:{left:50,up:18,width:6,height:9,gap:0},6:{left:60,up:18,width:6,height:9,gap:0},7:{left:70,up:18,width:6,height:9,gap:0},8:{left:80,up:18,width:6,height:9,gap:0},9:{left:90,up:18,width:6,height:9,gap:0},props:K,A:U,B:X,C:Z,D:H,E:V,F:J,G:N,H:O,I:Q,J:Y,K:tt,L:et,M:st,N:it,O:ht,P:at,Q:nt,R:pt,S:lt,T:dt,U:gt,V:ot,W:rt,X:ct,Y:ut,Z:wt,a:ft,b:_t,c:yt,d:mt,e:bt,f:xt,g:$t,h:kt,i:vt,j:qt,k:Mt,l:At,m:Pt,n:zt,o:Et,p:Lt,q:Dt,r:It,s:Rt,t:Ft,u:St,v:Ct,w:Bt,x:Gt,y:jt,z:Tt,space:Wt,irregular:Kt,"!":{left:10,up:1,width:4,height:10,gap:-1},'"':{left:20,up:2,width:5,height:4,gap:-5},"#":{left:30,up:2,width:7,height:9,gap:0},$:Ut,"%":{left:50,up:2,width:7,height:9,gap:0},"&":{left:60,up:2,width:7,height:9,gap:0},"'":{left:70,up:2,width:2,height:4,gap:-5},"(":{left:80,up:2,width:4,height:9,gap:0},")":{left:90,up:2,width:4,height:9,gap:0},"*":{left:100,up:4,width:8,height:5,gap:0},"+":{left:110,up:4,width:6,height:5,gap:0},",":{left:120,up:9,width:2,height:4,gap:7},"-":{left:130,up:6,width:5,height:1,gap:0},".":{left:140,up:9,width:2,height:2,gap:7},"/":{left:150,up:2,width:6,height:10,gap:1},":":{left:100,up:20,width:2,height:7,gap:2},";":{left:110,up:20,width:2,height:9,gap:4},"<":{left:120,up:18,width:5,height:9,gap:0},"=":{left:130,up:21,width:5,height:3,gap:0},">":{left:140,up:18,width:5,height:9,gap:0},"?":{left:150,up:18,width:6,height:9,gap:0},"@":{left:0,up:34,width:6,height:9,gap:0},"[":{left:110,up:50,width:4,height:9,gap:0},"\\":{left:120,up:50,width:6,height:10,gap:1},"]":{left:130,up:50,width:4,height:9,gap:0},"^":{left:140,up:49,width:6,height:4,gap:-5},_:Xt,"`":{left:10,up:68,width:3,height:2,gap:2},"{":{left:110,up:82,width:5,height:9,gap:0},"|":{left:120,up:82,width:2,height:9,gap:0},"}":{left:130,up:82,width:5,height:9,gap:0},"~":{left:140,up:85,width:7,height:2,gap:-1}},Ht={height_basic:6,width_basic:1,name:"status"},Vt={left:6,up:14,width:4,height:5,gap:0},Jt={left:12,up:14,width:4,height:5,gap:0},Nt={left:18,up:14,width:4,height:5,gap:0},Ot={left:24,up:14,width:4,height:5,gap:0},Qt={left:30,up:14,width:4,height:5,gap:0},Yt={left:36,up:14,width:4,height:5,gap:0},te={left:42,up:14,width:4,height:5,gap:0},ee={left:48,up:14,width:4,height:5,gap:0},se={left:54,up:14,width:4,height:5,gap:0},ie={left:60,up:14,width:4,height:5,gap:0},he={left:66,up:14,width:4,height:5,gap:0},ae={left:72,up:14,width:4,height:5,gap:0},ne={left:78,up:14,width:5,height:5,gap:0},pe={left:84,up:14,width:4,height:5,gap:0},le={left:90,up:14,width:4,height:5,gap:0},de={left:0,up:21,width:4,height:5,gap:0},ge={left:6,up:21,width:4,height:5,gap:0},oe={left:12,up:21,width:4,height:5,gap:0},re={left:18,up:21,width:4,height:5,gap:0},ce={left:24,up:21,width:4,height:5,gap:0},ue={left:30,up:21,width:4,height:5,gap:0},we={left:36,up:21,width:4,height:5,gap:0},fe={left:42,up:21,width:5,height:5,gap:0},_e={left:48,up:21,width:4,height:5,gap:0},ye={left:54,up:21,width:4,height:5,gap:0},me={left:60,up:21,width:4,height:5,gap:0},be={left:6,up:28,width:4,height:5,gap:0},xe={left:12,up:28,width:4,height:5,gap:0},$e={left:18,up:28,width:4,height:5,gap:0},ke={left:24,up:28,width:4,height:5,gap:0},ve={left:30,up:28,width:4,height:5,gap:0},qe={left:36,up:28,width:4,height:5,gap:0},Me={left:42,up:28,width:4,height:5,gap:0},Ae={left:48,up:28,width:4,height:5,gap:0},Pe={left:54,up:28,width:4,height:5,gap:0},ze={left:60,up:28,width:4,height:5,gap:0},Ee={left:66,up:28,width:4,height:5,gap:0},Le={left:72,up:28,width:4,height:5,gap:0},De={left:78,up:28,width:5,height:5,gap:0},Ie={left:84,up:28,width:4,height:5,gap:0},Re={left:90,up:28,width:4,height:5,gap:0},Fe={left:0,up:35,width:4,height:5,gap:0},Se={left:6,up:35,width:4,height:5,gap:0},Ce={left:12,up:35,width:4,height:5,gap:0},Be={left:18,up:35,width:4,height:5,gap:0},Ge={left:24,up:35,width:4,height:5,gap:0},je={left:30,up:35,width:4,height:5,gap:0},Te={left:36,up:35,width:4,height:5,gap:0},We={left:42,up:35,width:5,height:5,gap:0},Ke={left:48,up:35,width:4,height:5,gap:0},Ue={left:54,up:35,width:4,height:5,gap:0},Xe={left:60,up:35,width:4,height:5,gap:0},Ze={left:0,up:0,width:4,height:1,gap:0},He={left:90,up:35,width:4,height:5,gap:0},Ve={left:24,up:0,width:5,height:5,gap:0},Je={left:90,up:25,width:4,height:1,gap:4},Ne={0:{left:0,up:7,width:4,height:5,gap:0},1:{left:6,up:7,width:4,height:5,gap:0},2:{left:12,up:7,width:4,height:5,gap:0},3:{left:18,up:7,width:4,height:5,gap:0},4:{left:24,up:7,width:4,height:5,gap:0},5:{left:30,up:7,width:4,height:5,gap:0},6:{left:36,up:7,width:4,height:5,gap:0},7:{left:42,up:7,width:4,height:5,gap:0},8:{left:48,up:7,width:4,height:5,gap:0},9:{left:54,up:7,width:4,height:5,gap:0},props:Ht,A:Vt,B:Jt,C:Nt,D:Ot,E:Qt,F:Yt,G:te,H:ee,I:se,J:ie,K:he,L:ae,M:ne,N:pe,O:le,P:de,Q:ge,R:oe,S:re,T:ce,U:ue,V:we,W:fe,X:_e,Y:ye,Z:me,a:be,b:xe,c:$e,d:ke,e:ve,f:qe,g:Me,h:Ae,i:Pe,j:ze,k:Ee,l:Le,m:De,n:Ie,o:Re,p:Fe,q:Se,r:Ce,s:Be,t:Ge,u:je,v:Te,w:We,x:Ke,y:Ue,z:Xe,space:Ze,irregular:He,"!":{left:6,up:0,width:4,height:5,gap:0},'"':{left:12,up:0,width:3,height:2,gap:0},"#":{left:18,up:0,width:5,height:5,gap:0},$:Ve,"%":{left:30,up:1,width:4,height:4,gap:1},"&":{left:36,up:0,width:5,height:5,gap:0},"'":{left:42,up:0,width:1,height:2,gap:-3},"(":{left:48,up:0,width:3,height:5,gap:0},")":{left:54,up:0,width:3,height:5,gap:0},"*":{left:60,up:0,width:5,height:5,gap:0},"+":{left:66,up:0,width:5,height:5,gap:0},",":{left:72,up:3,width:1,height:2,gap:3},"-":{left:78,up:2,width:5,height:1,gap:0},".":{left:84,up:4,width:1,height:1,gap:4},"/":{left:90,up:1,width:4,height:4,gap:1},":":{left:60,up:8,width:1,height:3,gap:0},";":{left:66,up:8,width:1,height:4,gap:1},"<":{left:72,up:7,width:3,height:5,gap:0},"=":{left:78,up:8,width:5,height:3,gap:0},">":{left:84,up:7,width:3,height:5,gap:0},"?":{left:90,up:7,width:4,height:5,gap:0},"@":{left:0,up:14,width:4,height:5,gap:0},"[":{left:66,up:21,width:4,height:5,gap:0},"\\":{left:72,up:22,width:4,height:4,gap:1},"]":{left:78,up:21,width:4,height:5,gap:0},"^":{left:84,up:21,width:5,height:3,gap:-1},_:Je,"`":{left:0,up:27,width:1,height:2,gap:-5},"{":{left:66,up:35,width:3,height:5,gap:0},"|":{left:72,up:35,width:1,height:5,gap:0},"}":{left:78,up:35,width:3,height:5,gap:0},"~":{left:84,up:35,width:4,height:2,gap:-3}},Oe=(h,t)=>{const c={en:Zt,status:Ne};let r={};class e{constructor(a){this.name=a}delete(){delete r[this.name]}}class s extends e{constructor(a,n,g,d,o,_,f){super(a),this._={all_str:f.reduce((u,w)=>u+w.str,""),now:[{str:"",color:f[0].color,spacing_x:f[0].spacing_x,spacing_y:f[0].spacing_y}],len_allow:0,count:0,current_char:0,current_char_true:0},this.x=n,this.y=g,this.direction=d,this.size=o,this.data=f,this.font=(u=>{switch(u){case"status":return c.status;default:return c.en}})(_),r[a]=this,this.process()}write(){const a=this.size,n=this.direction*Math.PI/180,g=this._.now.reduce((u,w)=>u+w.str.length,0);let d=0,o=0,_=0;const f=u=>u in this.font?this.font[u]:this.font.space;return this._.now.forEach(u=>{u.str.split("").forEach(b=>{const x=f(b);b==`
`?(d=0,o+=this.font.props.height_basic+u.spacing_y):(h.stamp(this.font.props.name+"_"+u.color,this.x+(Math.cos(n)*d-Math.sin(n)*(o+x.gap/2))*a/100,this.y+(Math.sin(n)*d+Math.cos(n)*(o+x.gap/2))*a/100,this.direction,a,1,"start",{left:x.left,top:x.up,width:x.width,height:x.height}),_+1<g&&(d+=x.width+this.font.props.width_basic+u.spacing_x)),_++})}),this}process(){const a=this.data.reduce((n,g)=>n+g.str.length,0);if(this._.len_allow==a&&t.z){delete r[this.name];return}else t.x?(this._.len_allow=a,this._.current_char=a):this._.len_allow<a&&(this._.len_allow+=1/this.data[this._.count].speed,this._.current_char+=1/this.data[this._.count].speed);for(;this._.current_char_true<Math.min(this._.len_allow,a);)for(this._.now[this._.count].str+=this.data[this._.count].str[this._.now[this._.count].str.length],this._.current_char_true++;this.data[this._.count].str.length<=this._.now[this._.count].str.length&&this._.count+1<this.data.length;)this._.count++,this._.now.push({str:"",color:this.data[this._.count].color===void 0?"white":this.data[this._.count].color,spacing_x:this.data[this._.count].spacing_x,spacing_y:this.data[this._.count].spacing_y}),this._.current_char-=this.data[this._.count].str.length}}class i extends e{constructor(a,n,g,d,o,_,f,u,w,b,x){super(a),this.str_now="",this.len_now=0,this.str=n,this.x=g,this.y=d,this.direction=o,this.size=_,this.color=f,this.spacing_x=u,this.spacing_y=w,this.speed=b,this.font=($=>{switch($){case"status":return c.status;default:return c.en}})(x),this.len_allow=0,r[a]=this,this.process()}write(){const a=this.str_now,n=this.size,g=this.direction*Math.PI/180;let d,o;[d,o]=[0,0];const _=f=>f in this.font?this.font[f]:this.font.space;for(let f=0;f<a.length;f++){const u=_(a[f]);a[f]==`
`?(d=0,o+=this.font.props.height_basic+this.spacing_y):(h.stamp(this.font.props.name+"_"+(this.color?this.color:"white"),this.x+(Math.cos(g)*d-Math.sin(g)*(o-u.gap))*n/100,this.y+(Math.sin(g)*d+Math.cos(g)*(o-u.gap))*n/100,this.direction,n,1,"start",{left:u.left,top:u.up,width:u.width,height:u.height}),f+1<a.length&&(d+=u.width+this.font.props.width_basic+this.spacing_x))}return this}process(){if(this.len_allow==this.str.length&&t.z){delete r[this.name];return}else t.x?this.len_allow=this.str.length:this.len_allow<this.str.length&&(this.len_allow+=1/this.speed);for(;this.str_now.length<Math.min(this.len_allow,this.str.length);)this.str_now+=this.str[this.str_now.length]}}return{Super:s,Plane:i,process:()=>{for(const l in r)r[l].process()},dict:r}},Qe=(h,t)=>{class c{constructor(i,p,l,a,n,g,d=4){this.dx=i,this.dy=p,this.dd=l,this.len=a,this.align=n,this.width=d,this.soul_size=6,this.relative=g||(()=>{const o=this.dd,_=t.x-this.dx;return(t.y-this.dy)*m(o)+_*y(o)>0?"plus":"minus"})()}judge(){const i=this.dd,p=t.x-this.dx,l=t.y-this.dy,a=p*m(i)+l*-y(i),n=l*m(i)+p*y(i);if(this.len/2>a&&a>-this.len/2){if(this.relative=="minus"&&n>-(this.width/2+this.soul_size)||this.relative=="plus"&&this.width/2+this.soul_size>n){const g=a*m(-i)+(this.width/2+this.soul_size)*(this.relative=="minus"?1:-1)*y(-i),d=(this.width/2+this.soul_size)*(this.relative=="minus"?1:-1)*-m(-i)+a*y(-i);t.x=g+this.dx,t.y=d+this.dy}}else n>0?this.relative="plus":this.relative="minus"}draw(){h.drawRect(this.dx,this.dy,this.len,this.width,"white",this.dd,"center++")}}class r{constructor(i,p,l,a=4){this.dx=i,this.dy=p,this.dd=l,this.width=a}judge(){const i=this.dd,p=t.x-this.dx,l=t.y-this.dy,a=p*m(i)+l*-y(i);if(l*m(i)+p*y(i)>-this.width){const g=a*m(-i)+this.width*y(-i),d=this.width*-m(-i)+a*y(-i);t.x=g+this.dx,t.y=d+this.dy}}draw(){const i=this.dx+320*y(this.dd),p=this.dy+320*m(this.dd);h.drawRect(i,p,640,640,"#ffffff88",this.dd,"center++")}}const e={center_x:320,center_y:240,dire:0,width:100,height:100,thickness:6,walls:[],draw(){this.walls.forEach(s=>{const i=s.dx+640*y(s.dd),p=s.dy+640*m(s.dd);h.drawRect(i,p,1280,1280,"#ffffff",s.dd,"center++")}),this.walls.forEach(s=>{const i=s.dx+640*y(s.dd),p=s.dy+640*m(s.dd);h.drawRect(i,p,1280-s.width*2,1280-s.width*2,"#000000",s.dd,"center++")})},judge(){this.walls.forEach(s=>{s.judge()})},update(){{const s=this.dire,i=this.center_x,p=this.center_y,l=this.walls[0];l.dd=s,l.dx=i+this.height/2*y(s),l.dy=p+this.height/2*m(s)}{const s=this.dire+90,i=this.center_x,p=this.center_y,l=this.walls[1];l.dd=s,l.dx=i+this.height/2*y(s),l.dy=p+this.height/2*m(s)}{const s=this.dire+180,i=this.center_x,p=this.center_y,l=this.walls[2];l.dd=s,l.dx=i+this.height/2*y(s),l.dy=p+this.height/2*m(s)}{const s=this.dire+270,i=this.center_x,p=this.center_y,l=this.walls[3];l.dd=s,l.dx=i+this.height/2*y(s),l.dy=p+this.height/2*m(s)}},init(){this.walls.push(new r(0,0,0,this.thickness)),this.walls.push(new r(0,0,90,this.thickness)),this.walls.push(new r(0,0,180,this.thickness)),this.walls.push(new r(0,0,270,this.thickness))}};return e.init(),{Wall:c,box:e}},Ye=async()=>{const h=await R(T),t={lv:19,hp:92,hp_max:92,soul:new h.Sprite(320,240,0,80,"soul",!0)},c=W(h.cLib,h.aLib,h.Sprite,t),r=Oe(h.cLib,h.inputKeys);Qe(h.cLib,t.soul),new c.normal(260,180,60,12,200,0,0,0,0,0);const e=ts(h.cLib,r.Plane,t);let s=new r.Plane("test","Hello, world!",60,180,0,400,"white",0,0,5,"en");h.loop(()=>{h.ctx.clearRect(0,0,h.canvas.width,h.canvas.height),h.inputKeys.up&&(t.soul.y+=3.5),h.inputKeys.down&&(t.soul.y-=3.5),h.inputKeys.right&&(t.soul.x+=3.5),h.inputKeys.left&&(t.soul.x-=3.5),c.process(),r.process(),s.write(),e(),t.soul.stamp()})},ts=(h,t,c)=>()=>{const r=new t("_","chara",32,75,0,300,"white",0,0,0,"status");r.write(),r.delete();const e=new t("_","lV",134,75,0,300,"white",0,0,0,"status");e.write(),e.delete();const s=new t("_",`${c.lv}`,173,75,0,300,"white",0,0,0,"status");s.write(),s.delete();const i=new t("_",`${c.hp}`,416,77,0,300,"white",0,0,0,"status");i.write(),i.delete();const p=new t("_","/",455,77,0,300,"white",0,0,0,"status");p.write(),p.delete();const l=new t("_",`${c.hp_max}`,479,77,0,300,"white",0,0,0,"status");l.write(),l.delete(),h.drawRect(256,59,c.hp_max*1.2,21,"red",0,"start"),h.drawRect(256,59,c.hp*1.2,21,"yellow",0,"start")};window.onload=Ye;

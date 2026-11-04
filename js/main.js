const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');
/* abertura: logo entra, segura e sai antes da página */
(function(){const el=document.getElementById('intro');if(!el)return;
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.remove();return}
 document.documentElement.style.overflow='hidden';
 const done=()=>{el.classList.add('out');document.documentElement.style.overflow='';setTimeout(()=>el.remove(),950)};
 const t=setTimeout(done,1900);el.addEventListener('click',()=>{clearTimeout(t);done()},{once:true})})();
document.getElementById('yr').textContent=new Date().getFullYear();

/* Portfólio – carrossel */
const fotos=[
 ["ultra-compacto-branco","Ultra compacto branco","Lavatório suspenso com nicho"],
 ["cozinha-granito-preto","Cozinha em granito preto","Bancada com ilha"],
 ["lavatorio-quartzo-cinza-estelar","Quartzo Cinza Estelar","Lavatório com cuba esculpida"],
 ["cozinha-quartzo-bege","Cozinha em L","Cooktop e cuba embutidos"],
 ["cubo-quartzito-sandallus","Quartzito Sandallus","Peça decorativa"],
 ["lavatorio-marmore-branco","Mármore branco","Lavatório com cuba esculpida"],
 ["cuba-branco-prime","Branco Prime","Cuba dupla esculpida"],
 ["recepcao-curva","Balcão curvo","Recepção de clínica"],
 ["borda-piscina","Borda de piscina","Área externa"],
 ["lavatorio-marmore-marrom","Mármore marrom","Lavatório com saia alta"],
 ["bancada-granito-dupla","Granito cinza","Bancada com duas cubas"],
 ["varanda-quartzo-branco","Bancada branca","Varanda com cuba esculpida"],
 ["cozinha-granito-led","Granito preto","Cozinha planejada"],
 ["cuba-esculpida-oficina","Cuba esculpida","Acabamento na oficina"],
 ["mesa-granito-jantar","Mesa em granito","Sala de jantar"],
 ["bancada-clinica","Bancada escura","Consultório"],
 ["bandeja-quartzito","Bandeja esculpida","Peça em pedra natural"],
 ["p-lavatorio-marmore-gold","Lavatório em mármore","Lavabo com metais dourados"],
 ["p-cozinha-quartzito-bege","Bancada clara","Cuba de embutir"],
 ["p-mesa-ultra-compacto","Mesa com tampo branco","Loja · base dourada"],
 ["p-bancada-porcelanato-calacatta","Bancada suspensa","Banheiro com nicho"],
 ["p-cozinha-granito-cinza","Cozinha em granito","Bancada e cooktop"],
 ["bandeja-marmore","Bandeja em pedra","Mesa posta"],
 ["degrau-granito","Degrau em granito","Escada"]
];
const tr=document.getElementById('carTrack');
tr.innerHTML=fotos.map(f=>`<figure><img src="img/${f[0]}.webp" alt="${f[1]} · ${f[2]}" loading="lazy" width="1080" height="1080"><figcaption><b>${f[1]}</b><span>${f[2]}</span></figcaption></figure>`).join('');
const cnt=document.getElementById('carCount'),prog=document.getElementById('carProg');
const step=()=>tr.querySelector('figure').getBoundingClientRect().width+16;
function upd(){const i=Math.round(tr.scrollLeft/step());const vis=Math.max(1,Math.round(tr.clientWidth/step()));const n=fotos.length;cnt.textContent=String(Math.min(i+1,n)).padStart(2,'0')+' / '+n;prog.style.width=(vis/n*100)+'%';prog.style.left=(Math.min(i,n-vis)/n*100)+'%'}
tr.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});window.addEventListener('resize',upd);upd();
document.getElementById('carPrev').onclick=()=>tr.scrollBy({left:-step()*2,behavior:'smooth'});
document.getElementById('carNext').onclick=()=>{const end=tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-4;tr.scrollTo({left:end?0:tr.scrollLeft+step()*2,behavior:'smooth'})};
let auto=setInterval(()=>{if(!matchMedia('(prefers-reduced-motion:reduce)').matches)document.getElementById('carNext').click()},4500);
['pointerdown','focusin','mouseenter','touchstart'].forEach(ev=>document.getElementById('car').addEventListener(ev,()=>clearInterval(auto),{once:true,passive:true}));

/* Vídeos – carrossel com destaque central */
const vids=[["cozinha-quartzito","Cozinha em pedra de veios marcados"],["bancada-flutuante","Bancada suspensa com nicho"],["obra-clinica","Bancadas e balcão de clínica"],["cuba-esculpida","Cuba esculpida na pedra"],["bandeja-quartzito","Bandeja esculpida à mão"]];
const vc=document.getElementById('vcar'),vd=document.getElementById('vDots');
vc.innerHTML=vids.map((v,i)=>`<button class="vitem" type="button" data-i="${i}" aria-label="Vídeo: ${v[1]}"><video src="video/${v[0]}.mp4" poster="video/${v[0]}.webp" muted loop playsinline preload="metadata"></video><span class="vcap">${v[1]}</span></button>`).join('');
vd.innerHTML=vids.map((v,i)=>`<button type="button" aria-label="Ir para o vídeo ${i+1}"></button>`).join('');
const items=[...vc.children],dots=[...vd.children];let cur=0;
function lay(){const n=items.length,w=items[0].offsetWidth,gap=Math.min(w*.78,window.innerWidth*.34);
 items.forEach((el,i)=>{let o=((i-cur)%n+n)%n;if(o>n/2)o-=n;const a=Math.abs(o);
  el.style.transform=`translateX(${o*gap}px) scale(${a===0?1:a===1?.8:.64})`;el.style.opacity=a>2?0:a===0?1:a===1?.5:.22;el.style.zIndex=10-a;el.style.filter=a?'grayscale(.6) brightness(.7)':'none';
  el.classList.toggle('on',a===0);el.tabIndex=a>1?-1:0;const v=el.querySelector('video');if(a===0&&!reduce){v.play().catch(()=>{})}else{v.pause()}});
 dots.forEach((d,i)=>d.classList.toggle('on',i===cur))}
const go=i=>{cur=(i+items.length)%items.length;lay()};
items.forEach((el,i)=>el.onclick=()=>{if(i!==cur)go(i)});dots.forEach((d,i)=>d.onclick=()=>go(i));
document.getElementById('vPrev').onclick=()=>go(cur-1);document.getElementById('vNext').onclick=()=>go(cur+1);
let sx=null;vc.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});vc.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));sx=null});
items.forEach(el=>el.querySelector('video').addEventListener('ended',()=>{}));
window.addEventListener('resize',lay);lay();

/* Avaliações */
const revs=[
 ["Karinny Lemos","2 meses atrás","Quando comecei a pesquisar mármore/granito pra minha bancada da cozinha, entrei em contato com umas 10 marmorarias aqui de João Pessoa. Mas, desde o primeiro contato, o Jaderson já se destacou só pelo atendimento. Tirou todas as minhas dúvidas sobre as pedras, foi até a obra, levou amostras dos materiais e deu todo o suporte durante o processo. O resultado ficou impecável! Os acabamentos foram muito bem feitos e tudo foi <mark>entregue dentro do prazo combinado</mark>.","#7a5cc7"],
 ["Carlos Ramathis","um mês atrás","Utilizei recentemente os serviços da Emporium e minha escolha aconteceu após pesquisar no Google e ler as avaliações de outros clientes. Depois de realizar alguns orçamentos no mercado local, a Emporium me pareceu <mark>a melhor opção na relação entre preço e qualidade</mark>. E, de fato, me surpreendeu positivamente!","#2f6f8f"],
 ["Thayris Tavila","2 meses atrás","Podem solicitar sem medo, compromisso e comprometimento, trabalha extremamente bem. Eu amo o serviço deles, <mark>já fiz mais de uma vez</mark> e recomendo muito. Olha que trabalho incrível que eles fizeram nesse tampo.","#b5527a"],
 ["Francisca de Fatima V. Ferreira","um ano atrás","A bancada de travertino na minha varanda ficou linda e bem feita, acabamento top, estou satisfeita. <mark>Jaderson é pontual e cumpre com o combinado</mark>. Ele e seus funcionários são competentes e educados. Voltarei a fazer outras bancadas.","#5a63b8"],
 ["Ana Maria Moura Gouveia","2 meses atrás","Rápido, eficiente e <mark>muito limpo</mark>. Excelente serviço, sem estresse, na data e horário combinados. Uma empresa responsável com o cliente. Recomendo demais.","#9a6a3c"],
 ["Axel Tarcisio","3 meses atrás","Empresa muito boa e responsável. Transparente, explicando tudo, todos os serviços de ótima qualidade com excelentes profissionais. <mark>Bancada no ultra compacto</mark>. O rapaz que instalou, Lucélio, muito profissional e detalhista. Recomendo demais.","#1f8a6a"],
 ["Leticia Santos","3 meses atrás","Atendimento excelente, serviço de qualidade e agilidade. O profissional que foi até meu apartamento foi <mark>caprichoso, atencioso, rápido e gentil</mark>. Farei mais serviços com certeza.","#c0573e"],
 ["Solange Cirilo","3 semanas atrás","Encomendei uma banca e fiquei muito satisfeita pelo acabamento e o serviço é muito bom. Recomendo, <mark>é a segunda vez que encomendo</mark>.","#0e8a7d"],
 ["Anderson Valente","5 meses atrás","Serviço perfeito. Dentro do prazo e <mark>equipe para instalação muito organizada</mark>. Complemento de bancada de pia.","#3c5a7a"],
 ["Camila Palmeira","2 meses atrás","Profissionais competentes desde o atendimento até a instalação. <mark>Preço ótimo</mark>. Experientes, executam bom serviço!","#7b3fb0"],
 ["Fabiana Lira","3 meses atrás","Ótimo trabalho e atendimento de excelência! Muito satisfeita desde o primeiro atendimento até a <mark>entrega pontual</mark>.","#5f9a2e"],
 ["Pedro Degah","8 meses atrás","Excelente trabalho realizado. <mark>Do atendimento inicial à execução do serviço!</mark>","#6a4fd1"]
];
document.getElementById('reviews').innerHTML=revs.map(r=>`<article class="rev rv"><header><span class="av" style="background:${r[3]}" aria-hidden="true">${r[0].trim()[0]}</span><div><b>${r[0]}</b><small>${r[1]} · Google</small></div></header><span class="stars" aria-label="5 estrelas">★★★★★</span><p>${r[2]}</p><button class="more" type="button" aria-expanded="false">Ler avaliação completa</button></article>`).join('');
document.querySelectorAll('#reviews .rev').forEach(c=>{const p=c.querySelector('p'),b=c.querySelector('.more');requestAnimationFrame(()=>{if(p.scrollHeight<=p.clientHeight+2){b.replaceWith(Object.assign(document.createElement('span'),{className:'gfoot',textContent:'Avaliação verificada no Google'}))}});b.onclick=()=>{const o=c.classList.toggle('open');b.textContent=o?'Mostrar menos':'Ler avaliação completa';b.setAttribute('aria-expanded',o)}});

/* Horário ao vivo (Fortaleza) */
(function(){const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Fortaleza',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
 const g=t=>p.find(x=>x.type===t).value;const d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday'));const m=(+g('hour')%24)*60+(+g('minute'));
 const sch={0:[],6:[[480,690]]};for(let i=1;i<=5;i++)sch[i]=[[480,720],[780,1020]];
 const open=sch[d].some(([a,b])=>m>=a&&m<b);const row=document.querySelector(`#hours tr[data-d="${d}"]`);if(row)row.classList.add('today');
 const s=document.getElementById('status');s.classList.toggle('closed',!open);
 let msg=open?'Aberto agora':'Fechado agora';
 if(open){const end=sch[d].find(([a,b])=>m>=a&&m<b)[1];msg+=` · até ${String(end/60|0).padStart(2,'0')}:${String(end%60).padStart(2,'0')}`}
 else{const nx=sch[d].find(([a])=>a>m);if(nx)msg+=` · abre às ${String(nx[0]/60|0).padStart(2,'0')}:${String(nx[0]%60).padStart(2,'0')}`}
 s.lastElementChild.textContent=msg})();

/* Copiar telefone */
document.getElementById('copyTel').onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText('(83) 99914-7198');b.textContent='Copiado'}catch(_){const r=document.createRange();r.selectNodeContents(document.getElementById('tel'));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selecionado'}setTimeout(()=>b.textContent='Copiar',2000)};

/* Lightbox do portfólio */
const zs=[...document.querySelectorAll('.pw-media figure,.feat figure,.car-track figure,.duo figure')];let zi=0,lastF=null;
const lb=document.getElementById('lb'),lbI=document.getElementById('lbImg'),lbC=document.getElementById('lbCap');
function show(i){zi=(i+zs.length)%zs.length;const f=zs[zi],im=f.querySelector('img');lbI.src=im.src;lbI.alt=im.alt;lbC.textContent=f.querySelector('figcaption b').textContent}
zs.forEach((f,i)=>{f.classList.add('zoomable');f.tabIndex=0;f.setAttribute('role','button');f.setAttribute('aria-label','Ampliar: '+f.querySelector('figcaption b').textContent);
 const open=()=>{lastF=f;show(i);lb.hidden=false;document.body.style.overflow='hidden';document.getElementById('lbX').focus()};
 f.addEventListener('click',open);f.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
const closeLb=()=>{lb.hidden=true;document.body.style.overflow='';lastF&&lastF.focus()};
document.getElementById('lbX').onclick=closeLb;document.getElementById('lbP').onclick=()=>show(zi-1);document.getElementById('lbN').onclick=()=>show(zi+1);
lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Tab'){const f=[...lb.querySelectorAll('button')];const i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus();return}if(e.key==='Escape')closeLb();if(e.key==='ArrowRight')show(zi+1);if(e.key==='ArrowLeft')show(zi-1)});
let lx=null;lb.addEventListener('touchstart',e=>lx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{if(lx==null)return;const d=e.changedTouches[0].clientX-lx;if(Math.abs(d)>40)show(zi+(d<0?1:-1));lx=null});

/* Revelar ao rolar (parte de um estado visível) */
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
 document.querySelectorAll('.rv').forEach(el=>{const r=el.getBoundingClientRect();if(r.top>innerHeight){el.classList.add('pre');io.observe(el)}});
}
/* Clique nos vídeos solo pausa ou retoma */
document.querySelectorAll('.solo-media video,.pw-media video').forEach(v=>{v.style.cursor='pointer';v.tabIndex=0;
 const lab=()=>v.setAttribute('aria-label',(v.paused?'Reproduzir':'Pausar')+' vídeo: '+(v.dataset.l||(v.dataset.l=v.getAttribute('aria-label')||'vídeo')));
 const tog=()=>{v.paused?v.play():v.pause()};v.addEventListener('play',lab);v.addEventListener('pause',lab);
 v.addEventListener('click',tog);v.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tog()}});
 if(reduce){v.removeAttribute('autoplay');v.pause()}lab()});
/* Pausar vídeos fora da tela */
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){if(reduce)return;if(v.closest('.vitem')&&!v.closest('.vitem.on'))return;v.play().catch(()=>{})}else v.pause()}),{threshold:.2});
document.querySelectorAll('video').forEach(v=>vio.observe(v));

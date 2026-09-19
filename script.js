const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const gallery=[...document.querySelectorAll('.gallery-item')], lightbox=document.getElementById('lightbox'), lbImg=document.getElementById('lightbox-img'); let idx=0;
function show(i){idx=(i+gallery.length)%gallery.length;lbImg.src=gallery[idx].querySelector('img').src;lightbox.classList.add('show')}
gallery.forEach((g,i)=>g.addEventListener('click',()=>show(i)));
document.querySelector('.close').onclick=()=>lightbox.classList.remove('show'); document.querySelector('.prev').onclick=()=>show(idx-1); document.querySelector('.next').onclick=()=>show(idx+1);
document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('show'))return;if(e.key==='Escape')lightbox.classList.remove('show');if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
const sections=[...document.querySelectorAll('main section[id]')], links=[...document.querySelectorAll('nav a')]; window.addEventListener('scroll',()=>{let current='beranda';sections.forEach(s=>{if(scrollY>=s.offsetTop-120)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});

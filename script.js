const menuButton=document.querySelector('.menu-btn');
const menu=document.querySelector('#menu');
menuButton?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#menu a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox');const lightboxImg=lightbox?.querySelector('img');
function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(lightboxImg)lightboxImg.src='';}
document.querySelectorAll('.project-item').forEach(item=>{const open=()=>{if(!lightbox||!lightboxImg)return;lightboxImg.src=item.dataset.full||'';lightboxImg.alt=item.querySelector('img')?.alt||'Project image';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');};item.addEventListener('click',open);item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

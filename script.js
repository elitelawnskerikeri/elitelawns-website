const b=document.querySelector('.menu-btn'),n=document.querySelector('#menu');b?.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.getElementById('lightbox');
const lightboxImg=lightbox?.querySelector('img');
const closeLightbox=()=>{if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(lightboxImg)lightboxImg.src='';};
document.querySelectorAll('.project-item').forEach(item=>{
  const open=()=>{if(!lightbox||!lightboxImg)return;lightboxImg.src=item.dataset.full;lightboxImg.alt=item.querySelector('img')?.alt||'Project image';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');};
  item.addEventListener('click',open);
  item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

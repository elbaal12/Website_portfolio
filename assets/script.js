
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu-btn'); const links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>{const opened=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));});}
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
 const f=btn.dataset.filter; document.querySelectorAll('.work-card').forEach(card=>{card.style.display=(f==='all'||(card.dataset.tags||'').split(' ').includes(f))?'flex':'none';});
}));

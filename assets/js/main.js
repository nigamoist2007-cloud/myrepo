
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  if(btn && nav){ btn.addEventListener('click', ()=> nav.classList.toggle('open')); }
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const page=(a.getAttribute('href')||'').split('/').pop(); if(page===path){a.setAttribute('aria-current','page');}
  });
})();


const WA='918381996879';
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal,.collection,.product-card').forEach((el,i)=>{el.style.transitionDelay=(i%10)*45+'ms';observer.observe(el)});
window.addEventListener('scroll',()=>{const y=window.scrollY;document.documentElement.style.setProperty('--scroll',y);});

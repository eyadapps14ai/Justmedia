document.documentElement.classList.add('js');
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.hidden=false;
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
const motion=document.querySelector('#motion'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=false;
function syncMotion(){motion.hidden=reduced.matches;document.body.classList.toggle('paused',paused||reduced.matches);motion.setAttribute('aria-pressed',String(paused));motion.querySelector('.motion-label').textContent=paused?'Resume motion':'Pause motion';motion.querySelector('.motion-icon').textContent=paused?'▷':'Ⅱ'}
motion.addEventListener('click',()=>{paused=!paused;syncMotion()});reduced.addEventListener('change',syncMotion);syncMotion();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){if(!reduced.matches)entry.target.classList.add('revealing');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.intro-grid,.section-heading,.service,.editorial,.contact-copy').forEach(el=>observer.observe(el))}
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service}));
document.querySelector('#brief').addEventListener('submit',event=>{event.preventDefault();const idea=document.querySelector('#idea');if(!idea.value.trim()){idea.setCustomValidity('Please add a little about your idea.');idea.reportValidity();return}const text=`JUST MEDIA — PROJECT BRIEF\n\nService: ${document.querySelector('#service').value}\n\nThe idea:\n${idea.value.trim()}\n\nSaved locally from the Just Media homepage preview. This brief has not been sent.\n`;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='just-media-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#brief-status').textContent='Your brief is ready to download. Nothing has been sent.'});
document.querySelector('#idea').addEventListener('input',e=>e.target.setCustomValidity(''));document.querySelector('#year').textContent=new Date().getFullYear();

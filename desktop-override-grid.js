(function(){
const host=document.querySelector('.desktop-override-grid');
if(!host||window.matchMedia('(max-width:560px)').matches)return;
fetch('override-grid.html').then(r=>r.text()).then(source=>{const frame=document.createElement('iframe');frame.setAttribute('title','Override Grid background');frame.srcdoc=source.replace('const blockSize = 48;','const blockSize = 48;').replace('const blockGap = 2;','const blockGap = 2;').replace('time += 0.04;','time += 0.04;');host.appendChild(frame);}).catch(()=>{});
})();

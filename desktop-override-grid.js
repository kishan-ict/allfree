(function(){
const host=document.querySelector('.desktop-override-grid');
if(!host||window.matchMedia('(max-width:560px)').matches)return;
fetch('topo-field.html').then(r=>r.text()).then(source=>{const frame=document.createElement('iframe');frame.setAttribute('title','Topo Field background');frame.srcdoc=source;host.appendChild(frame);}).catch(()=>{});
})();

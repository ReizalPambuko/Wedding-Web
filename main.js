const nav = document.querySelector('.navbar');

window.addEventListener('scroll',function(){
 nav.classList.toggle('active',window.scrollY > 0);
});

const item = document.querySelector('.gallery-item');
const jumbo = document.querySelector('.img-jumbo');


item.addEventListener('click',function(x){
 if(x.target.className == 'img-small'){
  jumbo.src = x.target.src;
 };
});

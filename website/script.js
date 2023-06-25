const triggerOpen= document.querySelectorAll('[trigger-button]');
const triggerClose= document.querySelectorAll('[close-button]');
const triggerOverlay= document.querySelector('[data-overlay]');

for(let i=0; i<triggerOpen.length; i++){
 let currentId=triggerOpen[i].Dataset .target,
 targetEl=document.querySelector('#${currentId}')

 const openData=function() {
    targetEl.classList.remove('active');
    Overlay.classList.remove('active');
 };
 triggerOpen[i].addEventListener('click', function(){
    targetEl.classList.add('active');
    Overlay.classList.add('active');
 });
 targetEl.querySelector('[close-button]').addEventListener('click'.openData)
 Overlay.addEventListener('click',openData);
}



const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click', function(e){
e.preventDefault();
submenu.forEach((item) => item!= this ? item.closest('.has-child').classList.remove('active') : null);
if(this.closest('.has-child').classList != 'active') {
    this.closest('.has-child').classList.toggle('active')
}
}))

//slider

const swiper = new Swiper('.sliderbox', {



   loop: true,
   effect: 'Fade',
   autoHeight: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
 
 });
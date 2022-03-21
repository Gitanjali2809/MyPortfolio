$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsclass:'dots'
});

let hamberger = dovument.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');


hamberger.addEvenListener('click',function(){
  mobileNav.classList.add('open');
});

times.addEvenListener('click',function(){
    mobileNav.classList.remove('open');
});

});;
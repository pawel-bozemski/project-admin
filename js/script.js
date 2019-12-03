// add class active to mobile wrapper after clicking on hamburger icon

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.navigation__wrapper-mobile');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
});

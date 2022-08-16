const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);


//Function Show desktopMenu 
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); 
}
//Function Show mobile Menu
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}



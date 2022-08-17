const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleProductDetail);


//Function Show desktopMenu 
function toggleDesktopMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive')

    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive'); 
}
//Function Show mobile Menu
function toggleMobileMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive')

    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive'); 
}

//Function Show Product Detail 
function toggleProductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    
    productDetail.classList.toggle('inactive');
}

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


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


//LIST OF PRODUCTS

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Penny',
    price: 60,
    image: 'https://i.pinimg.com/originals/65/95/62/659562e76ba6a3e492ad7ca5f81bc9e5.jpg'
})

productList.push({
    name: 'motorcycle',
    price: 2000,
    image: 'https://24atv.net/image/cache/catalog/stories/product/tekhnika/bajaj/pulsar-ns-200/bajaj-pulsar-ns-200_red-1500x1000.jpg'
})

//FUNCTION FOR RENDER PRODUCTS
function renderProducts(arr){
    for (product of arr){
        //VARS LINE FOR LINE HTML
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const div = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figure = document.createElement('figure');
        
        const productImgAdd = document.createElement('img');
        productDetail.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Maketando HTML
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
            productInfo.appendChild(div);
                div.appendChild(productPrice);
                div.appendChild(productName);
                figure.appendChild(productImgAdd);
    
        //Print in HTML
        cardsContainer.appendChild(productCard)
    }    
}

renderProducts(productList);



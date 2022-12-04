// navigation menu animation
var header = document.querySelector("header");
var car = document.querySelectorAll(".car");

car.forEach(item =>
    item.addEventListener('mouseover', function () {
        item.classList.add('dropdown-active');
        header.classList.add('grey-header');
    })
);

car.forEach(item =>
    item.addEventListener('mouseleave', function () {
        item.classList.remove('dropdown-active');
        header.classList.remove('grey-header');
    })
);

// homepage slider
var swiper = new Swiper(".homepage-swiper", {
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// configurate slider
var swiper = new Swiper(".configurate-swiper", {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// configurate car data based on values
const carImages = {
    "white": [
        ["images/configurate/porsche_white.jpeg", "Porsche Cayenne White"],
        ["images/configurate/porsche_white_back.jpeg", "Porsche Cayenne White Back"],
        ["images/configurate/porsche_white_side.jpeg", "Porsche Cayenne White Side"],
        ["images/configurate/porsche_white_above.jpeg", "Porsche Cayenne White Above"],
    ],
    "black": [
        ["images/configurate/porsche_black.jpeg", "Porsche Cayenne Black"],
        ["images/configurate/porsche_black_back.jpeg", "Porsche Cayenne Black Back"],
        ["images/configurate/porsche_black_side.jpeg", "Porsche Cayenne Black Side"],
        ["images/configurate/porsche_black_above.jpeg", "Porsche Cayenne Black Above"],
    ],
    "moonlightblue": [
        ["images/configurate/porsche_moonlightblue.jpeg", "Porsche Cayenne Moonlightblue"],
        ["images/configurate/porsche_moonlightblue_back.jpeg", "Porsche Cayenne Moonlightblue Back"],
        ["images/configurate/porsche_moonlightblue_side.jpeg", "Porsche Cayenne Moonlightblue Side"],
        ["images/configurate/porsche_moonlightblue_above.jpeg", "Porsche Cayenne Moonlightblue Above"],
    ],
    "red": [
        ["images/configurate/porsche_red.jpeg", "Porsche Cayenne Red"],
        ["images/configurate/porsche_red_back.jpeg", "Porsche Cayenne Red Back"],
        ["images/configurate/porsche_red_side.jpeg", "Porsche Cayenne Red Side"],
        ["images/configurate/porsche_red_above.jpeg", "Porsche Cayenne Red Above"],
    ],
    "interior-black": [
        ["images/configurate/porsche_interior_black.jpeg", "Porsche Cayenne Interior Black"]
    ],
    "interior-red-black": [
        ["images/configurate/porsche_interior_red.jpeg", "Porsche Cayenne Interior Red"]
    ],
    "interior-blue-gray": [
        ["images/configurate/porsche_interior_gray.jpeg", "Porsche Cayenne Interior Gray Front"]
    ]
};

// getting colors items and images
var color_item = document.querySelectorAll("ul.colors-list li button");
var interior_colors_item = document.querySelectorAll("ul.interior-colors-list li button");
// Interior images items
var front = document.querySelector("section.configurate-swiper li:nth-of-type(2) img");
var front2 = document.querySelector("section.configurate-swiper li:last-of-type img");
var back = document.querySelector(".swiper-slide img.back-car");
var side = document.querySelector(".swiper-slide img.side-car");
var above = document.querySelector(".swiper-slide img.above-car");
// Exterior images items
var interior = document.querySelector("section.configurate-swiper li:first-of-type img");
var interior2 = document.querySelector("section.configurate-swiper li:nth-of-type(6) img");
// var interior2 = document.querySelector("li.swiper-slide:nth-of-type img");


// loader
// const btn = document.querySelector(".button");

// btn.classList.add("button--loading");
// btn.classList.remove("button--loading");
// loop for all colors
color_item.forEach(item =>
    item.addEventListener('click', function () {
        // this changes the image source and the alt text of the image based on the value
        // front-side car
        front.src = carImages[item.value][0][0];
        front.alt = carImages[item.value][0][1];
        front2.src = carImages[item.value][0][0];
        front2.alt = carImages[item.value][0][1];
        // back-side
        back.src = carImages[item.value][1][0];
        back.alt = carImages[item.value][1][1];
        // side car
        side.src = carImages[item.value][2][0];
        side.alt = carImages[item.value][2][1];
        // above car
        above.src = carImages[item.value][3][0];
        above.alt = carImages[item.value][3][1];
        // loader
        setTimeout(() => {
            item.classList.add("loader");
        }, 100);
        setTimeout(() => {
            item.classList.remove("loader");
        }, 500);
        
        var btn_active = document.querySelector("ul.colors-list li button.active");
        if (btn_active) btn_active.classList.remove("active");
        item.classList.add("active");
    })
);

interior_colors_item.forEach(item =>
    item.addEventListener('click', function () {
        // interior car
        interior.src = carImages[item.value][0][0];
        interior.alt = carImages[item.value][0][1];
        interior2.src = carImages[item.value][0][0];
        interior2.alt = carImages[item.value][0][1];
        // loader
        setTimeout(() => {
            item.classList.add("loader");
        }, 100);
        setTimeout(() => {
            item.classList.remove("loader");
        }, 500);
        var btn_active = document.querySelector("ul.interior-colors-list li button.active");
        if (btn_active) btn_active.classList.remove("active");
        item.classList.add("active");
    })
);



/**************************************************************/
/* intersection observer --> fades elements in when scrolling */
/**************************************************************/

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

    const sections = Array.from(document.querySelectorAll('section'));

    for (let section of sections) {
        observer.observe(section);
    }

});

// menu mobile
var menu_btn = document.querySelector(".mobile-menu-btn");
var close_menu_btn = document.querySelector(".mobile-menu-close-btn");
var menu_list = document.querySelector("header nav");
var header = document.querySelector("header");

menu_btn.addEventListener("click", open_menu)
close_menu_btn.addEventListener("click", close_menu);

function open_menu(){
    menu_list.classList.add("mobile-menu");
    header.classList.add("full-height-header");
}
function close_menu(){
    menu_list.classList.remove("mobile-menu");
    header.classList.remove("full-height-header");
}
console.log(menu_list);
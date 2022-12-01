// navigation menu animation
var car = document.querySelectorAll(".car");

car.forEach(item =>
    item.addEventListener('mouseover', event =>
        item.classList.add('dropdown-active')
        // document.querySelector(".car nav ul li").focus()
    )
);
car.forEach(item =>
    item.addEventListener('mouseleave', event =>
        item.classList.remove('dropdown-active')
    )
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
};

// getting colors items and images
var color_item = document.querySelectorAll("ul.colors-list li button");
var front = document.querySelector(".swiper-slide img.front-car");
var back = document.querySelector(".swiper-slide img.back-car");
var side = document.querySelector(".swiper-slide img.side-car");
var above = document.querySelector(".swiper-slide img.above-car");

// loop for all colors
color_item.forEach(item =>
    item.addEventListener('click', function () {
        // this changes the image source and the alt text of the image based on the value
        // front-side car
        front.src = carImages[item.value][0][0];
        front.alt = carImages[item.value][0][1];
        // back-side
        back.src = carImages[item.value][1][0];
        back.alt = carImages[item.value][1][1];
        // side car
        side.src = carImages[item.value][2][0];
        side.alt = carImages[item.value][2][1];
        // above car
        above.src = carImages[item.value][3][0];
        above.alt = carImages[item.value][3][1];
    })
);
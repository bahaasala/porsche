// navigation menu animation
var car = document.querySelectorAll(".car");

car.forEach(item =>
    item.addEventListener('mouseover', event =>
        item.classList.add('dropdown-active'),
        document.querySelector(".car nav ul li").focus()
    )
    // focus();
);
car.forEach(item =>
    item.addEventListener('mouseleave', event =>
        item.classList.remove('dropdown-active'),
    )
);

// // testing focus function
// var test = document.querySelector(".test");

// test.addEventListener("click", focus);

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

// configurate car
const carImages = {
    "white": [
        "images/configurate/porsche_white.jpeg",
        "images/configurate/porsche_white_back.jpeg",
        "images/configurate/porsche_white_side.jpeg",
        "images/configurate/porsche_white_above.jpeg",
    ],
    "2": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/30/668/toyota-rush-31398.jpg", // toyota rush
    "3": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/25/2888/nissan-terra-2021-50929.jpg", // nissan terra
    "4": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/24/1643/mitsubishi-montero-sport-67797.jpg", // mitsubishi
    "5": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/17/2677/kia-stonic-97542.jpg", // kia stonic
    "6": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/7/1886/ford-mustang-45686.jpg", // ford mustang
    "7": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/25/572/nissan-gt-r-69452.jpg", // nissan gt-r
    "8": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/51/2018/lamborghini-aventador-70102.jpg", // lamborghini aventador
    "9": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/30/1851/toyota-wigo-51298.jpg", // toyota wigo
    "10": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/11/2012/honda-brio-2019-30836.jpg" // honda brio
};

// var students = {
//     "ID": ["01", "02", "03", "04"],
//     "name": ["Patrick", "William", "Elizabeth", "John"],
//     "age": [18, 19, 19, 20],
//     "major": ["Biology", "CS", "Literature", "Mathematics"]
// }

var color_item = document.querySelectorAll("ul.colors-list li button");
var image_item = document.querySelector(".swiper-slide img.front");

color_item.forEach(item =>
    item.addEventListener('click', function () {
        console.log(item.value);
        console.log(carImages[item.value][1]);
        image_item.src = carImages[item.value][1];
    })
);

// image.src = carImages[document.getElementById("carSelector").value];


// image_item.forEach(item2 =>
//     // item.src = carImages[color_item.value]
//     console.log(item2)
// )

// var image = document.getElementById("carImage");
// image.src = carImages[document.getElementById("carSelector").value];

// color_item.forEach()(
//     // console.log()
// );
// console.log(color_item);

// color_item.addEventListener("click", change_car);

// function change_car(){

// }

// let colors = [
//     'red',
//     'blue',
//     'purple',
//     'amber',
// ];




//   var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
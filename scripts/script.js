// JavaScript Document
console.log("hi");


// var _nav = $(".menu-wrapper");
// var _nav_offset = _nav.offset();
// var _nav_height = _nav.outerHeight();
// var wST = $(window).scrollTop();

// $('#menu-dropdown').css({
//     'top': _nav_offset.top - wST + _nav_height
// })

var $ = jQuery;

var menuitem = document.querySelector(".car");
// menuitem.addEventListener('mouseover', showmenu)
console.log(menuitem);


// menuitem.addEventListener('mouseleave', hidemenu)


// for (let i = 0; i < 5; i++) {
//     console.log('test');
// }
var cars = document.querySelectorAll(".car");

for (var i = 0; i < cars.length; i++) {
    cars[i].addEventListener("mouseover", function () {
        $('#menu-dropdown').stop().slideDown();
    });
    cars[i].addEventListener("mouseleave", function () {
        $('#menu-dropdown').slideUp();
    });
}


// function showmenu() {
//     // console.log("over");
//     $('#menu-dropdown').stop().slideDown();
// }

// function hidemenu() {
//     $('#menu-dropdown').slideUp();
// }

// jQuery(document).ready(function () {
//     // if(){
//     //     console.log(test);
//     // };


//     $(".menu-wrapper li.test").mouseenter(function () {
//         $('#menu-dropdown').stop().slideDown();
//     });

//     $(".menu-wrapper li.test, #menu-dropdown").mouseleave(function () {
//         if (!$('#menu-dropdown').is(':hover')) {
//             $('#menu-dropdown').slideUp();
//         };
//     });

// });
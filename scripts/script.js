// JavaScript Document
console.log("hi");

var $ = jQuery;
var _nav = $(".menu-wrapper");
var _nav_offset = _nav.offset();
var _nav_height = _nav.outerHeight();
var wST = $(window).scrollTop();

// $('#menu-dropdown').css({
//     'top': _nav_offset.top - wST + _nav_height
// })

var menuitem = document.querySelector(".menuitem");
menuitem.addEventListener('mouseover', showmenu)
console.log(menuitem);

menuitem.addEventListener('mouseleave', hidemenu)

function showmenu() {
    console.log("over");
    $('#menu-dropdown').stop().slideDown();
}

function hidemenu() {
    $('#menu-dropdown').slideUp();
}

// if(test){
//     console.log("kkr");
// };


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
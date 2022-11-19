// navigation menu animation
var car = document.querySelectorAll(".car");

car.forEach(item =>
    item.addEventListener('mouseover', event =>
        item.classList.add('dropdown-active'))
);
car.forEach(item =>
    item.addEventListener('mouseleave', event =>
        item.classList.remove('dropdown-active'))
);
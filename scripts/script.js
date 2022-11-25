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

// testing focus function
var test = document.querySelector(".test");

test.addEventListener("click", focus);

function focus(){
    console.log('test');
    test.focus();
}
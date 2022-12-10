document.getElementById("main__action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
var buttons = document.getElementsByClassName("car__button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}
document.getElementById("price__action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль");
    } else {
        alert("Спасибо за заявку, Мы свяжемся с вами в ближайшее время!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 9) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});

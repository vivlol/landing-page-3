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
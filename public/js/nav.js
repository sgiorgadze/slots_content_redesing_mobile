document.querySelector(".app_menu").addEventListener("click", showNav);

function showNav() {
    document.querySelector('.mobile_content').classList.add("shadow");
    document.querySelector(".nav").style.display = "flex";
}

document.querySelector(".nav_close").addEventListener("click", closeNav);

function closeNav() {
    document.querySelector(".nav").style.display = "none";
    document.querySelector('.mobile_content').classList.remove("shadow");
}

var acc = document.getElementsByClassName("arrow_icon");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.parentNode.parentNode.classList.toggle("active");

    });
}


document.querySelector(".user_auth_block").addEventListener("click", openAuthForm);
function openAuthForm() {
    document.querySelector('.mobile_content').classList.add("shadow");
    document.querySelector(".authorization_form_block").style.display = "flex"
}

document.querySelector(".auth_form_close").addEventListener("click", closeAuthForm);
function closeAuthForm() {
    document.querySelector('.mobile_content').classList.remove("shadow");
    document.querySelector(".authorization_form_block").style.display = "none"
}


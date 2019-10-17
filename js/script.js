window.onscroll = function () { myFunction() };

var navbar = document.querySelector(".navigation");
var sticky = navbar.offsetTop + 100;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
function openNav() {
    document.getElementById("mySidenav").style.height = "100vh";
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}
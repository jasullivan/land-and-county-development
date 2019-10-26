// sticky nav
window.onscroll = function () { stickyNav() };

var navbar = document.querySelector(".navigation");
var sticky = navbar.offsetTop + 100;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// sticky nav ends

// function openNav() {
//     document.getElementById("mySidenav").style.height = "100vh";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.height = "0";
// }

// mob nav button
const button = document.querySelector('.logo-box__menu-button');
const menu = document.querySelector('.navigation');
button.addEventListener('click', e => {
    menu.classList.toggle('show-menu');
})
// mob nav button ends

// on resize hide mob nav
document.addEventListener("DOMContentLoaded", function(e) {
    function resize() {
        if (window.innerWidth > 1200) {
        menu.classList.remove('show-menu');
        }
    }
  window.onresize = resize;
});
// on resize hide mob nav ends

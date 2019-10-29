// sticky nav and mob menu
window.onscroll = function () { stickyNav() };

const navbar = document.querySelector(".navigation");
const logo = document.querySelector(".logo-box"); 
const sticky = navbar.offsetTop + 100;
const button = document.querySelector(".menu-button");

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        logo.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("sticky");
    }
}

button.addEventListener('click', e => {
    console.log(this)
    e.target.classList.toggle("menu-button__hamburger--open");
    navbar.classList.toggle("show-menu");
})

document.addEventListener("DOMContentLoaded", function(e) {
    if (window.innerWidth > 1200) {
      navbar.classList.remove("show-menu");
      navbar.classList.remove("navigation__offsite-container");
    } else {
      navbar.classList.add("navigation__offsite-container");
    }
    function resize() {
        if (window.innerWidth > 1200) {
            navbar.classList.remove("show-menu");
            navbar.classList.remove("navigation__offsite-container");
        } else {
            navbar.classList.add("navigation__offsite-container");
        }
    }
    window.onresize = resize;
});
// sticky nav and mob menu ends


// function openNav() {
//     document.getElementById("mySidenav").style.height = "100vh";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.height = "0";
// }






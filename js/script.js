// sticky nav and mob menu
window.onscroll = function () { stickyNav() };

const navbar = document.querySelector(".navigation");
const logo = document.querySelector(".logo-box"); 
const sticky = navbar.offsetTop + 100;
const button = document.querySelector(".menu-button");
const wrap = document.querySelector(".wrap");
const body = document.querySelector('body');

function stickyNav() {
    if (window.pageYOffset > 0 && window.pageYOffset < 300) {
        wrap.classList.add("pre-sticky"); 
    }
    else if (window.pageYOffset >= 300) {
        // wrap.classList.remove("pre-sticky");
        wrap.classList.add("sticky");
    } else {
        wrap.classList.remove("sticky");
        wrap.classList.remove("pre-sticky");
    }
}

button.addEventListener('click', e => {
    // console.log(this)
    e.target.classList.toggle("menu-button__hamburger--open");
    navbar.classList.toggle("show-menu");
    body.classList.toggle('is-open');
})

document.addEventListener("DOMContentLoaded", function(e) {
    if (window.innerWidth > 900) {
        navbar.classList.remove("show-menu");
        button.classList.remove('menu-button__hamburger--open');
        navbar.classList.remove("navigation__offsite-container");
    } else {
      navbar.classList.add("navigation__offsite-container");
      $('body').css({'overflow':'hidden'});
    }
    function resize() {
        if (window.innerWidth > 900) {
            navbar.classList.remove("show-menu");
            button.classList.remove('menu-button__hamburger--open');
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







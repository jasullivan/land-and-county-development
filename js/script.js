// sticky nav and mob menu
window.onscroll = function () { stickyNav() };

const navBar = document.querySelector(".navigation");
const logo = document.querySelector(".nav-icons__logo"); 
// const sticky = navBar.offsetTop + 100;
const navScrollMarker = document.getElementById('navScrollMarker');
var sticky = navScrollMarker.offsetTop - 150;
const navMenu = document.querySelector(".nav-icons__menu");
const navWrap = document.querySelector(".nav-wrap");
const body = document.querySelector('body');

function stickyNav() {
    if (window.pageYOffset > 100 && window.pageYOffset < sticky) {
        navWrap.classList.add("pre-sticky"); 
        navWrap.classList.remove("sticky");
    }
    else if (window.pageYOffset >= sticky) {
        // navWrap.classList.remove("pre-sticky");
        navWrap.classList.add("sticky");
    } else {
        navWrap.classList.remove("sticky");
        navWrap.classList.remove("pre-sticky");
    }
}

navMenu.addEventListener('click', function() {
    this.classList.toggle("nav-icons__menu--open");
    navBar.classList.toggle("show-menu");
    body.classList.toggle('is-open');
})

document.addEventListener("DOMContentLoaded", function(e) {
    if (window.innerWidth > 900) {
        navBar.classList.remove("show-menu");
        navMenu.classList.remove('nav-icons__menu--open');
        navBar.classList.remove("navigation__offsite-container");
        body.classList.remove('is-open');
    } else {
      navBar.classList.add("navigation__offsite-container");
      $('body').css({'overflow':'hidden'});
    }
    function resize() {
        if (window.innerWidth > 900) {
            navBar.classList.remove("show-menu");
            navMenu.classList.remove('nav-icons__menu--open');
            navBar.classList.remove("navigation__offsite-container");
            body.classList.remove('is-open');
        } else {
            navBar.classList.add("navigation__offsite-container");
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







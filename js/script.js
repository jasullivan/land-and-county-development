// sticky nav and mob menu
window.onscroll = function () { stickyNav() };

const navBar = document.querySelector(".navigation");
const navScrollMarker = document.getElementById('navScrollMarker');
const sticky = navScrollMarker.offsetTop - 150;
const navMenu = document.querySelector(".nav-icons__menu");
const navWrap = document.querySelector(".nav-wrap");
const body = document.querySelector('body');

function stickyNav() {
    if (window.pageYOffset > 100 && window.pageYOffset < sticky) {
        navWrap.classList.add("pre-sticky"); 
        navWrap.classList.remove("sticky");
    }
    else if (window.pageYOffset >= sticky) {
        navWrap.classList.add("sticky");
    } else {
        navWrap.classList.remove("sticky");
        navWrap.classList.remove("pre-sticky");
    }
}

// menu icon
navMenu.addEventListener('click', function() {
    this.classList.toggle("nav-icons__menu--open");
    navBar.classList.toggle("show-menu");
    body.classList.toggle('is-open');
})

// remove mob nav if window size larger than 900
document.addEventListener("DOMContentLoaded", function(e) {
    if (window.innerWidth > 900) {
        navBar.classList.remove("show-menu");
        navMenu.classList.remove('nav-icons__menu--open');
        navBar.classList.remove("navigation__offsite-container");
        body.classList.remove('is-open');
    } else {
      navBar.classList.add("navigation__offsite-container");
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

// arrow link from home page 
// const propertyArrowLinks = document.querySelectorAll('.property-link');
// for (let i = 0; i < propertyArrowLinks.length; i++) {
//     propertyArrowLinks[i].addEventListener("click", function (e) {
//         console.log(this);
//         this.classList.add('moveRight')
//     });
// }
// arrow link from home page ends








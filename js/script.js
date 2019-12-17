// sticky nav and mob menu
window.onscroll = function () { stickyNav() };

const navBar = document.querySelector(".navigation");
const logo = document.querySelector(".nav-icons__logo"); 
// const sticky = navBar.offsetTop + 100;
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

// portfolio accordion
// var acc = document.getElementsByClassName("portfolio__link");
// var i;
// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }


// function myFunction(imgs) {
//     var expandImg = document.getElementById("expandedImg");
    // var imgText = document.getElementById("imgtext");
    // imgText.innerHTML = imgs.alt;
//     expandImg.parentElement.style.display = "block";
//     console.log(imgs);
//     if(imgs.classList.contains('portfolio__one')) {
//         expandImg.src = "imgs/portfolio_harwood1a.jpg";
//     } else if (imgs.classList.contains('portfolio__two')) {
//         expandImg.src = "imgs/portfolio_clavering1a.jpg";
//     } else {
//         expandImg.src = "imgs/portfolio_hilltop1a.jpg";
//     }
// }


// hover pics in portfolio
// var hoverPics = document.getElementsByClassName("portfolio__link");
// for (var i = 0; i < hoverPics.length; i++) {
//     hoverPics[i].addEventListener("mouseover", function (e) {
//         var expandImg = document.getElementById("expandedImg");
        // var imgText = document.getElementById("imgtext");
        // imgText.innerHTML = imgs.alt;
        // expandImg.parentElement.style.display = "block";
        // expandImg.parentElement.style.opacity = "1";
        // expandImg.src = "imgs/portfolio_harwood1a.jpg";
//         console.log(expandImg);
//         if (this.classList.contains('portfolio__one')) {
//             expandImg.src = "imgs/portfolio_harwood1a.jpg";
//         } else if (this.classList.contains('portfolio__two')) {
//             expandImg.src = "imgs/portfolio_clavering1a.jpg";
//         } else {
//             expandImg.src = "imgs/portfolio_hilltop1a.jpg";
//         }
//     })
// }
// hover pics in portfolio

// arrow link from home page 
let propertyArrowLinks = document.querySelectorAll('.property-link');
for (let i = 0; i < propertyArrowLinks.length; i++) {
    propertyArrowLinks[i].addEventListener("click", function (e) {
        console.log(this);
        this.classList.add('moveRight')
    });
}








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


var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
//     console.log(n)
// }
let prevNextButtons = document.getElementsByClassName("prev-next");
for (var i = 0; i < prevNextButtons.length; i++) {
    prevNextButtons[i].addEventListener("click", function (e) {
        if (this.classList.contains('prev')) {
            console.log(this)
            showSlides(slideIndex += -1);
        }
        else {
            console.log(this)
            showSlides(slideIndex += 1);
        }
    })
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    const imgs = document.getElementsByClassName("portfolio__link");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].className += " active";

    if ((dots[0]).classList.contains('active')) {
        imgs[0].classList.add("moveRight")
        imgs[1].classList.remove("moveRight")
        imgs[2].classList.remove("moveRight")
    } else if ((dots[1]).classList.contains('active')) {
        imgs[1].classList.add("moveRight")
        imgs[0].classList.remove("moveRight")
        imgs[2].classList.remove("moveRight")
    } else {
        imgs[2].classList.add("moveRight")
        imgs[0].classList.remove("moveRight")
        imgs[1].classList.remove("moveRight")
    }
    // if ((dots[0]).classList.contains('active')) {
    //     imgs[0].style.color = "red"
    //     imgs[1].style.color = "black"
    //     imgs[2].style.color = "black"
    // } else if ((dots[1]).classList.contains('active')) {
    //     imgs[1].style.color = "red"
    //     imgs[0].style.color = "black"
    //     imgs[2].style.color = "black"
    // } else {
    //     imgs[2].style.color = "red"
    //     imgs[0].style.color = "black"
    //     imgs[1].style.color = "black"
    // }
}







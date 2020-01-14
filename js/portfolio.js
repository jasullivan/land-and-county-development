// prevNext functionality
var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
//     console.log(n)
// }
let prevNextButtons = document.getElementsByClassName("prevnext-buttons");
for (var i = 0; i < prevNextButtons.length; i++) {
    prevNextButtons[i].addEventListener("click", function (e) {
        if (this.classList.contains('prevnext-buttons__prev')) {
            showSlides(slideIndex += -1);
        }
        else {
            showSlides(slideIndex += 1);
        }
    })
}
// prevNext functionality

// dot functionality
let dots = document.getElementsByClassName("slideshow__dot");
for (var y = 0; y < dots.length; y++) {
    dots[y].addEventListener("click", function (e) {
        console.log('clicked')
        if (this.classList.contains('dotOne')) {
            showSlides(slideIndex = 1);
        }
        else if (this.classList.contains('dotTwo')) {
            showSlides(slideIndex = 2);
        } else {
            showSlides(slideIndex = 3);
        }
    })
}
// dot functionality

// slide functionality
function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("slideshow__dot");
    const imgs = document.getElementsByClassName("slideshow-link");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].className += " active";

    if ((dots[0]).classList.contains('active')) {
        imgs[0].classList.add("slideshow-link--moveRight")
        imgs[1].classList.remove("slideshow-link--moveRight")
        imgs[2].classList.remove("slideshow-link--moveRight")
    } else if ((dots[1]).classList.contains('active')) {
        imgs[1].classList.add("slideshow-link--moveRight")
        imgs[0].classList.remove("slideshow-link--moveRight")
        imgs[2].classList.remove("slideshow-link--moveRight")
    } else {
        imgs[2].classList.add("slideshow-link--moveRight")
        imgs[0].classList.remove("slideshow-link--moveRight")
        imgs[1].classList.remove("slideshow-link--moveRight")
    }
}
// slide functionality



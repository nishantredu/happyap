// Menu show
const showMenu = (toggleId, navID)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navID);

    if(toggle && nav){
        toggle.addEventListener('click',()=> {
                nav.classList.toggle('show');
            })
    }
}

showMenu('nav-toggle','nav-menu');


// remove menu mobile

const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    //active link
    navLink.forEach(n=>n.classList.remove('activeNav'))
    this.classList.add('activeNav')
    // Remove menu mobile

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

// SlideShow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
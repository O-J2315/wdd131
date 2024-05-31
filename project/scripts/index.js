// Toggle Bar menu
function myFunction(x) {
    x.classList.toggle("change");
  }

function checkMobileView(){
  if (window.innerWidth < 800)
    return true;
  else {
    return false;
  }
}
  
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
  plusDivs(slideIndex = n);
}
function plusSlides(n) {
  plusDivs(slideIndex += n);
}
function hiddeArrows(){
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
}
function showArrows(){
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  nextButton.style.display = 'block';
  prevButton.style.display = 'block';
}

//Making the heart image interactive
function heartClick() {

  const heartImg = document.getElementById('heart');

  if (heartImg.getAttribute('alt') == 'stroke') {
    heartImg.setAttribute('src', 'images/heart2.png');
    heartImg.setAttribute('alt', 'fill');
  } else if (heartImg.getAttribute('alt') == 'fill') {
    heartImg.setAttribute('src', 'images/heart1.png');
    heartImg.setAttribute('alt', 'stroke');
  }
}

document.getElementById('heart').addEventListener('click', heartClick);

const hamburger = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

var url = window.location.href;
document.querySelectorAll('li a').forEach(function(item) {
  if (url.includes(item.getAttribute('href'))) {
      item.classList.add('active');
      item.parentNode.classList.add('active');
  }
});
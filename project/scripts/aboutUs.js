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
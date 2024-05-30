// Toggle Bar menu
function myFunction(x) {
    x.classList.toggle("change");
  }

let slideIndex = 1;
showSlides(slideIndex);

function checkMobileView(){
  if (window.innerWidth < 800)
    return true;
  else {
    return false;
  }
}
  
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    if (checkMobileView())
      setTimeout(showSlides, 3000); // Change image every 3 seconds
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
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










window.onload = function() {
  showSlides();
  if(checkMobileView()){
    hiddeArrows();
  }else{
    showArrows();
  };
};

window.onresize = function() {
  showSlides();
  if(checkMobileView()){
    hiddeArrows();
  }else {
    showArrows();
  };
};
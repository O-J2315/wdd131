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
function heartClick(){
  const heartImg = document.getElementById('heart');
  if(heartImg.getAttribute('name') == 'stroke'){
    heartImg.setAttribute('src','images/heart2.png');
    heartImg.setAttribute('name' , 'fill');
  }else if(heartImg.getAttribute('name')=='fill') {
    heartImg.setAttribute('src', 'images/heart1.png');
    heartImg.setAttribute('name', 'stroke')
  }
}

document.getElementById('heart').addEventListener('click', heartClick);


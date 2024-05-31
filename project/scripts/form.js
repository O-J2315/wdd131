const events = [
  {
    id: "01",
    name: "Wedding",
    pickRate: "80/100"
  },
  {
    id: "02",
    name: "Quinceanera",
    pickRate: "10/100"
  },
  {
    id: "03",
    name: "Baby Shower",
    pickRate: "3/100"
  },
  {
    id: "04",
    name: "Birthday Party",
    pickRate: "5/100"
  },
  {
    id:"05",
    name: "Sweet Sixteen",
    pickRate: "2/100"
  }
];

// Toggle Bar menu
function myFunction(x) {
    x.classList.toggle("change");
}

//Toggle the nav menu in mobile view
const hamburger = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

if(hamburger != null){
  hamburger.addEventListener("click", mobileMenu);
}
  

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
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

if(document.getElementById('heart') != null){
  document.getElementById('heart').addEventListener('click', heartClick);
}

//Cookies to see the page location in the nav
const url = window.location.href;
document.querySelectorAll('li a').forEach(function(item) {
  if (url.includes(item.getAttribute('href'))) {
      item.classList.add('active');
      item.parentNode.classList.add('active');
  }
});


//Specific JS for the form
const form = document.getElementById('myForm');

  // Add event listener for form submission
if(form != null){
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    form.submit();
  });
}
const eventSelect = document.getElementById("selectEvent");

events.forEach((event) => {
  let option = document.createElement("option");
  option.value=event.id;
  option.innerText = `${event.name}`;
  if(eventSelect != null){
    eventSelect.appendChild(option);
  }
});

if(hamburger == null){
  window.onload = checkFirstTime;
  document.getElementById("return").addEventListener("click", function(){
    window.location.href = "index.html";
  })
}
function checkFirstTime(){
  let counter = parseInt(localStorage.getItem('numOfClients'));
  if(isNaN(counter)){
      counter = 0;
  }
  if(counter!=0){
    addClient();
  }else{
      localStorage.setItem('numOfClients', counter.toString());
      addClient();
  };
};

function addClient() {
  let counter = parseInt(localStorage.getItem('numOfClients'));
  counter = counter + 1;
  localStorage.setItem('numOfClients', counter.toString());
  document.getElementById('counter').innerText = localStorage.getItem('numOfClients');
  console.log(counter);
}
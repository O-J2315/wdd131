const hamButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1449483-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/exterior_washington_dc_temple.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-lds-894702-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-lds-591669-wallpaper.jpg"
	},
	{
		templeName: "Ciudad Juarez Mexico",
		location: "Ciudad Juarez, Chihuahua, Mexico",
		dedicated: "2000, February, 26",
		area: 10700,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ciudad-juarez-mexico/400x250/ciudad-juarez-mexico-temple-1528222-wallpaper.jpg"
	  },
	  {
		templeName: "Las Vegas Nevada",
		location: "Las Vegas, Nevada, United States",
		dedicated: "1989, December, 16",
		area: 80350,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-lds-758757-wallpaper.jpg"
	  },
	  {
		templeName: "Nauvoo Illinois Temple",
		location: "Nauvoo, Illinois, United States",
		dedicated: "2002, June, 27",
		area: 54000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg"
	  },
  ];

let mainElement = document.getElementById("main");

const displayHomeTemples = function(){
	mainElement.innerHTML="";
	temples.forEach( (temple) => {
		let templeFigure = document.createElement('figure');
		templeFigure.setAttribute("class", "temple-card")
		templeFigure.innerHTML = `	<h3>${temple.templeName}</h3>
									<p><strong>Location:</strong> ${temple.location}</p>
									<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
									<p><strong>Size:</strong> ${temple.area} sq ft</p>
									<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">`;
		mainElement.appendChild(templeFigure);
	});
	console.log("Run well");
};

const displayOldTemples = function(){
	mainElement.innerHTML="";
	temples.forEach( (temple) => {
		let year = temple.dedicated.split(',')[0];
		if(parseInt(year) <= 1900){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = `	<h3>${temple.templeName}</h3>
										<p><strong>Location:</strong> ${temple.location}</p>
										<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
										<p><strong>Size:</strong> ${temple.area} sq ft</p>
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a recent temple`);
		}
	});
};

const displayNewTemples = function(){
	mainElement.innerHTML="";
	temples.forEach( (temple) => {
		let year = temple.dedicated.split(',')[0];
		if(parseInt(year) >= 2000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = `	<h3>${temple.templeName}</h3>
										<p><strong>Location:</strong> ${temple.location}</p>
										<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
										<p><strong>Size:</strong> ${temple.area} sq ft</p>
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is an old temple`);
		}
	});
};

const displayLargeTemples = function(){
	mainElement.innerHTML="";
	temples.forEach( (temple) => {
		let area = temple.area;
		if(parseInt(area) > 90000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = `	<h3>${temple.templeName}</h3>
										<p><strong>Location:</strong> ${temple.location}</p>
										<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
										<p><strong>Size:</strong> ${temple.area} sq ft</p>
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a small temple`);
		}
	});
};

const displaySmallTemples = function (){
	mainElement.innerHTML="";
	temples.forEach( (temple) => {
		let area = temple.area;
		if(parseInt(area) < 10000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = `	<h3>${temple.templeName}</h3>
										<p><strong>Location:</strong> ${temple.location}</p>
										<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
										<p><strong>Size:</strong> ${temple.area} sq ft</p>
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a large temple`);
		}
	});
	console.log('this function ran');
};


const homeB = document.getElementById("home");
const oldB = document.getElementById("old");
const newB = document.getElementById('new');
const largeB = document.getElementById("large");
const smallB = document.getElementById("small");

homeB.addEventListener('click', () => displayHomeTemples());
oldB.addEventListener('click', () => displayOldTemples());
newB.addEventListener('click', () =>displayNewTemples());
largeB.addEventListener('click', ()=> displayLargeTemples());
smallB.addEventListener('click', () => displaySmallTemples());

window.onload = function() {
	displayHomeTemples();
};
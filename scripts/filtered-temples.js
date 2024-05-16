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
	  "images/abanigeria.webp"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, UT, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "images/mantiutah.webp"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, UT, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "images/paysonutah.webp"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "images/yigoguam.webp"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, MD, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "images/washingtondc.webp"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "images/limaperu.webp"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "images/mexicocity.webp"
	},
	{
		templeName: "Ciudad Juarez Mexico",
		location: "Ciudad Juarez, CHI, Mexico",
		dedicated: "2000, February, 26",
		area: 10700,
		imageUrl:
		"images/ciudadjuarez.webp"
	  },
	  {
		templeName: "Las Vegas Nevada",
		location: "Las Vegas, NV, United States",
		dedicated: "1989, December, 16",
		area: 80350,
		imageUrl:
		"images/lasvegastemple.webp"
	  },
	  {
		templeName: "Nauvoo Illinois Temple",
		location: "Nauvoo, IL, United States",
		dedicated: "2002, June, 27",
		area: 54000,
		imageUrl:
		"images/nauvooillinois.webp"
	  },
  ];

let mainElement = document.getElementById("main");

const displayHomeTemples = function(){
	mainElement.innerHTML='<h2 id="menu-selection">Menu</h2>';
	temples.forEach( (temple) => {
		let templeFigure = document.createElement('figure');
		templeFigure.setAttribute("class", "temple-card")
		templeFigure.innerHTML = 	`<h3>${temple.templeName}</h3>
									<figcaption><strong>Location:</strong> ${temple.location}
									<strong>Dedicated:</strong> ${temple.dedicated}\n
									<strong>Size:</strong> ${temple.area} sq ft</figcaption>\n
									<img src="${temple.imageUrl}" alt="${temple.templeName}" width="399" height="250" loading="lazy">`;
		mainElement.appendChild(templeFigure);
	});
	console.log("Run well");
};

const displayOldTemples = function(){
	mainElement.innerHTML='<h2 id="menu-selection">Menu</h2>';
	temples.forEach( (temple) => {
		let year = temple.dedicated.split(',')[0];
		if(parseInt(year) < 1900){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = 	`<h3>${temple.templeName}</h3>
										<figcaption><strong>Location:</strong> ${temple.location}
										<strong>Dedicated:</strong> ${temple.dedicated}\n
										<strong>Size:</strong> ${temple.area} sq ft</figcaption>\n
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="399" height="250" loading="lazy">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a recent temple`);
		}
	});
};

const displayNewTemples = function(){
	mainElement.innerHTML='<h2 id="menu-selection">Menu</h2>';
	temples.forEach( (temple) => {
		let year = temple.dedicated.split(',')[0];
		if(parseInt(year) > 2000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = 	`<h3>${temple.templeName}</h3>
										<figcaption><strong>Location:</strong> ${temple.location}
										<strong>Dedicated:</strong> ${temple.dedicated}\n
										<strong>Size:</strong> ${temple.area} sq ft</figcaption>\n
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="399" height="250" loading="lazy">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is an old temple`);
		}
	});
};

const displayLargeTemples = function(){
	mainElement.innerHTML='<h2 id="menu-selection">Menu</h2>';
	temples.forEach( (temple) => {
		let area = temple.area;
		if(parseInt(area) > 90000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = 	`<h3>${temple.templeName}</h3>
										<figcaption><strong>Location:</strong> ${temple.location}
										<strong>Dedicated:</strong> ${temple.dedicated}\n
										<strong>Size:</strong> ${temple.area} sq ft</figcaption>\n
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="399" height="250" loading="lazy">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a small temple`);
		}
	});
};

const displaySmallTemples = function (){
	mainElement.innerHTML='<h2 id="menu-selection">Menu</h2>';
	temples.forEach( (temple) => {
		let area = temple.area;
		if(parseInt(area) < 10000){
			let templeFigure = document.createElement('figure');
			templeFigure.setAttribute("class", "temple-card")
			templeFigure.innerHTML = 	`<h3>${temple.templeName}</h3>
										<figcaption><strong>Location:</strong> ${temple.location}
										<strong>Dedicated:</strong> ${temple.dedicated}\n
										<strong>Size:</strong> ${temple.area} sq ft</figcaption>\n
										<img src="${temple.imageUrl}" alt="${temple.templeName}" width="399" height="250" loading="lazy">`;
			mainElement.appendChild(templeFigure);
		}else{
			// console.log(`${temple.templeName} is a large temple`);
		}
	});
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
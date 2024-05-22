window.onresize = checkSize;

const productNameSelect = document.getElementById("productName");
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id:"jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];


function checkSize(){
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width<=800){
            let stars = ["","★","★★","★★★","★★★★","★★★★★"];
            for (let index = 1; index < 6; index++) {
                let button = document.getElementById(`radio${index}`);
                button.textContent = stars[index];
            };
        }else{
            let stars = ["","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"];
            for (let index = 1; index < 6; index++) {
                let button = document.getElementById(`radio${index}`);
                button.textContent = stars[index];
            };
        };
    };

    products.forEach((product) => {
        let option = document.createElement("option");
        option.value=product.id;
        option.innerText = `${product.name}`;
        productNameSelect.appendChild(option);
    });

    const submitButton = document.getElementById('mySubmit');
    const formElement = document.getElementById('myForm');
    formElement.addEventListener('submit', function(){
        window.location = 'review.html';
    }, false);



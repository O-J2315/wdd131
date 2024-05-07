let today = new Date();

let yearElement = document.getElementById("currentyear");
yearElement.innerText = `${today.getFullYear()}`;

let lastMod = new Date(document.lastModified);
let lastModEle = document.getElementById("lastModified");
lastModEle.innerText = `${lastMod.getMonth()}/${lastMod.getDate()}/${lastMod.getFullYear()} ${lastMod.getHours()}:${lastMod.getMinutes()}:${lastMod.getSeconds()}`;


let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;

let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}


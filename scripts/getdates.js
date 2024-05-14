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

let courseName = 'math';
let stuFirstName = 'josue';
let babygender = 'boy';
let reveal = document.getElementById("reveal");
reveal.innerHTML = `Welcome to the ${courseName} ${stuFirstName}!`;


let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
const dose = esomeprazole[0].amount[1]; 
console.log(dose)
let today = new Date();

let yearElement = document.getElementById("currentyear");
yearElement.innerText = `${today.getFullYear()}`;

let lastMod = new Date(document.lastModified);
let lastModEle = document.getElementById("lastModified");
lastModEle.innerText = `${lastMod.getMonth()}/${lastMod.getDate()}/${lastMod.getFullYear()} ${lastMod.getHours()}:${lastMod.getMinutes()}:${lastMod.getSeconds()}`;


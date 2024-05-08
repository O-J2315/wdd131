let windChillInput = document.getElementById("windchill");
let temp = document.getElementById("temp").value;
let  wind = document.getElementById("wind").value;
// Split the temp string into just the number
let temperature = temp.split(" ");

//arrow funciton to determine the wind chill factor
const calculateWindChill = (temp, wind) => {if (temp<=10 && wind > 4.8){let wcf = 13.12+(0.6215*temp)-(11.37*wind**0.16)+0.3965*temp*wind**0.16;return `${wcf.toFixed(2)} °C`;}else {return "N/A"}}

windChillInput.value = calculateWindChill(temperature[0],wind);
const prompt = require("prompt-sync")();

console.log("---Conversor de Celsius a Fahrenheit---");
let celsius = parseFloat(prompt("Ingresá la temperatura de tu ciudad en grados Celsius: "));
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("La temperatura de tu ciudad en grados Fahrenheit es: " + fahrenheit);

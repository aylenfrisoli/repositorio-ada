// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit 
// que reciba una temperatura en grados Celsius 
// y devuelva la temperatura en Fahrenheit.
const prompt = require("prompt-sync")();

console.log("------Conviertiendo grados Celsius en Fahrenheit------");

let temperaturaIngresada = parseFloat(prompt("Ingresá una temperatura: "));

let convertirCelsiusAFahrenheit = function(grados) {
    return (grados * 9/5) + 32;
}
console.log("La temperatura en Fahrenheit es: " + convertirCelsiusAFahrenheit(temperaturaIngresada));
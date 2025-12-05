const prompt = require("prompt-sync")();

// Ejercicio 9:
// Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el
// radio de un círculo y calcula su área y perímetro utilizando la constante PI.
console.log("---Calculemos el área y perímetro de un círculo---")

let radioDelUsuario = parseFloat(prompt("Ingresá un número que represente el radio de un círculo: "))

const PI = 3.14159;
let area = PI * radioDelUsuario * radioDelUsuario;
let perimetro = 2 * PI * radioDelUsuario;

console.log("Tu círculo tiene un área de " + area + " y un perímetro de " + perimetro)
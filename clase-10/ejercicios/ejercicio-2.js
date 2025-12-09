const prompt = require("prompt-sync")();

console.log("---COMPLETANDO DATOS BÁSICOS---")

let nombre = prompt("Ingresá tu nombre: ");
let edad = parseInt(prompt("Ingresa tu edad: "));
let peso = parseFloat(prompt("Ingresá tu peso: "));

console.log("Hola " + nombre + ", tu edad es " + edad + " y tu peso es " + peso);


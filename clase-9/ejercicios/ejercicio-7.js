const prompt = require("prompt-sync")();

// Ejercicio 7:
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra
// el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

let pesoKilogramos = parseFloat(prompt("Ingresá tu peso: "))
let pesoLibras = (pesoKilogramos * 2.20462)

console.log("Tu peso en libras es " + pesoLibras );

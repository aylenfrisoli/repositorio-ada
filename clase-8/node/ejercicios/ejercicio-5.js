const prompt = require("prompt-sync")({ sigint: true });

// 1.​ Solicite al usuario que ingrese su nombre.
let nombre = prompt("Cómo te llamas? ");
// 2.​ Muestre un saludo personalizado usando el nombre ingresado.
console.log("Hola," + nombre + " Qué onda?");

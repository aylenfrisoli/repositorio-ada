const prompt = require("prompt-sync")({ sigint: true });

// 1.​ Solicite al usuario que ingrese un número cualquiera.
let numero = parseFloat(prompt("Ingresa por favor un número: "));
// 2.​ Calcule el doble de ese número.
let dobleNumero = numero * 2;
// 3.​ Muestre el resultado en la consola.
console.log(`El doble de tu número es ${dobleNumero}.`);

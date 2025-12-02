const prompt = require("prompt-sync")({ sigint: true });

// 1.​ Solicite al usuario que ingrese un número entero.
let numero = parseInt(prompt("Ingresa un número entero: "));

// 2.​ Determine si el número es par o impar.
if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}
// 3.​ Muestre un mensaje indicando si el número es par o impar.

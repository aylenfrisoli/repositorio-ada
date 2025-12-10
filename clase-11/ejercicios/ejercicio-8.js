const prompt = require("prompt-sync")();
// Escribe un programa que le pida al usuario un número entero positivo
// y muestre todos los múltiplos de ese número entre 1 y 100.
// Utiliza un ciclo for para resolverlo.
let numeroInicio = parseInt(prompt("Ingrese un número de inicio: "));
let numeroFinal = parseInt(prompt("Ingrese un número de fin: "));

if (numeroFinal >= numeroInicio) {
  for (let numero = numeroInicio; numero <= numeroFinal; numero++) {
    if (numero % 2 === 0) {
      console.log("El número " + numero + " es par.");
    }
  }
} else {
  console.log("Datos inválidos");
}

const prompt = require("prompt-sync")({ sigint: true });

// 1.​ Pida al usuario que ingrese un número.
let numero = parseFloat(prompt("Por favor, ingrese un número: "));

// 2.​ Verifique si el número es positivo, negativo o igual a cero.
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}
// 3.​ Muestre un mensaje indicando cuál es el caso.

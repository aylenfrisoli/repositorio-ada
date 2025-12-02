const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 1: Calculadora de Descuento
// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original
// del producto y el porcentaje de descuento, y muestra el precio final.

let precioOriginal = parseFloat(
  prompt("Ingrese el precio original del producto: ")
);
let porcentajeDescuento = parseFloat(
  prompt("Ingrese el porcentaje de descuento: ")
);

let descuento = (precioOriginal * porcentajeDescuento) / 100;
let precioFinal = precioOriginal - descuento;

console.log(`El precio final del producto con descuento es: $ ${precioFinal}`);

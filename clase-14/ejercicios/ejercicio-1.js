// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto
// y el porcentaje de IVA. Usa una función flecha para
// calcular el precio final.
const prompt = require("prompt-sync")();

console.log("-----Calculando el IVA-----");
let numero = parseFloat(prompt("Ingresá el precio para cara calcular el IVA: "));

const calcularIva = (precio) => precio * 1.21;

console.log("EL valor del producto con IVA es de: " + calcularIva(numero));
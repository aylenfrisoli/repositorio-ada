const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresá un número: "));

console.log ((numero % 2) === 0 ? numero + " es par " : numero + " es impar");

// let resto = (numero % 2);

// console.log (resto === 0 ? numero + " es par " : numero + "es impar");

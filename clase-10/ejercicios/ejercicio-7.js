const prompt = require("prompt-sync")();

let primerNumero = 13;
let segundoNumero = 27;
let temp;
console.log("---Valores Originales---");
console.log("Primer valor: " + primerNumero);
console.log("Segundo valor: " + segundoNumero);

temp = primerNumero; // 13
primerNumero = segundoNumero; // 27
segundoNumero = temp; // 13

console.log("---Valores Intercambiados---");
console.log("Primer valor: " + primerNumero);
console.log("Segundo valor: " + segundoNumero);
const prompt = require("prompt-sync")();

console.log("---Calculemos tu IMC---")
let altura = parseFloat(prompt("Ingresá tu altura en mt (ej: 1.70): "));
let peso = parseFloat(prompt("Ingresá tu peso en kg (ej: 80.900): "));

let imc = peso / (altura * altura);

console.log("Tu IMC es: " + imc)

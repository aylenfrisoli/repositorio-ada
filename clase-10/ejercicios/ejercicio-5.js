const prompt = require("prompt-sync")();

let primerNumero = 30;
let segundoNumero = 3;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log("El resultado de la suma entre " + primerNumero + " y " + segundoNumero + " es: " + resultadoSuma);
console.log("El resultado de la resta entre " + primerNumero + " y " + segundoNumero + " es: " + resultadoResta);
console.log("El resultado de la multiplicación entre " + primerNumero + " y " + segundoNumero + " es: " + resultadoMultiplicacion);
console.log("El resultado de la división entre " + primerNumero + " y " + segundoNumero + " es: " + resultadoDivision);


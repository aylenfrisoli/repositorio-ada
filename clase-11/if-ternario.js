// Ejemplos: verificar si una persona es mayor de edad

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad:"));

let mensaje = (edad >= 21) ? "Sos mayor de edad" : "Sos menor de edad";

console.log(mensaje);
const prompt = require("prompt-sync")();

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edadDelUsuario = parseInt(prompt("Ingresá tu edad: "));

if (edadDelUsuario >= EDAD_MINIMA && edadDelUsuario <= EDAD_MAXIMA){
    console.log("Hola! Podes realizar la encuesta.");
} else {
    console.log("Lo sentimos, no cumplis con la edad necesaria para realizar esta encuesta.");
}
const prompt = require("prompt-sync")();

let primerNumero = 33;
let segundoNumero = 30;

if (primerNumero >= 10 && segundoNumero >= 10) {
    console.log("Los números " + primerNumero + " y " + segundoNumero + " son mayores a 10.");
} else {
    console.log("Los números no son mayores a 10.")
}
// Ejercicio 2: Número mayor (función expresada)
// Crea una función expresada llamada encontrarMayor 
// que reciba dos números como parámetros y devuelva el número mayor.

const prompt = require("prompt-sync")();

console.log("Descubramos juntas, cúal es el número mayor?");

let numeroUno = parseInt(prompt("Ingresá un número: "));
let numeroDos = parseInt(prompt("Ingresá otro número: "));

let encontrarMayor = function (numeroUno,numeroDos) {
   if (numeroUno > numeroDos) {
    return numeroUno;
} else if (numeroUno < numeroDos) {
    return numeroDos;
} else
    return "Son números iguales."
}
console.log(encontrarMayor(numeroUno,numeroDos));
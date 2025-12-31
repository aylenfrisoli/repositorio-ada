// Ejercicio 9: Contar hasta un número
// Crea una función declarada llamada contarHasta
// que reciba un número y use un bucle para 
// imprimir todos los números desde 1 hasta ese número.
const prompt = require("prompt-sync")();

let numeroDelUsuario = parseFloat(prompt("Ingresá un número del 1 al 10: "));

function contarHasta(numero) {
    for (let index = 1; index <= numero; index++) {
        console.log(index);
    }
}
contarHasta(numeroDelUsuario);
// Ejercicio 4: Número par o impar
// Crea una función declarada llamada esPar que reciba un número 
// y devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
// Usa una variable local para guardar el resultado.

const prompt = require("prompt-sync")();

let numeroDelUsuario = parseInt(prompt("Ingresá un número: "));

function esPar() {
    let resultado;
    if (numeroDelUsuario % 2 === 0) {
        resultado = "El numero es par";
    } else {
        resultado = "El numero es impar";
    }
    return resultado;
}
console.log(esPar());
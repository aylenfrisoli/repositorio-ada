// Ejercicio 10: Factorial de un número (Ejercicio entrevista)
// Crea una función expresada llamada calcularFactorial 
// que reciba un número y devuelva su factorial.
// Fórmula del factorial: 

const prompt = require("prompt-sync")();

console.log("------Calculando factoriales------");

let numeroDelUsuario = parseInt(prompt("Ingresá un numero para encontrar su factorial: "));

let calcularFactorial = function(numero) {
    if (numero < 0) {
        return "Número Inválido";
    } else if (numero === 0 ){
        return 1;
    } else {
        let total = numero;
        for (let index = numero - 1; index > 1; index--) {
            total = total * index;            
        }

        return "El factorial de " + numero + " es: " + total;

    }

}

console.log(calcularFactorial(numeroDelUsuario));
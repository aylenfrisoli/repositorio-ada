// Ejercicio 1: Área de un triángulo (función declarada)
// (Ejercicio entrevista)
// Crea una función declarada llamada calcularAreaTriangulo
// que reciba dos parámetros: la base y la altura de un triángulo.
// La función debe devolver el área del triángulo.
// Pista: Usa la fórmula:
const prompt = require("prompt-sync")();

console.log("---CALCULEMOS EL ÁREA DE UN TRIAŃGULO---");

let base = parseFloat(prompt("Ingresá un número para la base del triángulo: "));
let altura = parseFloat(prompt("Ingresá un número para la altura del triángulo: "));
// const area = (base * altura) / 2;


function calcularAreaTriangulo(base,altura) {
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + calcularAreaTriangulo(base,altura));

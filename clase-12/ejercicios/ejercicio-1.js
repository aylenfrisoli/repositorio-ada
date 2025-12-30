// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta
// que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
// números ingresados.
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresá un número positivo para ejercutar: "));
let sumaTotal = 0; 

while (numero >= 0) {
    sumaTotal = sumaTotal + numero;
    console.log("El número " + numero + " es positivo.");
    numero = parseInt(prompt("Ingresá otro número positivo para ejercutar o un número negativo para terminar: "));
};

console.log("La suma total de los números positivos ingresados es: " + sumaTotal);
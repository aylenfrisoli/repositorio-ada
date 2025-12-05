// Ejercicio 1:
// Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese
// dos números y muestra cuál es mayor o si son iguales.
const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt ("Ingresá un número: "))
let numero2 = parseFloat(prompt ("Ingresá otro número: "))

if (numero1 > numero2) {
    console.log("El número " + numero1 + " es mayor que el número " + numero2);
} else if (numero2 > numero1) {
    console.log("El número " + numero2 + " es mayor que el número " + numero1);
}
else {
    console.log("Los números que ingresaste son iguales");
}
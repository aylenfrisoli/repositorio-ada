const prompt = require("prompt-sync")();

// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y determine
// cuál es el mayor de los tres.
let numero1 = parseFloat(prompt("Ingresa el primer número: "))
let numero2 = parseFloat(prompt("Ingresa el segundo número: "))
let numero3 = parseFloat(prompt("Ingresa el tercer número: "))

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El número mayor es " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El número mayor es " + numero2);
} else {
    console.log("El número mayor es " + numero3);
}

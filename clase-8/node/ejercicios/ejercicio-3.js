const prompt = require("prompt-sync")({ sigint: true });

// 1.​ Pida al usuario que ingrese dos números.
let numero1 = parseFloat(prompt("Ingresa el primer número: "));

let numero2 = parseFloat(prompt("Ingresa el segundo número: "));

//2. Suma de dos números ingresados por el usuario
let suma = numero1 + numero2;

// 3.​ Muestre el resultado de la suma.
console.log("La suma es: " + suma);

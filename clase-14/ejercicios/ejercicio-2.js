// Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones 
// y usa una función flecha para calcular el promedio.
const prompt = require("prompt-sync")();

console.log("---Calculemos el promedio---")
let calificacion1 = parseFloat(prompt("Ingresa calificacion 1: "));
let calificacion2 = parseFloat(prompt("Ingresa calificacion 2: "));
let calificacion3 = parseFloat(prompt("Ingresa calificacion 3: "));
let calificacion4 = parseFloat(prompt("Ingresa calificacion 4: "));
let calificacion5 = parseFloat(prompt("Ingresa calificacion 5: "));

const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;

let promedio = calcularPromedio(calificacion1, calificacion2, calificacion3, calificacion4, calificacion5);

console.log("El promedio de las calificaciones es: " + promedio);



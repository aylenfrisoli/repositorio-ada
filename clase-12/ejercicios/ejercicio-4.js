// Ejercicio 4: Ciclo For - Array
const prompt = require("prompt-sync")();
// Crear un programa que permita registrar las notas de varios estudiantes usando
// arrays y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas.
// 2. Define un array vacío llamado notas donde almacenaremos las notas de los
// estudiantes.
let notas = [];
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una
// utilizando el método prompt.
// let notaIngresada = parseFloat(prompt("Ingresá la nota del alumno: "));
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a
// posiciones específicas del array notas.
for(let posicion = 0; posicion < 5; posicion++) {
    let notaIngresada = parseFloat(prompt("Ingresá la nota del alumno: "));
    notas[posicion] = notaIngresada;
}
console.log(`Las notas de los alumnos son: ${notas}`);


// // 5. Imprime en consola las notas ingresadas usando el array notas.
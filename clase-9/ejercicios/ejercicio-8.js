const prompt = require("prompt-sync")();

// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
// Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
// (Investiga sobre los triángulos para determinar la formula)

console.log("---CONSTRUÍ TU PROPIO TRIÁNGULO---");

let lado1 = parseInt(prompt("Ingresá el valor del primer lado del triángulo: "))
let lado2 = parseInt(prompt("Ingresá el valor del segundo lado del triángulo: "))
let lado3 = parseInt(prompt("Ingresá el valor del tercer lado del triángulo: "))

const esEquilatero = lado1 === lado2 && lado2 === lado3;
const esIsosceles = lado1 === lado2 || lado1 === lado3 || lado2 === lado3;
// const esEscaleno = lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3; //creo que no es necesario declarar esta constante

if (esEquilatero) {
    console.log("El triángulo es Equilátero, todos sus lados son iguales!");
} else if (esIsosceles) {
    console.log("El triángulo es Isósceles, tiene dos lados iguales!");
} else {
    console.log("EL triángulo es Escaleno, todos sus lados son desiguales!")
}




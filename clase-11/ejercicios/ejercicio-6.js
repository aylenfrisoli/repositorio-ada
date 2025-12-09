const prompt = require("prompt-sync")();
// Crea un programa que le pida al usuario un número 
// y luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
// Usa un ciclo for.
console.log("---Aprendamos las tablas juntas---");
let numero = parseInt(prompt("Ingresá un número: "));

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {

    let resultado = numero * multiplicador; 
    
    console.log(numero + "x" + multiplicador + "=" + resultado);
}
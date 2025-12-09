const prompt = require("prompt-sync")();

// Escribe un programa que le pida al usuario dos números enteros (inicio y fin).
// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares.
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin.
// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

let numeroInicio = parseInt(prompt("Ingresá un número: "));
let numeroFin = parseInt(prompt("Ingresá otro número: "));

if (numeroInicio > numeroFin) {
  console.log("Error: El número de inicio no puede ser mayor que el número final.");
} 
else {
  for (let n = numeroInicio; n <= numeroFin; n++) {
    if (n % 2 === 0) {
      console.log(n);
    }
  }
}
//ke dificil 
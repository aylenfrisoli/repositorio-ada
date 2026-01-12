// Ejercicio 10: Flores Favoritas
// Escribe un programa en JavaScript para contar 
// cuántas veces el usuario menciona sus flores favoritas. 
// Realiza las siguientes acciones:
// Inicializa un array vacío para almacenar las flores favoritas.
// Pregunta al usuario por sus tres flores favoritas 
// utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
// Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
// Muestra por consola cuántas de las flores favoritas 
// se mencionaron (esto debe hacerse manualmente).
const prompt = require("prompt-sync")();

let floresFavoritas = [];

let flor1 = prompt("¿Cuál es tu primera flor favorita? ");
floresFavoritas[0] = flor1; 

let flor2 = prompt("¿Cuál es tu segunda flor favorita? ");
floresFavoritas[1] = flor2; 

let flor3 = prompt("¿Cuál es tu tercera flor favorita? ");
floresFavoritas[2] = flor3; 

let florUsuario = prompt("Ingresá una flor para verificar cuántas veces aparece: ");
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florUsuario) {
        contador = contador + 1;
    }
}

console.log("La flor '" + florUsuario + "' se encontró " + contador + " veces.");

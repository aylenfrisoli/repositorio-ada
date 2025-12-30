// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres
// y los almacene en un array. 
// Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. 
const prompt = require("prompt-sync")();

let nombres = [];

for(let posicion = 0; posicion < 5; posicion++) {
    let nombre1 = prompt("Ingresá un nombre: ");
    nombres[posicion] = nombre1;
}
console.log(nombres);

let nombre2 = prompt("Ingresá nuevamente un nombre, podes repetir o no: ");

for(let posicion = 0; posicion < nombres.length; posicion++) {
    if (nombres[posicion] === nombre2) {
        console.log("El nombre ya está en la lista :)");
        break;
    }
}

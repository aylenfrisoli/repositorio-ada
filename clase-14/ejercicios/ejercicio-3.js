// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y 
// usa una función flecha para clasificarla en niño, 
// adolescente, adulto o adulto mayor.
const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingresá tu edad: "));

const clasificarEdad = (edad) => {
    if (edad <= 18) {
        return "adolescente";
    } 
    else if (edad >= 18 && edad <= 45) {
        return "adulto";
    }
    return "adulto mayor";
}

console.log("Según tu edad sos: " + clasificarEdad(edad));
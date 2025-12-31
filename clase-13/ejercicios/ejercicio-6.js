// Ejercicio 6: Convertir a minutos
// Crea una función declarada llamada convertirHorasAMinutos 
// que reciba un número de horas como parámetro 
// y devuelva el total en minutos.
const prompt = require("prompt-sync")();

console.log("-----Convirtiendo número de horas en minutos-----")

let horaIngresada =parseFloat(prompt("Ingresa una cantidad de horas: "));

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

console.log(horaIngresada + " horas equivale a " + convertirHorasAMinutos(horaIngresada) + " minutos");
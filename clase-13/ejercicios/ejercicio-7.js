// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaActual 
// (puedes asignarle un valor fijo). 
// Crea una función declarada llamada mostrarSaludo 
// que imprima "Buenos días" si la hora es menor a 12, 
// "Buenas tardes" si es menor a 18, o 
// "Buenas noches" en cualquier otro caso.
const prompt = require("prompt-sync")();

let horaActual = parseFloat(prompt("Qué hora es?: "));

function mostrarSaludo(hora) {
    if (hora <= 12) {
        return "Buenos días";
    } else if (hora >= 12 && hora <= 18) {
        return "Buenas tardes";
    }
    
    return "Buenas noches";
}

console.log(mostrarSaludo(horaActual));

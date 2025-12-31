// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaActual 
// (puedes asignarle un valor fijo). 
// Crea una función declarada llamada mostrarSaludo 
// que imprima "Buenos días" si la hora es menor a 12, 
// "Buenas tardes" si es menor a 18, o 
// "Buenas noches" en cualquier otro caso.
const prompt = require("prompt-sync")();

let horaActual = parseFloat(prompt("Qué hora es?: "));
let saludo;

function mostrarSaludo () {
    if (horaActual <= 12) {
    saludo = "Buenos días";
    } else if (horaActual >= 12 && horaActual <= 18) {
    saludo = "Buenas tardes";
    } else {
    saludo = "Buenas noches";
    }
    return saludo;
}
console.log(saludo);

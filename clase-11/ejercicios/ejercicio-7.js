const prompt = require("prompt-sync")();

// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. 
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.
let numeroUno = parseInt(prompt("Ingresá un número: "));
let numeroDos = parseInt(prompt("Ingresá otro número: "));

let operacion = prompt("Ingresa una operación matemática (ej: suma, resta, multiplicación, división): ").toLowerCase();


switch (operacion) {
    case "suma":
        let suma = numeroUno + numeroDos
        console.log("El resultado de la suma es: " + suma);
        break;
    case "resta":
        let resta = numeroUno - numeroDos
        console.log("El resultado de la resta es: " + resta);
        break;
    case "multiplicacion":
        let multiplicacion = numeroUno * numeroDos
        console.log("El resultado de la multiplicación es: " + multiplicacion);
        break;
    case "division":
        let division = numeroUno / numeroDos
        console.log("El resultado de la división es: " + division);
        break;
    default:
        console.log("No podemos realizar esa operación matemática.")     
}



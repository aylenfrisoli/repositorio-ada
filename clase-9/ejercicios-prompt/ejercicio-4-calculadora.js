const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 4 - Calculadora Simple: Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, realiza la operación indicada y muestra el resultado en la consola.
// Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
// Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.

let numero1 = parseFloat(prompt ("Ingresá un número: "));
let numero2 = parseFloat(prompt("Ingresá otro número: "));

let operacion = prompt("Qué operación te gustaría realizar? ")
let resultado = 0; //consultar si está ok, pongo 0 para que cada vez que se realice una operacion la variable obtenga un "nuevo valor"

if(operacion === "sumar") {
    resultado = numero1 + numero2
    console.log("El resultado de la suma es: " + resultado);
} else if (operacion === "restar") {
    resultado = numero1 - numero2
    console.log("El resultado de la resta es: " + resultado);
} else if (operacion === "dividir"){
    resultado = numero1 / numero2
    console.log("El resultado de la división es: " + resultado);
} else if (operacion === "multiplicar"){
resultado = numero1 * numero2
console.log("El resultado de la multiplicación es: " + resultado);
}
else {
    console.log("No es posible realizar esa operación.")
}

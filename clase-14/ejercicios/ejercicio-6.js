const prompt = require("prompt-sync")();
// Ejercicio 6: El deportista
// Para este ejercicio deberán definir un objeto literal “deportista”,
// con los siguientes atributos: nombre, energía, experiencia.
// Ademas queremos poder pedirle al deportista que entrene. 
// Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
// La función entrenarHoras tiene las siguientes tres características:
// Recibe por parámetro la cantidad de horas.
// Resta a su energía (this.energia) la cantidad de horas x 5.
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código 
// y ver cómo va variando la energía y experiencia del deportista por consola.

let deportista = {
    nombre: "Aylu",
    energia: 27,
    experiencia: 13,
    entrenarHoras: function(horas){
        this.energia = this.energia - (horas * 5);
        this.experiencia = this.experiencia + (horas * 2); 
    }
};
console.log("El estado inicial de " + deportista.nombre, "fue de: " + deportista.energia + " en nivel de energia y " + deportista.experiencia + " como valor de experiencia.");
let horasEntrenadas = parseInt(prompt("¿Cuántas horas vas a entrenar hoy?: "));

deportista.entrenarHoras(horasEntrenadas);

console.log("Después de entrenar: " + horasEntrenadas + " horas, la energía reducirá a: " + deportista.energia + " y tu experiencia incrementará a: " + deportista.experiencia);
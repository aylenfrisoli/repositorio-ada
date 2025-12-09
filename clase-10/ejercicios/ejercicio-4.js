const prompt = require("prompt-sync")();

let verdadero = false;
let texto = "Me gustan las noches de primavera";
let numero = 30;
let nada = null;

let resultadoSuma = numero + 13;
console.log("El resultado de la suma es: " + resultadoSuma);
let nuevoTexto = texto + " Ay! Qué lindo! Yo prefiero el invierno :)"
console.log(nuevoTexto);
if (verdadero){
    console.log("Es verdadero.");
} else {
    console.log("Es falso");
}

if (nada === null) {
    console.log("La nada es nada ;)")
}
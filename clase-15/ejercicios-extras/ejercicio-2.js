// Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// Dividir la oración en palabras individuales.
// Clasificar las palabras en dos categorías:
// Cortas (menos de 5 letras)
// Largas (5 letras o más)
// Mostrar ambas listas de palabras clasificadas.
// La oración es: "JavaScript es un lenguaje poderoso y versátil".

const oracion = "JavaScript es un lenguaje poderoso y versátil";

const palabras = oracion.split(" ");

let palabrasCortas = [];
let palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
    
    let palabraActual = palabras[i];

    if (palabraActual.length < 5) {
        palabrasCortas.push(palabraActual);
    } else {
        palabrasLargas.push(palabraActual);
    }
}
console.log("Palabras cortas (menos de 5 letras):", palabrasCortas);
console.log("Palabras largas (5 letras o más):", palabrasLargas);

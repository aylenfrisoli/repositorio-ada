// Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos
// transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la
// palabra "hola" se debería convertir en "¡hola!".

palabras = ['hola', 'mundo', 'javascript'];
const prefijo = "¡";
const sufijo = "!";

palabrasTransformadas = palabras.map(function(palabra) {
    return prefijo + palabra + sufijo;
});

console.log("Palabras transformadas: " + palabrasTransformadas);
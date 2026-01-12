// Métodos Array (Avanzados)

// 1) .map() Crear un nuevo array con los resultados de la función
// aplicada a cada elemento

let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaCien = notas.map(function (numero){
    return numero * 10;
});

console.log(notasHastaCien);

// 2) .filter() Crear un nuevo arreglo con elementos que pasan la condición
// especificada en una función de tipo filtro
let notasAprobadas = notas.filter(function (numero) {
    return numero >= 4;
});

console.log("Notas aprobadas (>= 4):", notasAprobadas);

// 3) .reduce() Reduce a un valor único un arreglo
let sumaNotas = notas.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log("La suma total de las notas es:", sumaNotas);

// 4) .forEach() Iterar sobre un array (pero no retorna nada)
notas.forEach(function (valor, indice) { //
    console.log('En la posición: ' + indice + ' tengo el valor: ' + valor); //
});

// 5) .find() Encuentra el primer elemento en el array que cumple con la condición
let notaEncontrada = notas.find(function(numero){ //
    return numero >= 8; //
});
console.log(notaEncontrada);
// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5
// llena de puros números enteros y positivos. 
// Luego, escribe un algoritmo para sumar todos los números en
// la matriz.

let aylu = [
    [13, 3, 2, 1, 13],
    [15, 17, 10, 222, 4],
    [5, 125, 10, 77, 2],
    [13, 33, 22, 11, 13],
    [5, 35, 444, 100, 27]
];
let suma = 0;


for (let fila = 0; fila < aylu.length; fila++) {
    for (let columna = 0; columna < aylu[fila].length; columna++) {
        suma = suma + aylu[fila][columna];
    }
}
console.log("La suma de todos los números le array aylu: " + suma);
// Definimos un array que contiene las temperaturas de la semana
let temperaturas = [22, 28, 15, 34, 18, 25, 27, 29, 17, 39, 14, 25, 13, 26];

// Los tres puntos (...) se llaman 'spread operator' y sirve para que Math.max vea cada número por separado
// Usamos el método Math.max() para encontrar el valor máximo de los argumentos
let maxima = Math.max(...temperaturas);

// Usamos el método Math.min() para encontrar el valor mínimo 
let minima = Math.min(...temperaturas);

// Mostramos en la consola el resultado final concatenando strings con los valores numéricos obtenidos
console.log("La temperatura máxima de la semana fue: " + maxima + "°");
console.log("La temperatura mínima de la semana fue: " + minima + "°");
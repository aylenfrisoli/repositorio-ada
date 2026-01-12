// Ejercicio 4: Calcula la suma total de los números
// Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos
// juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.

numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log("La suma total de los números es: " + suma);
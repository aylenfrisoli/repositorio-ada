// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre
// 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
nombreBuscado = 'Laura';

nombreEncontrado = nombres.find(function(nombre) {
    return nombre === nombreBuscado;
});

console.log("El nombre encontrado es: " + nombreEncontrado);
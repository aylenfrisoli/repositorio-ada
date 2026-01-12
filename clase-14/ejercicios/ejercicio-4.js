// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario.
// Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require("prompt-sync")();

let cantidadProductos = parseInt(prompt("Ingresá la cantidad de productos que compraste: "));
let precioPorUnidad = parseFloat(prompt("Cuánto te salió cada producto? "));

const calcularPrecio = (cantidad,precio) => {
    if (cantidad >= 6 ) {
        return cantidad * (precio - precio * 0.20)
    } 
    else if (cantidad >= 3 ) {
        return cantidad * (precio - precio * 0.10);
    }
    else {
        return cantidad * precio;
    }
}
console.log("El total es de: " + calcularPrecio(cantidadProductos,precioPorUnidad));
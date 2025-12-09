const prompt = require("prompt-sync")();
let valorDescuento = parseFloat(prompt("Cúal es el descuento?: "));
let calculoDescuento = precioOriginal * (valorDescuento / 100); //porcentaje 
let precioConDescuento =  precioOriginal - calculoDescuento;

console.log("El precio final del producto es de: " + precioConDescuento);

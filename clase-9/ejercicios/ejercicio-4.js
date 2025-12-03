const prompt = require("prompt-sync")();

// Ejercicio 4:
// Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si
// el nombre ingresado es igual a tu nombre

const miNombre = "Aylu";
let nombreUsuario = prompt("Ingresá tu nombre:");

if (nombreUsuario === miNombre) {
  console.log("WOW! Tenemos el mismo nombre!");
} else {
  console.log(
    `Nuestros nombres son diferentes, tu nombre es: ${nombreUsuario} y mi nombre es: ${miNombre}`
  );
}

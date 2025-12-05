const prompt = require("prompt-sync")();

// Ejercicio 10:
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
// correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
// de error.

let numeroDelUsuario = parseInt(prompt("Ingresa un número del 1 al 7: "));

if (numeroDelUsuario === 1) {
  console.log("Es Lunes");
} else if (numeroDelUsuario === 2) {
  console.log("Es Martes");
} else if (numeroDelUsuario === 3) {
  console.log("Es Miércoles");
} else if (numeroDelUsuario === 4) {
  console.log("Es Jueves");
} else if (numeroDelUsuario === 5) {
  console.log("Es VIerrnes");
} else if (numeroDelUsuario === 6) {
  console.log("Es Sábado");
} else if (numeroDelUsuario === 7) {
  console.log("Es DOmingo");
} else {
  console.log("EL número está fuera de rango");
}

// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
// correcta. La contraseña correcta es "1234"
const prompt = require("prompt-sync")();

const contrasenaOculta = "1234";
let contrasenaUsuario = '';

do {
   contrasenaUsuario = prompt("Ingresá tu constraseña: ");
   
   if (contrasenaUsuario === contrasenaOculta) {
    console.log("Bienvenida! Tu constraseña es correcta!");
   } else {
    console.log("Contrasena inválida, volvé a intentarlo.");
   }
    
} while (contrasenaUsuario !== contrasenaOculta);


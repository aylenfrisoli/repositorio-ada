// // Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// // Luego, pide al usuario que adivine el número hasta 3 intentos. 
// // Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación 
// // y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. 
// // Usa un for para resolver este ejercicio.
// const prompt = require("prompt-sync")();

// console.log("--- JUEGO DE ADIVINANZA (1 al 10) ---");

// const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// let numeroAdivinado = false; 

// for (let intento = 1; intento <= 3; intento++) {
    
//     let adivinanza = parseInt(prompt(`Intento ${intento} de 3. Ingresa tu número: `));
    
//     if (adivinanza === numeroSecreto) {
//         console.log(`¡Felicidades! Adivinaste el ${numeroSecreto} en el intento ${intento}.`);
//         numeroAdivinado = true; 
//         break; 
//     } else {
//         console.log("Incorrecto. Intenta de nuevo.");
//     }
// }

// if (intento > 3) { 
//     console.log("Agotaste tus 3 intentos!");
//     console.log("El número secreto era: " + numeroSecreto);
// }
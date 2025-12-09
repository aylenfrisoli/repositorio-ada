const prompt = require("prompt-sync")();

// Ejercicio 10:
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
// correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
// de error.

let numeroDelUsuario = parseInt(prompt("Ingresa un número del 1 al 7: "));

switch (numeroDelUsuario) {
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miércoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sábado");
        break;
    case 7:
        console.log("Es Domingo");
        break;
    
    // 3. DEFAULT (Similar al 'else' final)
    default:
        console.log("Error: El número está fuera de rango (1 al 7).");
}

// let fruta = 'manzana';
// switch (fruta) {
// case 'manzana':
//     console.log('Qué rica la manzana');
//     break;
// case 'naranja':
//     console.log('¡Naranja, me encanta!');
//     break;
// default:
//     console.log('¿Qué fruta es?');
// }
const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingresa tu nombre: ");
console.log(`Hola ${nombre}!!!`);

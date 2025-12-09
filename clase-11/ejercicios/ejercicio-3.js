const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingreśa un número positivo (mayor que 0): "));

for (let ciclo = 1; ciclo <= numero; ciclo++) {
    console.log("Este es el ciclo " + ciclo);
}

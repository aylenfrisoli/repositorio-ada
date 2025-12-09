const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresá un número: "));

if (numero < 0) {
    console.log("El número " + numero + " es negativo.");
} else if (numero > 0) {
        console.log("El número " + numero + " es positivo.");
} else {
        console.log("El número es 0.");
}

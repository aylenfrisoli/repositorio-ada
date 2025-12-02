const prompt = require("prompt-sync")({ sigint: true });

let temperatura = parseFloat(prompt("Ingrese la temperatura actual: "));

if (temperatura < 20) {
  console.log("Llevá abrigo");
} else {
  console.log("Qué lindo día para salir a comprar!");
}

let lluvia = prompt("¿Está lloviendo?: ");
if (lluvia === "si") {
  console.log("Llevá un paraguas");
} else {
  console.log("Llevá lentes de sol!");
}

let hogar = prompt("Vivís en un departamento o en una casa?: ");
if (hogar === "departamento") {
  let piso = parseInt(prompt("En qué piso está el ascensor?: "));
} else {
  console.log("No olvides cerrar bien la puerta al salir!");
}

let horaActual = parseInt(prompt("Qué hora es?: "));

let horaApertura = parseInt(prompt("A qué hora abre la fiambrería?: "));

let horaCierre = parseInt(prompt("A qué hora cierra la fiambrería?: "));

if (horaActual >= horaApertura && horaActual < horaCierre) {
  console.log("La fiambrería está abierta, podés ir a comprar.");
} else {
  console.log("La fiambrería está cerrada, anda más tarde");
  process.exit(); // fin del programa si está cerrada (preguntar sobre esto )
}

let queso = 100;
let loDeSiempre = prompt("Llevas lo de siempre? ");

if (loDeSiempre === "si") {
  console.log("Te corto 100 gr. de Queso Dambo.");
} else {
  queso = parseInt(prompt("Cuántos gramos de queso vas a llevar?"));
  console.log(`Entonces corto ${queso} gr. de Queso Dambo.`);
}

let precioPor1g = 15;

let precioTotal = queso * precioPor1g;
console.log(`EL precio total es $${precioTotal}.`);

let billetera = prompt("Trajiste la billetera? ");
if (billetera === "si") {
  console.log(`Pagale a Mónica $${precioTotal}`);
} else {
  console.log(`Volvé más tarde, le debés a Mónica $${precioTotal}`);
}

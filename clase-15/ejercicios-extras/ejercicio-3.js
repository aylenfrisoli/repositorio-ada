// Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan 
// y son atendidos uno por uno. Tienes una lista inicial de clientes en espera 
// y un bucle que los atiende de a uno. 
// Realiza lo siguiente:
// Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let atendidos = 0;

while (clientes.length > 0) {
    let clienteActual = clientes.shift();
    if (clienteActual === "VIP") {
        console.log("Atendiendo a cliente recurrente: " + clienteActual + ", gracias por elegirnos!");
    } else {
        console.log("Atendiendo a cliente: " + clienteActual);
    }
    atendidos++;
}

console.log("Total de clientes atendidos: " + atendidos);
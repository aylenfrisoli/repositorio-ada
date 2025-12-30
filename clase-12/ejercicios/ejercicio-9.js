const prompt = require("prompt-sync")();

let matriz = [
    [1135, 2500, 900, 1600, 2800, 650, 1100],  
    [1750, 1890, 1900, 1300, 898, 1750, 2800], 
    [1700, 1150, 1690, 1900, 1770, 500, 2560], 
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

// a) Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, si nos indican semana 2
// tenemos que sumar la fila 1 de la matriz.
// Recordar que las matrices comienzan siempre en posición 0.

let semanaUsuario = parseInt(prompt("Ingresá el número de la semana que querés consultar: "));
let gastoSemanal = 0;
let arraySemanal = matriz[semanaUsuario - 1];

for (let index = 0; index < arraySemanal.length; index++) {
    gastoSemanal = gastoSemanal + arraySemanal[index];
}
console.log("El gasto total de la semana " + semanaUsuario + " es igual a: " + gastoSemanal);

// b) La aplicación también tendrá una parte de estadísticas, para esto nos
// solicitan dar el total de un día en particular, por ejemplo del día 3, acá
// también tengamos en cuenta lo que ocurre con las filas, ya que las columnas
// también comienzan en 0.

let diaUsuario = parseInt(prompt("Ingresá el número del día que querés consultar: "));
let gastoDia = 0;
let indiceDia = diaUsuario - 1;

for (let index = 0; index < matriz.length; index++) {
    gastoDia = gastoDia + matriz[index][indiceDia];
}
console.log("El gasto total de los dias " + diaUsuario + " es de: " + gastoDia);

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// ✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
// resolver este último punto?

let gastoMensual = 0;

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        gastoMensual = gastoMensual + matriz[fila][columna]; //creo que esto da gasto mensual
    }
}
console.log("EL gasto total mensual es de: " + gastoMensual);

// d) Obtener cuál fue la semana que más gastos se realizaron. 
// Indicar el día que más gastos se realizaron.

let semanaMayorGasto = 0;
let diaMayorGasto = 0;
let semanaDelDiaMayorGasto = 0;
let numeroDeSemana = 0;
let numerodeDia = 0;

for (let semana = 0; semana < matriz.length; semana++) {
    let totalSemana = 0;
    for (let dia = 0; dia < matriz[semana].length; dia++) {
        let gastoDelDia = matriz[semana][dia];
        totalSemana = totalSemana + gastoDelDia;

        if (gastoDelDia > diaMayorGasto) {
            diaMayorGasto = gastoDelDia;
            numerodeDia = dia + 1;
            semanaDelDiaMayorGasto = semana + 1;
        }
    }
    if (totalSemana > semanaMayorGasto) {
        semanaMayorGasto = totalSemana;
        numeroDeSemana = semana + 1;
    }
}
console.log("La semana con mayor gasto fue la número " + numeroDeSemana +  " con un gasto de: " + semanaMayorGasto);

console.log("El día con mayor gasto fue el día " + numerodeDia + " de la semana " + semanaDelDiaMayorGasto + " con un monto de: " + diaMayorGasto);

// Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
// Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
// Eliminar el primer producto del inventario.
// Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Inventario inicial: " + inventario.join(", "));

// Agregar un nuevo producto 
inventario.push("Impresora");

// Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("La Tablet está en el inventario.");
} else {
    console.log("La Tablet no está en el inventario.");
}

// Eliminar el primer producto 
inventario.shift();

let listaActualizada = inventario.join(", ");
console.log("Inventario actualizado: " + listaActualizada);
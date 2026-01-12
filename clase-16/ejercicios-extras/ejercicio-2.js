// Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de objeto:
// const products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Mouse', price: 25 },
// { name: 'Teclado', price: 50 },
// { name: 'Monitor', price: 200 },
// { name: 'Audífonos', price: 75 }
// ];
// Queremos:
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.
// o Obtener solo los nombres de esos productos.
// o Calcular el precio total sumando los precios de los productos seleccionados.
// o Imprime el total y los nombres de los productos seleccionados en la consola.

productos = [
  { nombre: 'Laptop', precio: 1000 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 50 },
  { nombre: 'Monitor', precio: 200 },
  { nombre: 'Audífonos', precio: 75 }
];

const productosSeleccionados = productos.filter(function(producto) {
  return producto.precio >= 50;
});

const nombresDeProductos = productosSeleccionados.map(function(producto) {
  return producto.nombre;
});

const precioTotal = productosSeleccionados.reduce(function(total, producto) {
  return total + producto.precio;
}, 0);


console.log("Productos seleccionados con valor mayor a $50: " + nombresDeProductos.join(", "));
console.log("Precio total de los productos seleccionados: $" + precioTotal);   
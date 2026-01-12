// Ejercicio 7: Libros
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// título: una cadena con el título del libro.
// autor: una cadena con el nombre del autor del libro.
// anioPublicacion: un número con el año de publicación del libro.
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
// como parámetro y muestre por consola la información de cada libro en el formato especificado.

let libro1 = {
    titulo: "Hábitos atómicos",
    autor: "James Clear",
    fechaPublicacion: 2018,
}
let libro2 = {
    titulo: "Deja de ser tú",
    autor: "Joe Dispenza",
    fechaPublicacion: 2012,
}

listaDeLibros = [libro1, libro2];

function mostrarLibro (libros) {
    for (let index = 0; index < libros.length; index++) {
        console.log("El título es: " + libros[index].titulo);
        console.log("El Autor es: " + libros[index].autor);
        console.log("Se publicó en el año: " + libros[index].fechaPublicacion);
    }
}
mostrarLibro(listaDeLibros);
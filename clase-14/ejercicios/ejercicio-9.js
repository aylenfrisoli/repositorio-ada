// Ejercicio 9: Última aparición de un modelo de auto
// En este ejercicio, trabajaremos con una lista de modelos de autos.
// Implementa una función llamada ultimaAparicionModeloAuto(modelo) que encuentre
// y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.
// Datos Iniciales:
// Utiliza un array llamado modelosAutos que contiene varios modelos de autos,
// algunos repetidos para demostrar la funcionalidad.
// Funcionalidad:
// Implementa la función ultimaAparicionModeloAuto(modelo),
// que toma modelo como parámetro (un string).
// Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
// Si el modelo se encuentra en el array, la función debe imprimir
// por consola la posición (índice + 1)
// en la que aparece (considerando que la numeración es de 1 a N).
// Si el modelo no está en el array,
// debe imprimir un mensaje indicando que el modelo no está presente.

function ultimaAparicionModeloAuto(modelo) {
    let modelosAutos = ["Fiesta", "Focus", "Cruze", "Punto", "Génesis", "Focus"];
    // Inicializamos con -1 para saber si entra o no al if
    let ultimaPosicion = -1; 
    
    for (let indice = 0; indice < modelosAutos.length; indice++) {
        if (modelosAutos[indice] === modelo) {
            ultimaPosicion = indice;
        }
    }

    if (ultimaPosicion !== -1) {
        console.log("La última aparición del modelo " + modelo + " está en la posición " + (ultimaPosicion + 1));
    } else {
        console.log("El modelo no está presente");
    }
}

ultimaAparicionModeloAuto("Focus"); 
ultimaAparicionModeloAuto("Civic");
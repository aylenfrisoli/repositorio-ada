// Ejercicio 7: Verificar si una lista contiene un elemento
// Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"].
// Verifica si "Sushi" está en la lista y muestra un mensaje 
// que confirme si está o no.

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

let tieneSushi = comidas.includes("Sushi");

if (tieneSushi) {
    console.log("La lista incluye Sushi");
} else {
    console.log("La lista no incluye Sushi");
} 

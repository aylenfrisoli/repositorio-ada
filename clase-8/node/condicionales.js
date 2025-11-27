//Crea un programa que simule un sistema de calificacion
// basado en al nota de un estudiante (un valor numerico del 0 al 100) el programa debe determinar
// si es estudiante ha aprobado o a obtenido una calificacion excelente,
// segun las siguientes condiciones:

//Si la nota e smenor a 60, el estudiante ha reprobado
//Si la nota esta entre 60 y 89 (inclusive), el estudiante ha aprobado
//Si la nota es 90 o mayor, el estudiante ha obtenido una calificacion excelente
//Usar el condicional if-else if-else para mostrar el mensaje correspondiente en la consola

let nota = 75; //variable

if (nota < 60) {
  console.log("Reprobado.");
} else if (nota >= 60 && nota <= 89) {
  console.log("Aprobado.");
} else {
  console.log("Calificación EXCELENTE !.");
}

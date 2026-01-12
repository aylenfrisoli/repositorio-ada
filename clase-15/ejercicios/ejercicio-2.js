// Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta 
// ["Ana", "Juan", "Carlos", "Sofía"]. 
// El último invitado no puede asistir. 
// Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.

listaInvitados = ["Ana", "Juan", "Carlos", "Sofía"];

nuevaListaInvitados = listaInvitados.pop();
console.log("De la lista de invitados, " + nuevaListaInvitados + " no podrá asistir.")
console.log("La lista de invitados actualizada: " + listaInvitados);
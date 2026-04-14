// Array que guarda los objetos de la pila
let pila = [];

// Función para agregar un objeto a la pila
function push() {
  let persona = { Nombre: "Orlando", Edad: 30 }; // objeto de prueba
  pila.push(persona); // agrega el objeto al final del array
  console.log("Elemento agregado:", persona); // muestra el objeto agregado
  mostrarPila();
}

// Función para eliminar el último objeto de la pila (LIFO)
function pop() {
  if (pila.length == 0) { // verifica si la pila está vacía
    console.log("La pila está vacía, no hay nada que eliminar");
    return;
  }
  let eliminado = pila.pop(); // elimina y guarda el último objeto
  console.log("Elemento eliminado:", eliminado); // muestra el objeto eliminado
  mostrarPila();
}

// Función para mostrar todos los objetos de la pila
function mostrarPila() {
  console.log("=== Estado actual de la pila ===");
  for (let i = pila.length - 1; i >= 0; i--) { // recorre de último a primero
    console.log(pila[i]); // muestra cada objeto
  }
}

// ===== PRUEBAS =====
push(); // agrega primer objeto
push(); // agrega segundo objeto
push(); // agrega tercer objeto
pop();  // elimina el último
pop();  // elimina el siguiente
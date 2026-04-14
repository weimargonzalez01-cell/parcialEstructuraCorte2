// Array que guarda los números de la cola
let cola = [];

// Función para agregar un número a la cola
function agregar() {
  let numero = 10; // número de prueba
  cola.push(numero); // agrega el número al final del array
  console.log("Elemento agregado:", numero); // muestra el número agregado
  mostrarCola();
}

// Función para eliminar el primer número de la cola (FIFO)
function eliminar() {
  if (cola.length == 0) { // verifica si la cola está vacía
    console.log("La cola está vacía, no hay nada que eliminar");
    return;
  }
  let eliminado = cola.shift(); // elimina y guarda el primer número
  console.log("Elemento eliminado:", eliminado); // muestra el número eliminado
  mostrarCola();
}

// Función para mostrar todos los objetos de la cola
function mostrarCola() {
  console.log("=== Estado actual de la cola ===");
  for (let i = 0; i < cola.length; i++) { // recorre de primero a último
    console.log(cola[i]); // muestra cada objeto
  }
}


// ===== PRUEBAS =====
agregar(); // agrega primer número
agregar(); // agrega segundo número
agregar(); // agrega tercer número
eliminar(); // elimina el primero
eliminar(); // elimina el siguiente
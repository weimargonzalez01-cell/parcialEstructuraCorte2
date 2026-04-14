// Array que guarda los números de la cola
let cola = [];

// Función para agregar un número a la cola
function agregar(numero) {
  cola.push(numero);
  console.log("Elemento agregado:", numero);
  mostrarCola();
}

// Función para eliminar el primer número de la cola
function eliminar() {
  if (cola.length == 0) {
    console.log("La cola está vacía, no hay nada que eliminar");
    return;
  }
  let eliminado = cola.shift();
  console.log("Elemento eliminado:", eliminado);
  mostrarCola();
}

// Función para mostrar todos los objetos de la cola
function mostrarCola() {
  console.log("=== Estado actual de la cola ===");
  for (let i = 0; i < cola.length; i++) {
    console.log(cola[i]);
  }
}


// PRUEBAS
// ===== PRUEBAS =====
agregar(10);
agregar(25);
agregar(40);
eliminar(); 
eliminar(); 
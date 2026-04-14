// Array que guarda los objetos de la pila
let pila = [];

// Función para agregar un objeto a la pila
function push(persona) {
  pila.push(persona);
  console.log("Elemento agregado:", persona);
  mostrarPila();
}

// Función para eliminar el último objeto de la pila
function pop() {
  if (pila.length == 0) {
    console.log("La pila está vacía, no hay nada que eliminar");
    return;
  }
  let eliminado = pila.pop(); 
  console.log("Elemento eliminado:", eliminado);
  mostrarPila();
}

// Función para mostrar todos los objetos de la pila
function mostrarPila() {
  console.log("=== Estado actual de la pila ===");
  for (let i = pila.length - 1; i >= 0; i--) {
    console.log(pila[i]);
  }
}

// PRUEBAS
push({ Nombre: "Orlando", Edad: 30 });
push({ Nombre: "Maria", Edad: 25 });  
push({ Nombre: "Carlos", Edad: 40 }); 
pop();
pop(); 
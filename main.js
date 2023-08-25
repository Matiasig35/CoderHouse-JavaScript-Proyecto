// Lista de productos con precios en un arreglo
const productos = [
  { nombre: 'Mate Justo Plateado', precio: 24200 },
  { nombre: 'Mate Justo Blanco Texturado', precio: 24200 },
  { nombre: 'Mate Justo Negro Texturado', precio: 24200 },
  { nombre: 'Mate Justo Rojo Texturado', precio: 24200 },
  { nombre: 'Bolso Justo', precio: 26500 },
  { nombre: 'Yerba Ana Carolina', precio: 2100 },
];

// Defino esta variable "carrito" y la asigno vacía
const carrito = [];

// Vinculo objetos de html a travez de DOM 
const opcionesContainer = document.getElementById("opciones");
const carritoContainer = document.getElementById("carrito");
const totalContainer = document.getElementById("total");


// Función para mostrar las opciones disponibles al cliente
// Utilizo la función y el bucle "for" para mostrar la lista del arreglo
function mostrarOpciones() {
opcionesContainer.innerHTML = '<h2>Opciones disponibles:</h2>'; 
for (let i = 0; i < productos.length; i++) {
  opcionesContainer.innerHTML += `
    <p>${i + 1}. ${productos[i].nombre} - $${productos[i].precio}</p>
  `;
}
}

// Función para mostrar lo que elije el usuario en lista
function actualizarCarrito() {
carritoContainer.innerHTML = '<h2>Carrito de Compras:</h2>';
for (const item of carrito) {
    carritoContainer.innerHTML += `
      <p>${item.cantidad} x ${item.producto.nombre} - $${item.subtotal}</p>
    `;
}
}

// Llamo la función que muestra las opciones al cargar la página
mostrarOpciones();

// Función para vender productos
function venderProductos() {
while (true) {
  
  let opcion = parseInt(prompt('Ingrese el número del producto que desea comprar (0 para salir):'));

  // Para salir del bucle si el cliente elige la opción 0
  if (opcion === 0) {
    break; 
  }

  if (opcion >= 1 && opcion <= productos.length) {
    // Como el arreglo empieza numerando en 0, le tengo que restar 1 a la variable "opcion"
    const productoSeleccionado = productos[opcion - 1];
    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`));
    
    // Utilizo la función isNaN para que devuelva true si el valor proporcionado no es un número y false si es un número.
    if (!isNaN(cantidad) && cantidad > 0) {
      const subtotal = cantidad * productoSeleccionado.precio;
      carrito.push({ producto: productoSeleccionado, cantidad, subtotal });
      console.log(`Has añadido ${cantidad} ${productoSeleccionado.nombre} al carrito.`);
      // Mostrar el resumen de la compra
      actualizarCarrito();
    } else {
        console.log('Cantidad inválida. Inténtelo de nuevo.');
    }
  } else {
    console.log('Opción inválida. Inténtelo de nuevo.');
  }
}
  
// Inicializo esta variable en 0, para luego usarla como acumulador
let totalVenta = 0;
totalContainer.innerHTML = '<h2>Total Final:</h2>';
for (const item of carrito) {
  totalVenta += item.subtotal;
}
totalContainer.innerHTML += `
  <p>$${totalVenta}</p>
`;
}

// Llamo a la función para iniciar la venta de productos
venderProductos();
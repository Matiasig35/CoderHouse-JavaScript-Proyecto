// Lista de productos con precios en un arreglo
const producto = [
    { nombre: 'Producto 1', precio: 10000 },
    { nombre: 'Producto 2', precio: 15000 },
    { nombre: 'Producto 3', precio: 12000 },
    { nombre: 'Producto 4', precio: 7000 },
];
  
  // Función para mostrar las opciones disponibles al cliente
  // Utilizo la función y el bucle "for" para mostrar la lista del arreglo
  function mostrarOpciones() {
    console.log('Opciones disponibles:');
    for (let i = 0; i < producto.length; i++) {
      console.log(`${i + 1}. ${producto[i].nombre} - $${producto[i].precio}`);
    }
    console.log('0. Salir');
  }
  
  // Función para vender productos
  function venderProductos() {
    // Inicializo esta variable en 0, para luego usarla como acumulador
    let totalVenta = 0;
  
    while (true) {
      mostrarOpciones();
      let opcion = parseInt(prompt('Ingrese el número del producto que desea comprar (0 para salir):'));
  
      // Para salir del bucle si el cliente elige la opción 0
      if (opcion === 0) {
        break; 
      }
  
      if (opcion >= 1 && opcion <= producto.length) {
        // Como el arreglo empieza numerando en 0, le tengo que restar 1 a la variable "opcion"
        const productoSeleccionado = producto[opcion - 1];
        console.log(`Has seleccionado: ${productoSeleccionado.nombre} - $${productoSeleccionado.precio}`);
        totalVenta += productoSeleccionado.precio;
      } else {
        console.log('Opción inválida. Inténtelo de nuevo.');
      }
    }
  
    console.log(`Gracias por su compra. Total: $${totalVenta}`);
  }
  
  // Llamo a la función para iniciar la venta de productos
  venderProductos();
// Crear una lista de contactos con datos predefinidos
let contactos = ["Juan Perez", "María García", "Carlos López"];

// Función para agregar un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
  contactos.push(nombreApellido);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  const index = contactos.indexOf(nombreApellido);
  if (index !== -1) {
    contactos.splice(index, 1);
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

// Función para imprimir en la consola los contactos presentes en la lista
function imprimirContactos() {
  contactos.forEach((contacto) => {
    console.log(contacto);
  });
}

// Ejemplos de uso de las funciones
agregarContacto("Ana Martínez");
borrarContacto("María García");
imprimirContactos();

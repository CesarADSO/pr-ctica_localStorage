# Proyecto: Gestión de Usuarios con LocalStorage

Este proyecto es una introducción al uso de LocalStorage en JavaScript. Permite registrar un nombre de usuario, almacenarlo en el navegador y mostrar mensajes de bienvenida en diferentes páginas.

---

## Funcionalidades

* Registrar un nombre de usuario desde un formulario en `index.html`.
* Validación: no se permite dejar el campo vacío.
* Guardado del usuario en LocalStorage.
* Visualización:

  * En un mensaje (`h2`) de bienvenida en la página principal (`index.html`).
  * En un mensaje (`h2`) dentro de `perfil.html`, mostrando el usuario creado.
* Eliminación del usuario almacenado mediante un botón, con mensaje por defecto.

---

## Archivos del proyecto

* `index.html` → Contiene el formulario para registrar el usuario, el saludo en `h2`, el botón para eliminar y el enlace hacia la página de perfil.
* `perfil.html` → Muestra el usuario guardado en LocalStorage en un `h2`.
* `main.js` → Lógica para registrar, mostrar y eliminar el usuario en la página principal.
* `perfil.js` → Lógica para mostrar el usuario guardado en la página de perfil.

---

## Cómo usarlo

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa un nombre en el formulario y presiona **Guardar**.
4. El nombre se guardará en LocalStorage y se mostrará en el saludo (`h2`).
5. Abre `perfil.html` para ver el saludo con el usuario guardado.
6. Si presionas el botón **Borrar Nombre**, se elimina el usuario de LocalStorage y el mensaje cambia a "Bienvenido usuario indefinido".

---

## Tecnologías usadas

* HTML5
* CSS3
* JavaScript (LocalStorage)

---

## Notas

* Los datos se guardan en LocalStorage, por lo tanto permanecen incluso si se recarga la página, pero se borran si se limpia la memoria local.
* Este proyecto no requiere servidor ni base de datos, es completamente estático.

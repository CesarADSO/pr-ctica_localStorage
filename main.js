const form = document.getElementById('formulario');
const input = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const btnEliminar = document.getElementById('borrar');





form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = input.value.trim();

    if (nombre == "") {
        alert("Por favor ingresa un nombre");
        return;
    }

    localStorage.setItem('usuario', nombre);
    saludo.textContent = 'bienvenido ' + nombre;

    input.value = "";


});

document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        saludo.textContent = 'bienvenido de nuevo ' + usuarioGuardado;
    }
});

btnEliminar.addEventListener('click', () => {
    localStorage.removeItem('usuario');
    saludo.textContent = 'Bienvenido usuario indefinido';
});


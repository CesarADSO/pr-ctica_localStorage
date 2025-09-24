const crearUsuario = document.getElementById('usuario-creado');
document.addEventListener('DOMContentLoaded', () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        crearUsuario.textContent = 'bienvenido de nuevo ' + usuarioGuardado;
    }
})
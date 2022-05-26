var txt_usuario, txt_contraseña, boton, btn_cerrar_modal;
window.onload = function () {
    txt_usuario = document.getElementById("usuario");
    txt_contraseña = document.getElementById("contraseña");
    boton = document.getElementById("btn");
    boton.addEventListener("click", procesar);
    btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
    btn_cerrar_modal.addEventListener("click", cerrarVentana);
}
function procesar() {
    var str_usuario, usuario;
    str_usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(str_usuario);
    if (txt_usuario.value === usuario.usuario && md5(txt_contraseña.value) === usuario.clave) {
        abrirVentana();
    }
}
function abrirVentana() {
    ventana.classList.remove("hidden");
}

function cerrarVentana() {
    location.href = "index.html";
}
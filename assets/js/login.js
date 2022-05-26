var txt_usuario, txt_contraseņa, boton, btn_cerrar_modal;
window.onload = function () {
    txt_usuario = document.getElementById("usuario");
    txt_contraseņa = document.getElementById("contraseņa");
    boton = document.getElementById("btn");
    boton.addEventListener("click", procesar);
    btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
    btn_cerrar_modal.addEventListener("click", cerrarVentana);
}
function procesar() {
    var str_usuario, usuario;
    str_usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(str_usuario);
    if (txt_usuario.value === usuario.usuario && md5(txt_contraseņa.value) === usuario.clave) {
        abrirVentana();
    }
}
function abrirVentana() {
    ventana.classList.remove("hidden");
}

function cerrarVentana() {
    location.href = "home.html";
}
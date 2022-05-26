var txt_nombre, txt_apellido, txt_correo, txt_celular, txt_usuario, txt_contraseņa, txt_confirmarcontra, btn_cerrar_modal;
let btn_submit;

window.onload = function () {

    txt_nombre = document.getElementById("nombre");
    txt_apellido = document.getElementById("apellido");
    txt_correo = document.getElementById("correo");
    txt_celular = document.getElementById("celular");
    txt_usuario = document.getElementById("usuario");
    txt_contraseņa = document.getElementById("contraseņa");
    txt_confirmarcontra = document.getElementById("c_contraseņa");
    btn_submit = document.getElementById("enviar");
    ventana = document.getElementById("ventana");
    btn_cerrar_modal = document.getElementById("btn_cerrar_modal");
    btn_submit.addEventListener("click", evaluar);
    btn_cerrar_modal.addEventListener("click", cerrarVentana);
}
function evaluar() {
    if (txt_contraseņa.value != txt_confirmarcontra.value) {
        console.log("contraseņas diferentes");
    } else {
        var usuario = {
            nombre: txt_nombre.value,
            apellido: txt_apellido.value,
            correo: txt_correo.value,
            celular: txt_celular.value,
            usuario: txt_usuario.value,
            clave: md5(txt_contraseņa.value)
        }

        localStorage.setItem("usuario", JSON.stringify(usuario));
        abrirVentana();

        txt_nombre.value = "";
        txt_apellido.value = "";
        txt_correo.value = "";
        txt_celular.value = "";
        txt_usuario.value = "";
        txt_contraseņa.value = "";
        txt_confirmarcontra.value = "";

    }
}
function abrirVentana() {
    ventana.classList.remove("hidden");
}

function cerrarVentana(evento) {
    location.href = "logeo.html";
}
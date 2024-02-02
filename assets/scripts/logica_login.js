document.addEventListener('DOMContentLoaded', function () {

    const correo = document.getElementById('emailLogin');
    const pass = document.getElementById('passLogin');

    if (correo === 'admin' & pass === 'admin') {
        window.location.href = "";
    } else {
        alert("Correo o clave incorrectas");
    }

});
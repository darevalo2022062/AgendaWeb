document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('agregar');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        var form = document.getElementById('formAgregar');
        form.classList.remove('hidden');
    });
});
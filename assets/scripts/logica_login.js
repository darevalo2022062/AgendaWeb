document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        var email = document.getElementById('emailLogin').value;
        var password = document.getElementById('passLogin').value;

        if (email === 'admin' && password === 'admin') {
            window.location.href = 'assets/pages/contacts.html';
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });
});
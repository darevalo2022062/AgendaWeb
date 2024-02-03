document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        var email = document.getElementById('emailLogin').value;
        var password = document.getElementById('passLogin').value;

        var fechaHoraActual = new Date();
        var fechaActual = fechaHoraActual.toLocaleDateString();
        var horaActual = fechaHoraActual.toLocaleTimeString();

        localStorage.setItem('FechaActual', fechaActual);
        localStorage.setItem('HoraActual', horaActual);

        if (email !== '' && password !== '') {
            window.location.href = 'assets/pages/contacts.html';
            localStorage.setItem('email', email);
            localStorage.setItem('pass', password);
        } else {
            alert('Alguno de los campos Esta vacío');
        }
    });
});
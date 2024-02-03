document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

});

function cargarDatos() {
    var emailP = document.getElementById('emailP');
    var passP = document.getElementById('passP');
    var sesionP = document.getElementById('sesionP');

    emailP.textContent = localStorage.getItem('email').valueOf();
    passP.textContent = localStorage.getItem('pass').valueOf();
    sesionP.textContent = localStorage.getItem('FechaActual').valueOf() + ' | ' + localStorage.getItem('HoraActual').valueOf();

    
}


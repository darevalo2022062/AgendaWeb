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

/*Detalles*/
function showDetails(name, number = '') {

    var fecha = '';
    var edad = '';
    var correo = '';

    switch (name) {
        case 'Sebastian Istacuy':
            fecha = '14/02/2022';
            edad = '18';
            correo = 'sebastian.Ista@gmail.com';
            break;
        case 'Diego Alvarez':
            fecha = '18/06/2022';
            edad = '18';
            correo = 'Dalvarez.mail@gmail.com';
            break;
        case 'Mami':
            fecha = '11/01/2019';
            edad = '41';
            correo = 'patty.cid.mail@gmail.com';
            break;
        case 'Carlos Arevalo':
            fecha = '30/04/2020';
            edad = '23';
            correo = 'Areva_carlos2000@gmail.com';
            break;
        case 'Alejandro Arevalo':
            fecha = '02/11/2021';
            edad = '28';
            correo = 'alejo1900@gmail.com';
            break;
        case 'Jose Carlos':
            fecha = '22/10/2018';
            edad = '20';
            correo = 'JosePaizarev@gmail.com';
            break;
        case 'Billy Rodriguez':
            fecha = '21/09/2019';
            edad = '24';
            correo = 'RodrigBilys19@gmail.com';
            break;
    }

    Swal.fire({
        title: name,
        text: 'Número: ' + number + '‎  | ‎ Fecha en que se agrego: ' + fecha + ' ‎ |‎  Edad: ' + edad + ' ‎ |‎  Correo: ' + correo,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}
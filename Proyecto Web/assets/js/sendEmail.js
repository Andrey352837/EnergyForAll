
$("#formulario").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        titulo: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        fecha: {
            required: true,
            date: true
        },
        genero: {
            required: true
        },
        mensaje: {
            required: true,
            minlength: 5,
            maxlength: 200
        }
    }
});

function verEstado() {

    if ($("#formulario").valid() == false) {
        return;
    }

    sendEmail();
}

function sendEmail() {

    var ok = false;

    let email = $("#email").val();
    let nombre = $("#nombre").val();
    let fecha = $("#fecha").val();
    let titulo = $("#titulo").val();
    let rango = $("#rango").val();
    let genero = '';
    let grados = [];
    let mensaje = $("#mensaje").val();
    let edad = $("#edad").html();

    if ($('#masculino').is(":checked")) {
        genero = $('#masculino').val();
    } else if ($('#femenino').is(":checked")) {
        genero = $('#femenino').val();
    } else {
        alert("Debe seleccionar un género");
    }

    let gradosAcademicos = document.getElementsByClassName("opcionCheck")//.find(grado=> grado.checked);

    Array.from(gradosAcademicos).forEach((el) => {
        if (el.checked) {
            grados.push(el.value);
        }
    });

    var gradosStr = '';

    grados.forEach(e => {
        gradosStr += `<li>${e}</li>`;
    })
   

    

}
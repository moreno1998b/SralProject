function cargarListadoAsistentes() {
    $(document).ready(function () {
        $.get('http://localhost:4000/asistente', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    + "<tr>"
                    + "<th scope='col'>" + data[i].identificacion + "</th>"
                    + "<td>" + data[i].nombre + "</td>"
                    + "<td>" + data[i].apellido + "</td>"
                    + "<td>" + data[i].sexo + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarAsistente" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='editarAsistente" + "(`" + data[i]._id + "`)' >" + "Editar" + "</button" + "</td>"
                    + " </tr>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoAsistentes();

function borrarAsistente(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/asistente/' + data, function (data, err) {
            if (err)
                alert(err);
            location.reload();
            // $("#alert").html($("#alert").html() +
            //     "<div class='alert alert-success' role='alert'>" +
            //     "Tienda eliminada con exito!" +
            //     "</div>");
        });
    });

}
function cargarListadoEventos() {
    $(document).ready(function () {
        $.get('http://localhost:4000/evento', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#eventoAsistencia").html($("#eventoAsistencia").html()
                    + "<option value='" + data[i]._id + "'>" + data[i].temaEvento + " </option>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoEventos();
function asociarAsistenteaEvento() {
    var documentoDigitado = document.getElementById("identificacion").value;
    var idEvento = document.getElementById("eventoAsistencia").value;
    debugger
    if (documentoDigitado !== null && documentoDigitado !== undefined) {


        $.get('http://localhost:4000/asistente/buscarPordocumento/' + documentoDigitado, function (data, err) {
            if (data !== null && data !== undefined) {
                alert(data._id);
            }
        });
    }

}
function editarAsistente(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/asistente/buscar/' + data, function (data, err) {
            if (err)
                // alert(err);
                document.getElementById("editData").removeAttribute("hidden");
            // document.getElementById().setAttribute
            if (data != null) {
                debugger
                var componentesFecha = data.fechaNacimiento.split("T");
                var date = componentesFecha[0];
                document.getElementById("_id").value = data._id;
                document.getElementById("nombreA").value = data.nombre;
                document.getElementById("identificacionA").value = data.identificacion;
                document.getElementById("tipoIdentificacionA").value = data.tipoIdentificacion;
                document.getElementById("apellidoA").value = data.apellido;
                document.getElementById("fechaNacimientoA").value = date;
                document.getElementById("correoA").value = data.correo;
                document.getElementById("sexoA").value = data.sexo;
                document.getElementById("celularA").value = data.celular;
                document.getElementById("passwordA").value = data.password;
            }
            //  location.reload();
            // $("#alert").html($("#alert").html() +
            //     "<div class='alert alert-success' role='alert'>" +
            //     "Tienda eliminada con exito!" +
            //     "</div>");
        });
    });

}
function guardarCambiosAsistente() {
    var _id = document.getElementById("_id").value;
    var nombre = document.getElementById("nombreA").value;
    var apellido = document.getElementById("apellidoA").value;
    var identificacion = document.getElementById("identificacionA").value;
    var tipoIdentificacion = document.getElementById("tipoIdentificacionA").value;
    var fechaNacimiento = document.getElementById("fechaNacimientoA").value;
    var correo = document.getElementById("correoA").value;
    var sexo = document.getElementById("sexoA").value;
    var celular = document.getElementById("celularA").value;
    var password = document.getElementById("passwordA").value;


    var cJson = '{' + JSON.stringify('nombre') + ':' + JSON.stringify(nombre) + ',' +
        JSON.stringify('apellido') + ':' + JSON.stringify(apellido) + ',' +
        JSON.stringify('identificacion') + ':' + JSON.stringify(identificacion) + ',' +
        JSON.stringify('tipoIdentificacion') + ':' + JSON.stringify(tipoIdentificacion) + ',' +
        JSON.stringify('fechaNacimiento') + ':' + JSON.stringify(fechaNacimiento) + ',' +
        JSON.stringify('correo') + ':' + JSON.stringify(correo) + ',' +
        JSON.stringify('sexo') + ':' + JSON.stringify(sexo) + ',' +
        JSON.stringify('password') + ':' + JSON.stringify(password) + ',' +
        JSON.stringify('celular') + ':' + JSON.stringify(celular) + '}';
    console.log(cJson);

    $.ajax({
        url: "http://localhost:4000/asistente/" + _id,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        data: cJson,
        success: 'Datos del asistente modificados',
        error: 'Error'
    });
    cargarListadoAsistentes();
    // location.reload();

}
function cancelEdit() {
    $("#editData").attr('hidden');
    location.reload();

}
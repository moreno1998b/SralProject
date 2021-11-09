function cargarListadoAdmins() {
    $(document).ready(function () {
        $.get('http://localhost:4000/administrador', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    + "<tr>"
                    + "<th scope='col'>" + data[i].identificacion + "</th>"
                    + "<td>" + data[i].nombre + "</td>"
                    + "<td>" + data[i].apellido + "</td>"
                    + "<td>" + data[i].sexo + "</td>"
                    + "<td>" + data[i].correo + "</td>"
                    + "<td>" + data[i].usuario + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarAdmin" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='editarAdmin" + "(`" + data[i]._id + "`)' >" + "Editar" + "</button" + "</td>"
                    + " </tr>");
            }
        });
    });

    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoAdmins();

function borrarAdmin(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/administrador/' + data, function (data, err) {
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
function editarAdmin(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/administrador/buscar/' + data, function (data, err) {
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
                document.getElementById("apellidoA").value = data.apellido;
                document.getElementById("fechaNacimientoA").value = date;
                document.getElementById("correoA").value = data.correo;
                document.getElementById("sexoA").value = data.sexo;
                document.getElementById("telefonoA").value = data.telefono;
                document.getElementById("usuarioA").value = data.usuario;
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
function guardarCambiosAdmin() {
    var _id = document.getElementById("_id").value;
    var nombre = document.getElementById("nombreA").value;
    var apellido = document.getElementById("apellidoA").value;
    var identificacion = document.getElementById("identificacionA").value;
    var fechaNacimiento = document.getElementById("fechaNacimientoA").value;
    var correo = document.getElementById("correoA").value;
    var sexo = document.getElementById("sexoA").value;
    var telefono = document.getElementById("telefonoA").value;
    var usuario = document.getElementById("usuarioA").value;
    var password = document.getElementById("passwordA").value;


    var cJson = '{' + JSON.stringify('nombre') + ':' + JSON.stringify(nombre) + ',' +
        JSON.stringify('apellido') + ':' + JSON.stringify(apellido) + ',' +
        JSON.stringify('identificacion') + ':' + JSON.stringify(identificacion) + ',' +
        JSON.stringify('fechaNacimiento') + ':' + JSON.stringify(fechaNacimiento) + ',' +
        JSON.stringify('correo') + ':' + JSON.stringify(correo) + ',' +
        JSON.stringify('sexo') + ':' + JSON.stringify(sexo) + ',' +
        JSON.stringify('usuario') + ':' + JSON.stringify(usuario) + ',' +
        JSON.stringify('password') + ':' + JSON.stringify(password) + ',' +
        JSON.stringify('telefono') + ':' + JSON.stringify(telefono) + '}';
    console.log(cJson);

    $.ajax({
        url: "http://localhost:4000/administrador/" + _id,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        data: cJson,
        success: 'Datos del admin modificados',
        error: 'Error'
    });
    cargarListadoAdmins();
    location.reload();

}
function cancelEdit() {
    $("#editData").attr('hidden');
    location.reload();

}
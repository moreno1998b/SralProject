function cargarListadoconferencistas() {
    $(document).ready(function () {
        $.get('http://localhost:4000/conferencista', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    + "<tr>"
                    + "<th scope='col'>" + data[i].identificacion + "</th>"
                    + "<td>" + data[i].nombre + "</td>"
                    + "<td>" + data[i].apellido + "</td>"
                    + "<td>" + data[i].sexo + "</td>"
                    + "<td>" + data[i].profesion + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarConferencista" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='editarConferencista" + "(`" + data[i]._id + "`)' >" + "Editar" + "</button" + "</td>"
                    + " </tr>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoconferencistas();

function borrarConferencista(data) {

    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/conferencista/' + data, function (data, err) {
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


function cancelEdit() {
    $("#editData").attr('hidden');
    location.reload();

}
function editarConferencista(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/conferencista/buscar/' + data, function (data, err) {
            if (err)
                // alert(err);
                document.getElementById("editData").removeAttribute("hidden");
            // document.getElementById().setAttribute
            if (data != null) {
                debugger
                var componentesFecha = data.fechaNacimiento.split("T");
                var date = componentesFecha[0];
                // alert(data.capacitadoresParticipantes);
                document.getElementById("_id").value = data._id;
                document.getElementById("nombreA").value = data.nombre;
                document.getElementById("identificacionA").value = data.identificacion;
                document.getElementById("apellidoA").value = data.apellido;
                document.getElementById("fechaNacimientoA").value = date;
                document.getElementById("correoA").value = data.correo;
                document.getElementById("sexoA").value = data.sexo;
                document.getElementById("celularA").value = data.celular;
                document.getElementById("profesionA").value = data.profesion;
                document.getElementById("passwordA").value = data.password;
                document.getElementById("temaConferenciaA").value = data.temaConferencia;

            }
        });
    });

}
function guardarCambiosConferencista() {
    var _id = document.getElementById("_id").value;
    var nombre = document.getElementById("nombreA").value;
    var apellido = document.getElementById("apellidoA").value;
    var identificacion = document.getElementById("identificacionA").value;
    var fechaNacimiento = document.getElementById("fechaNacimientoA").value;
    var correo = document.getElementById("correoA").value;
    var sexo = document.getElementById("sexoA").value;
    var celular = document.getElementById("celularA").value;
    var profesion = document.getElementById("profesionA").value;
    var password = document.getElementById("passwordA").value;
    var temaConferencia = document.getElementById("temaConferenciaA").value;


    var cJson = '{' + JSON.stringify('nombre') + ':' + JSON.stringify(nombre) + ',' +
        JSON.stringify('apellido') + ':' + JSON.stringify(apellido) + ',' +
        JSON.stringify('identificacion') + ':' + JSON.stringify(identificacion) + ',' +
        JSON.stringify('fechaNacimiento') + ':' + JSON.stringify(fechaNacimiento) + ',' +
        JSON.stringify('correo') + ':' + JSON.stringify(correo) + ',' +
        JSON.stringify('sexo') + ':' + JSON.stringify(sexo) + ',' +
        JSON.stringify('celular') + ':' + JSON.stringify(celular) + ',' +
        JSON.stringify('password') + ':' + JSON.stringify(password) + ',' +
        JSON.stringify('profesion') + ':' + JSON.stringify(profesion) + ',' +
        JSON.stringify('temaConferencia') + ':' + JSON.stringify(temaConferencia) + '}';
    console.log(cJson);

    $.ajax({
        url: "http://localhost:4000/conferencista/" + _id,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        data: cJson,
        success: 'Datos del conferencista modificados',
        error: 'Error'
    });
    cargarListadoconferencistas();
    location.reload();

}
function buscarMisEventos() {
    var idUsuarioSesion = sessionStorage.getItem("idUsuarioSesion");
    $.get('http://localhost:4000/evento/buscarEventosporConferencista/' + idUsuarioSesion, function (data, err) {
        for (var i = 0; i < data.length; i++) {
            var fechaEv = data[i].fechaEvento;
            var fechaEvArr = fechaEv.split("T");
            fechaEv = fechaEvArr[0];
            $("#bodyTableEventosAsociados").html($("#bodyTableEventosAsociados").html()
                + "<tr>"
                + "<th scope='col'>" + data[i].temaEvento + "</th>"
                + "<td>" + fechaEv + "</td>"
                + "<td><strong>" + (data[i].materialUrl != null ? "SI" : "NO") + "</strong></td>"
                + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='onclicAbrircargaMaterial" + "(`" + data[i]._id + "`)' >" + "Cargar Material" + "</button" + "</td>"
                + " </tr>");
        }
    });
}
function onclicAbrircargaMaterial(idEvento) {
    document.getElementById("cargarMateriales").hidden = false;
    document.getElementById("_id").value = idEvento;
}
function guardarMaterialTrabajo() {
    var idEvento = document.getElementById("_id").value;
    var materialUrl = document.getElementById("urlMaterial").value;
    debugger
    $.get('http://localhost:4000/evento/buscar/' + idEvento, function (data, err) {


        var cJson = '{' + JSON.stringify('temaEvento') + ':' + JSON.stringify(data.temaEvento) + ',' +
            JSON.stringify('fechaEvento') + ':' + JSON.stringify(data.fechaEvento) + ',' +
            JSON.stringify('capacitadoresParticipantes') + ':' + JSON.stringify(data.capacitadoresParticipantes) + ',' +
            JSON.stringify('duracion') + ':' + JSON.stringify(data.duracion) + ',' +
            JSON.stringify('materialUrl') + ':' + JSON.stringify(materialUrl) + '}';
        console.log(cJson);

        $.ajax({
            url: "http://localhost:4000/evento/" + idEvento,
            type: 'PUT',
            contentType: "application/json;charset=utf-8",
            data: cJson,
            success: sendEmailTareaCargada(idEvento, data.temaEvento),
            error: 'Error'
        });
    });

}
function sendEmailTareaCargada(idEvento, temaEvento) {
    alert(idEvento);
    $.get('http://localhost:4000/asistentesEvento/buscarIdAsistentesPorEvento/' + idEvento, function (dataAsistentes, err) {
        // bodyTableAsistentesEvento
        $.get('http://localhost:4000/evento/buscar/' + idEvento, function (data, err) {
            alert(data.materialUrl);
            for (let index = 0; index < dataAsistentes.length; index++) {

                $.get('http://localhost:4000/asistente/buscar/' + dataAsistentes[index].fk_id_asistente, function (dataAsist, err) {
                    if (dataAsist != null) {
                        Email.send({
                            Host: "smtp.gmail.com",
                            Username: "correodepruebaneex@gmail.com",
                            Password: "ltcjftkjuuqrsvio",
                            To: dataAsist.correo,
                            From: "correodepruebaneex@gmail.com",
                            Subject: "Notificación Nuevo Material de trabajo",
                            Body: dataAsist.nombre + " " + dataAsist.apellido + " te informamos que se ha adjuntado el siguiente "
                                + " material de trabajo :" + data.materialUrl + "   para el evento " + temaEvento + ".",
                        }).then(
                            message => alert("mail sent successfully")
                        );

                        ;
                    }
                });

            }
            document.getElementById("btnLimpiar").hidden = false;
        });


    });





}
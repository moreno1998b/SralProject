function cargarListadoConferencistas() {
    $(document).ready(function () {
        $.get('http://localhost:4000/conferencista', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#capacitadoresParticipantes").html($("#capacitadoresParticipantes").html()
                    + "<option value='"+data[i]._id+"'>"+ data[i].nombre +"  "+data[i].apellido +" </option>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoConferencistas();
function cargarListadoEventos() {
    $(document).ready(function () {
        $.get('http://localhost:4000/evento', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                var fecha=data[i].fechaEvento;
                 var fechaArr=fecha.split("T");
                 fecha=fechaArr[0];
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                + "<tr>"
                + "<th scope='col'>" +data[i].temaEvento + "</th>"
                + "<td>" + fecha + "</td>"
                + "<td>" + data[i].duracion + "</td>"
    
                + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarEvento" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='buscarTienda" + "(`" + data[i]._id + "`)' disabled>" + "Editar" + "</button" + "</td>"
                + " </tr>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoEventos();


function borrarEvento(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/evento/' + data, function (data, err) {
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
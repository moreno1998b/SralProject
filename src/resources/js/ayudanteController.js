function cargarListadoAyudantes() {
    $(document).ready(function () {
        $.get('http://localhost:4000/ayudante', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    + "<tr>"
                    + "<th scope='col'>" +data[i].identificacion + "</th>"
                    + "<td>" + data[i].nombre + "</td>"
                    + "<td>" + data[i].apellido + "</td>"
                    + "<td>" + data[i].sexo + "</td>"
                    + "<td>" + data[i].codigoAyudante + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarAyudante" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='buscarTienda" + "(`" + data[i]._id + "`)' disabled>" + "Editar" + "</button" + "</td>"
                    + " </tr>");
            }
        });
    });
//    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoAyudantes();

function borrarAyudante(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/ayudante/' + data, function (data, err) {
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

    function init(newWrap) {
        alert("Hola Mundo");
    }

    function cargarListadoEventos() {
        $(document).ready(function () {
            $.get('http://localhost:4000/evento', function (data, err) {
                for (var i = 0; i < data.length; i++) {
                    var fecha=data[i].fechaEvento;
                     var fechaArr=fecha.split("T");
                     fecha=fechaArr[0];
                     console.log(data[i].temaEvento+``+fecha);
                    // $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    // + "<tr>"
                    // + "<th scope='col'>" +data[i].temaEvento + "</th>"
                    // + "<td>" + fecha + "</td>"
                    // + "<td>" + data[i].duracion + "</td>"
        
                    // + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarEvento" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    // + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='buscarTienda" + "(`" + data[i]._id + "`)' disabled>" + "Editar" + "</button" + "</td>"
                    // + " </tr>");
                }
            });
        });
        //    document.getElementById('editForm').setAttribute('hidden',);
    }
    
init();
cargarListadoEventos();
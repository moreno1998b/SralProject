function buscarTienda(idTienda) {
    console.log('entre');
    $(document).ready(function () {
        $.get('http://localhost:4000/tiendas/buscar/' + idTienda, function (data, err) {

            alert(data.nombre);

        });
    });
}
function iniciarSesion() {
    try {

        var idEscodigo;
        var correo = document.getElementById("correo").value;
        var password = document.getElementById("password").value;
        var rolUser = document.getElementById("rolUser").value;
        if (rolUser === null || rolUser === undefined || rolUser === '#') {
            throw "Debe seleccionar el rol de ingreso";
        }
        if (correo === null || correo === '' || correo === undefined) {
            throw "Debe digitar su correo electronico";
        }
        if (password === null || password === '' || password === undefined) {
            throw "Debe digitar su contraseña";
        }
        if (rolUser != null && rolUser == "1") {


            $.get('http://localhost:4000/asistente/buscarPorEmail/' + correo + "/" + password, function (dataAsistente, err) {
                debugger
                if (dataAsistente != null) {
                    sessionStorage.setItem('idUsuarioSesion', dataAsistente._id);
                    sessionStorage.setItem('rolUser', rolUser);
                    location.replace('Inicio.html');
                } else {
                    throw "Datos del asistente no encontrados";
                }

            });
        }
        if (rolUser != null && rolUser == "2") {


            $.get('http://localhost:4000/administrador/buscarPorEmail/' + correo + "/" + password, function (data, err) {
                debugger
                if (data != null) {
                    sessionStorage.setItem('idUsuarioSesion', data._id);
                    sessionStorage.setItem('rolUser', rolUser);

                    location.replace('Inicio.html');
                } else {
                    throw "Datos del admin no encontrados";
                }

            });
        }

        if (rolUser != null && rolUser == "3") {


            $.get('http://localhost:4000/ayudante/buscarPorEmail/' + correo + "/" + password, function (dataAyudante, err) {
                debugger
                if (dataAyudante != null) {
                    sessionStorage.setItem('idUsuarioSesion', dataAyudante._id);
                    sessionStorage.setItem('rolUser', rolUser);
                    location.replace('Inicio.html');
                } else {
                    throw "Datos del ayudante no encontrados";
                }

            });
        }
        if (rolUser != null && rolUser == "4") {

            $.get('http://localhost:4000/conferencista/buscarPorEmail/' + correo + "/" + password, function (dataConferencista, err) {
                debugger
                if (dataConferencista != null) {
                    sessionStorage.setItem('idUsuarioSesion', dataConferencista._id);
                    sessionStorage.setItem('rolUser', rolUser);
                    location.replace('Inicio.html');
                } else {
                    throw "Datos del Conferencista no encontrados";
                }

            });
        }
    } catch (error) {
        sessionStorage.clear();
        alert(error);
        $("#errCard").html($("#errCard").html()
            + "<div class='alert alert-danger' role='alert' >"
            + error
            + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>" +
            + "</div>"
        );

    }
}
function cerrarSesion() {
    sessionStorage.clear();
    location.replace('Login.html');
}
function buscarDataUserSesion() {
    var rolUser = sessionStorage.getItem("rolUser");
    var idUsuarioSesion = sessionStorage.getItem("idUsuarioSesion");
    var rol;
    var url;
    if (rolUser == 1) {
        rol = "Asistente";
        url = 'http://localhost:4000/asistente/buscar/' + idUsuarioSesion;
        $.get(url, function (dataAsistente, err) {
            debugger
            if (dataAsistente != null) {
                sessionStorage.setItem('nameUserSesion', dataAsistente.nombre + " " + dataAsistente.apellido);
                document.getElementById("nameUserSesion").innerHTML = `<strong>${dataAsistente.nombre} ${dataAsistente.apellido}</strong>`;
                document.getElementById("rol").innerHTML = `${rol}`;
            } else {
                throw "Datos del Conferencista no encontrados";
            }

        });
    } else if (rolUser == 2) {
        rol = "Administrador";
        debugger
        url = 'http://localhost:4000/administrador/buscar/' + idUsuarioSesion;
        $.get(url, function (dataAdmin, err) {
            debugger
            if (dataAdmin != null) {
                sessionStorage.setItem('nameUserSesion', dataAdmin.nombre + " " + dataAdmin.apellido);
                document.getElementById("nameUserSesion").innerHTML = `<strong>${dataAdmin.nombre} ${dataAdmin.apellido}</strong>`;
                document.getElementById("rol").innerHTML = `${rol}`;

            } else {
                throw "Datos del Conferencista no encontrados";
            }

        });
    } else if (rolUser == 3) {
        rol = "Ayudante";
        debugger
        url = 'http://localhost:4000/ayudante/buscar/' + idUsuarioSesion;
        $.get(url, function (dataAdmin, err) {
            debugger
            if (dataAdmin != null) {
                sessionStorage.setItem('nameUserSesion', dataAdmin.nombre + " " + dataAdmin.apellido);
                document.getElementById("nameUserSesion").innerHTML = `<strong>${dataAdmin.nombre} ${dataAdmin.apellido}</strong>`;
                document.getElementById("rol").innerHTML = `${rol}`;

            } else {
                throw "Datos del Conferencista no encontrados";
            }

        });

    } else if (rolUser == 4) {
        rol = "Conferencista";
        debugger
        url = 'http://localhost:4000/conferencista/buscar/' + idUsuarioSesion;
        $.get(url, function (dataAdmin, err) {
            debugger
            if (dataAdmin != null) {
                sessionStorage.setItem('nameUserSesion', dataAdmin.nombre + " " + dataAdmin.apellido);
                document.getElementById("nameUserSesion").innerHTML = `<strong>${dataAdmin.nombre} ${dataAdmin.apellido}</strong>`;
                document.getElementById("rol").innerHTML = `${rol}`;

            } else {
                throw "Datos del Conferencista no encontrados";
            }

        });
    }

}
function permisosUserInicio() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
        document.getElementById("regEventos").hidden = true;
        document.getElementById("regConferencistas").hidden = true;
        document.getElementById("regAyudantes").hidden = true;
        document.getElementById("regAdministradores").hidden = true;
    }
    if (rolUser !== "2" && rolUser !== "3") {
        document.getElementById("regbuscarAsistentesEventos").hidden = true;
        document.getElementById("regAsistentesEventos").hidden = true;

    }
    if (rolUser !== "4") {
        document.getElementById("regEventosConferencistas").hidden = true;

    }

}
function permisosUserPerfil() {
    var rolUser = sessionStorage.getItem("rolUser");
    permisosUserInicio();
    if (rolUser !== "4") {
        document.getElementById("listCapacitaciones").hidden = true;
    }
}
function permisosUserRegAsistentes() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    permisosUserInicio();
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
    }
    if (rolUser !== "2") {
        document.getElementById("list").hidden = true;
    }
}
function permisosUserRegAyudantes() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    permisosUserInicio();
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
    }
    if (rolUser !== "2") {
        document.getElementById("list").hidden = true;
    }
}
function permisosUserRegAdministradores() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    permisosUserInicio();
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
    }
    if (rolUser !== "2") {
        document.getElementById("list").hidden = true;
    }
}
function permisosUserRegConferencistas() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    permisosUserInicio();
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
    }
    if (rolUser !== "2") {
        document.getElementById("list").hidden = true;
    }
    if (rolUser !== "4") {
        document.getElementById("regEventosConferencistas").hidden = true;

    }
}
function permisosUserRegEventos() {
    var rolUser = sessionStorage.getItem("rolUser");
    debugger
    permisosUserInicio();
    if (rolUser !== "3") {
        document.getElementById("regAsistentesRolAyudante").hidden = true;
    }
    if (rolUser !== "2") {

        document.getElementById("regControlAsistentes").hidden = true;
    }
    if (rolUser !== "2") {
        document.getElementById("listEventos").hidden = true;
    }
}
function buscarInfoAdministrador() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");

    $.get('http://localhost:4000/administrador/buscar/' + idUser, function (data, err) {
        if (data !== null && data !== undefined) {
            var fecha = data.fechaNacimiento;
            var fechaArr = fecha.split("T");
            fecha = fechaArr[0];
            document.getElementById("nameCard").innerHTML = "<strong>" + data.nombre + " " + data.apellido + "</strong>";
            document.getElementById("identifacionSalida").innerHTML = "<strong>" + data.identificacion + "</strong>";
            document.getElementById("nombreSalida").innerHTML = "<strong>" + data.nombre + "</strong>";
            document.getElementById("apellidoSalida").innerHTML = "<strong>" + data.apellido + "</strong>";
            document.getElementById("sexoSalida").innerHTML = "<strong>" + data.sexo + "</strong>";
            document.getElementById("fechaNacimientoSalida").innerHTML = "<strong>" + fecha + "</strong>";
            document.getElementById("correoSalida").innerHTML = "<strong>" + data.correo + "</strong>";
            document.getElementById("celularSalida").innerHTML = "<strong>" + data.telefono + "</strong>";
            document.getElementById("passwordSalida").innerHTML = "<strong>" + (data.password === undefined ? 'SIN ASIGNAR' : data.password) + "</strong>";
        }

    });
}
function buscarInfoConferencista() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");

    $.get('http://localhost:4000/conferencista/buscar/' + idUser, function (data, err) {
        if (data !== null && data !== undefined) {
            var fecha = data.fechaNacimiento;
            var fechaArr = fecha.split("T");
            fecha = fechaArr[0];
            document.getElementById("nameCard").innerHTML = "<strong>" + data.nombre + " " + data.apellido + "</strong>";
            document.getElementById("identifacionSalida").innerHTML = "<strong>" + data.identificacion + "</strong>";
            document.getElementById("nombreSalida").innerHTML = "<strong>" + data.nombre + "</strong>";
            document.getElementById("apellidoSalida").innerHTML = "<strong>" + data.apellido + "</strong>";
            document.getElementById("sexoSalida").innerHTML = "<strong>" + data.sexo + "</strong>";
            document.getElementById("fechaNacimientoSalida").innerHTML = "<strong>" + fecha + "</strong>";
            document.getElementById("correoSalida").innerHTML = "<strong>" + data.correo + "</strong>";
            document.getElementById("celularSalida").innerHTML = "<strong>" + data.celular + "</strong>";
            document.getElementById("passwordSalida").innerHTML = "<strong>" + (data.password === undefined ? 'SIN ASIGNAR' : data.password) + "</strong>";
        }

    });
}
function buscarInfoAyudante() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");

    $.get('http://localhost:4000/ayudante/buscar/' + idUser, function (data, err) {
        if (data !== null && data !== undefined) {
            var fecha = data.fechaNacimiento;
            var fechaArr = fecha.split("T");
            fecha = fechaArr[0];
            document.getElementById("nameCard").innerHTML = "<strong>" + data.nombre + " " + data.apellido + "</strong>";
            document.getElementById("identifacionSalida").innerHTML = "<strong>" + data.identificacion + "</strong>";
            document.getElementById("nombreSalida").innerHTML = "<strong>" + data.nombre + "</strong>";
            document.getElementById("apellidoSalida").innerHTML = "<strong>" + data.apellido + "</strong>";
            document.getElementById("sexoSalida").innerHTML = "<strong>" + data.sexo + "</strong>";
            document.getElementById("fechaNacimientoSalida").innerHTML = "<strong>" + fecha + "</strong>";
            document.getElementById("correoSalida").innerHTML = "<strong>" + data.correo + "</strong>";
            document.getElementById("celularSalida").innerHTML = "<strong>" + data.celular + "</strong>";
            document.getElementById("passwordSalida").innerHTML = "<strong>" + (data.password === undefined ? 'SIN ASIGNAR' : data.password) + "</strong>";
        }

    });
}
function buscarInfoAsistente() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");

    $.get('http://localhost:4000/asistente/buscar/' + idUser, function (data, err) {
        if (data !== null && data !== undefined) {
            var fecha = data.fechaNacimiento;
            var fechaArr = fecha.split("T");
            fecha = fechaArr[0];
            document.getElementById("nameCard").innerHTML = "<strong>" + data.nombre + " " + data.apellido + "</strong>";
            document.getElementById("identifacionSalida").innerHTML = "<strong>" + data.identificacion + "</strong>";
            document.getElementById("nombreSalida").innerHTML = "<strong>" + data.nombre + "</strong>";
            document.getElementById("apellidoSalida").innerHTML = "<strong>" + data.apellido + "</strong>";
            document.getElementById("sexoSalida").innerHTML = "<strong>" + data.sexo + "</strong>";
            document.getElementById("fechaNacimientoSalida").innerHTML = "<strong>" + fecha + "</strong>";
            document.getElementById("correoSalida").innerHTML = "<strong>" + data.correo + "</strong>";
            document.getElementById("celularSalida").innerHTML = "<strong>" + data.celular + "</strong>";
            document.getElementById("passwordSalida").innerHTML = "<strong>" + (data.password === undefined ? 'SIN ASIGNAR' : data.password) + "</strong>";
        }

    });
}
function buscarConferenciasRealizadas() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");
    $.get('http://localhost:4000/evento/buscarEventosporConferencista/' + idUser, function (dataEvento, err) {
        if (dataEvento !== null && dataEvento !== undefined) {

            for (var i = 0; i < dataEvento.length; i++) {
                var fechaEv = dataEvento[i].fechaEvento;
                var fechaEvArr = fechaEv.split("T");
                fechaEv = fechaEvArr[0];
                $("#bodyTableEventosRealizados").html($("#bodyTableEventosRealizados").html()
                    + "<tr>"
                    + "<th scope='col'>" + dataEvento[i].temaEvento + "</th>"
                    + "<td>" + fechaEv + "</td>"
                    + "<td>" + dataEvento[i].duracion + "</td>"
                    + " </tr>");
            }
        }

    });
}
function buscarEventosAsociadosAsistente() {
    var idUser = sessionStorage.getItem("idUsuarioSesion");

    $.get('http://localhost:4000/asistentesEvento/buscarEventosAsistente/' + idUser, function (dataAsistentes, err) {
        // bodyTableAsistentesEvento
        if (dataAsistentes !== null) {//si entra aqui, es pq encontro asistentes al evento.
            //sacar el id del asistente, y en un ciclo for, buscar informacion de cada asistente y pegarla en un array
            //luego recorrer el array, para mostrar los datos en la tabla.


            for (let index = 0; index < dataAsistentes.length; index++) {

                $.get('http://localhost:4000/evento/buscar/' + dataAsistentes[index].fk_id_evento, function (dataEvento, err) {
                    var fechaArray = dataEvento.fechaEvento;
                    fechaE=fechaArray.substring(0,10);
                    $("#eventosAsociadosAsistente").html($("#eventosAsociadosAsistente").html()
                        + `<div class="card text-white bg-primary mb-3 mr-3" style="max-width: 18rem;">
                       <div class="card-header"></div>
                       <div class="card-body">
                         <h5 class="card-title">${dataEvento.temaEvento}</h5>
                         <p class="card-text">Fecha del Evento : ${fechaE}   </p>
                         <p class="card-text">Duración : ${dataEvento.duracion}  minutos. </p>
                       </div>
                     </div>`);

                });

            }


        }
    });
}
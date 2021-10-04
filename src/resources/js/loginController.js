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


        var correo = document.getElementById("correo").value;
        var password = document.getElementById("password").value;

        if (correo === null || correo === '' || correo === undefined) {
            throw "Debe digitar su correo electronico";
        }
        if (password === null || password === '' || password === undefined) {
            throw "Debe digitar su contraseña";
        }



        $(document).ready(function () {
            $.get('http://localhost:4000/administrador/buscarPorEmail/' + correo + "/" + password, function (data, err) {
                debugger
                if (data != null) {
                    location.replace('PerfilUsuario.html');
                }

            });

        });


    } catch (error) {
        alert(error);
        $("#errCard").html($("#errCard").html()
            + "<div class='alert alert-danger' role='alert' >"
            + error
            + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>" +
            + "</div>"
        );

    }
}
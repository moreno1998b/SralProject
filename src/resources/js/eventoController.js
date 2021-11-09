function cargarListadoConferencistas() {
    $(document).ready(function () {
        $.get('http://localhost:4000/conferencista', function (data, err) {
            for (var i = 0; i < data.length; i++) {
                $("#capacitadoresParticipantes").html($("#capacitadoresParticipantes").html()
                    + "<option value='" + data[i]._id + "'>" + data[i].nombre + "  " + data[i].apellido + " </option>");
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
                var fecha = data[i].fechaEvento;
                var fechaArr = fecha.split("T");
                fecha = fechaArr[0];
                $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
                    + "<tr>"
                    + "<th scope='col'>" + data[i].temaEvento + "</th>"
                    + "<td>" + fecha + "</td>"
                    + "<td>" + data[i].duracion + "</td>"

                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarEvento" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
                    + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='editarEvento" + "(`" + data[i]._id + "`)' >" + "Editar" + "</button" + "</td>"
                    + " </tr>");
            }
        });
    });
    //    document.getElementById('editForm').setAttribute('hidden',);
}
cargarListadoEventos();

function buscarEventos() {
    var fecha = document.getElementById("mesbusqueda").value;
    var fechaComponentes = fecha.split("-");
    var year = fechaComponentes[0];
    var mes = (fechaComponentes[1] - 1);
    var mesString = "";
    var makeUp = "";

    if (mes == 0) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        </tr>
        <tr>
        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
        </tr>
        <tr>
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
        </tr>
        <tr>
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
        </tr>
        <tr>
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        </tr>
        <tr>
        <td id="31">31</td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Enero";

    } else if (mes == 1) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>
        </tr>
        <tr>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
 
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        </tr>
        <tr>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
    
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        </tr>
        <tr>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        </tr>
        <tr>
        <td id="28">28</td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Febrero";
    } else if (mes == 2) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>
        </tr>
        <tr>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
 
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        </tr>
        <tr>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
    
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        </tr>
        <tr>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        </tr>
        <tr>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td id="31">31</td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Marzo";
    } else if (mes == 3) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
        </tr>
        <tr>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>   
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
        <td id="10">10</td>
        </tr>
        <tr>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
        <td id="17">17</td>
        </tr>
        <tr>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
        <td id="24">24</td>
        </tr>
        <tr>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td class="nil"></td>


        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Abril";
    } else if (mes == 4) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        </tr>
        <tr>
        <td id="2">2</td>
        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>   
        <td id="7">7</td>       
        <td id="8">8</td>
        </tr>
        <tr>
        <td id="9">9</td>
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        </tr>
        <tr>
        <td id="16">16</td>
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        </tr>
        <tr>
        <td id="23">23</td>
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        </tr>
        <tr>
        <td id="30">30</td>
        <td id="31">31</td>


        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Mayo";
    } else if (mes == 5) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>

        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        </tr>
        <tr>
        <td id="6">6</td>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
   
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        </tr>
        <tr>
        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
 
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        </tr>
        <tr>
        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        </tr>
        <tr>
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Junio";
    } else if (mes == 6) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
        </tr>
        <tr>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>   
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
        <td id="10">10</td>
        </tr>
        <tr>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
        <td id="17">17</td>
        </tr>
        <tr>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
        <td id="24">24</td>
        </tr>
        <tr>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td id="31">31</td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Julio";
    } else if (mes == 7) {
        makeUp = `
        <tr>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
  
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>   
        <td id="7">7</td>      
        </tr>
        <tr> 
        <td id="8">8</td>
        <td id="9">9</td>
        <td id="10">10</td>

        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        <td id="14">14</td>    
        </tr>
        <tr>  
        <td id="15">15</td>
        <td id="16">16</td>
        <td id="17">17</td>

        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        <td id="21">21</td> 
        </tr>
        <tr>
        <td id="22">22</td>
        <td id="23">23</td>
        <td id="24">24</td>
  
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        <td id="28">28</td>
        </tr>
        <tr>
        <td id="29">29</td>
        <td id="30">30</td>
        <td id="31">31</td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Agosto";
    } else if (mes == 8) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>

        <td id="3">3</td>
        <td id="4">4</td>
        </tr>
        <tr>
        <td id="5">5</td>

        <td id="6">6</td>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
   
        <td id="10">10</td>
        <td id="11" >11</td>
        </tr>
        <tr>
        <td id="12">12</td>

        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
 
        <td id="17">17</td>
        <td id="18">18</td>
        </tr>
        <tr>
        <td id="19">19</td>

        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        </tr>
        <tr>
        <td id="26">26</td>
  
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td class="nil"></td>
        <td class="nil"></td>

        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Septiembre";
    } else if (mes == 9) {
        makeUp = `
<tr>
<td class="nil"></td>
<td class="nil"></td>
<td class="nil"></td>
<td class="nil"></td>
<td class="nil"></td>
<td id="01">1</td>
<td id="02">2</td>
</tr>
<tr>
<td id="03">3</td>
<td id="04">4</td>
<td id="05">5</td>
<td id="06">6</td>
<td id="07">7</td>

<td id="08">8</td>
<td id="09">9</td>
</tr>
<tr>
<td id="10">10</td>
<td id="11" >11</td>
<td id="12">12</td>
<td id="13">13</td>
<td id="14">14</td>

<td id="15">15</td>
<td id="16">16</td>
</tr>
<tr>
<td id="17">17</td>
<td id="18">18</td>
<td id="19">19</td>
<td id="20">20</td>
<td id="21">21</td>

<td id="22">22</td>
<td id="23">23</td>
</tr>
<tr>
<td id="24">24</td>
<td id="25">25</td>
<td id="26">26</td>
<td id="27">27</td>
<td id="28">28</td>
<td id="29">29</td>
<td id="30">30</td>
</tr>`;
        mesString = "Octubre";
        document.getElementById("nilbody").innerHTML = makeUp;
    } else if (mes == 10) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>
        </tr>
        <tr>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
 
        <td id="10">10</td>
        <td id="11" >11</td>
        <td id="12">12</td>
        <td id="13">13</td>
        </tr>
        <tr>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
    
        <td id="17">17</td>
        <td id="18">18</td>
        <td id="19">19</td>
        <td id="20">20</td>
        </tr>
        <tr>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        <td id="26">26</td>
        <td id="27">27</td>
        </tr>
        <tr>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Noviembre";
    } else if (mes == 11) {
        makeUp = `
        <tr>
        <td class="nil"></td>
        <td class="nil"></td>
        <td class="nil"></td>
        <td id="1">1</td>
        <td id="2">2</td>

        <td id="3">3</td>
        <td id="4">4</td>
        </tr>
        <tr>
        <td id="5">5</td>

        <td id="6">6</td>
        <td id="7">7</td>       
        <td id="8">8</td>
        <td id="9">9</td>
   
        <td id="10">10</td>
        <td id="11" >11</td>
        </tr>
        <tr>
        <td id="12">12</td>

        <td id="13">13</td>
        <td id="14">14</td>      
        <td id="15">15</td>
        <td id="16">16</td>
 
        <td id="17">17</td>
        <td id="18">18</td>
        </tr>
        <tr>
        <td id="19">19</td>

        <td id="20">20</td>
        <td id="21">21</td> 
        <td id="22">22</td>
        <td id="23">23</td>
   
        <td id="24">24</td>
        <td id="25">25</td>
        </tr>
        <tr>
        <td id="26">26</td>
  
        <td id="27">27</td>
        <td id="28">28</td>
        <td id="29">29</td>
        <td id="30">30</td>
        <td id="31">31</td>
        <td class="nil"></td>

        </tr>`;
        document.getElementById("nilbody").innerHTML = makeUp;
        mesString = "Diciembre";
    }
    document.getElementById("label").innerHTML = mesString + " " + year;
    const ultimoDia = new Date(new Date(year, mes).getFullYear(), new Date(year, mes).getMonth() + 1, 0).getDate()
    var ultDiaMesbusqueda = new Date(year, mes, ultimoDia);
    let diasEventos = [];
    $.get('http://localhost:4000/evento/buscarEventosporFecha/' + fecha + "/" + ultDiaMesbusqueda, function (data, err) {
        for (var i = 0; i < data.length; i++) {

            var fechaPlaneacion = data[i].fechaEvento;
            var fechaArr = fechaPlaneacion.split("T");
            fechaPlaneacion = fechaArr[0];

            var componentesFecha = fechaPlaneacion.split("-");
            var dia = componentesFecha[2];
            console.log(dia);
            diasEventos.push(dia);
            // $("#bodyTableAdmins").html($("#bodyTableAdmins").html()
            //     + "<tr>"
            //     + "<th scope='col'>" + data[i].temaEvento + "</th>"
            //     + "<td>" + fecha + "</td>"
            //     + "<td>" + data[i].duracion + "</td>"

            //     + "<td>" + "<button type='button' id='ver' class='btn btn-outline-danger'  onclick='borrarEvento" + "(`" + data[i]._id + "`)' >" + "Eliminar" + "</button" + "</td>"
            //     + "<td>" + "<button type='button' id='ver' class='btn btn-outline-warning'  onclick='buscarTienda" + "(`" + data[i]._id + "`)' disabled>" + "Editar" + "</button" + "</td>"
            //     + " </tr>");
        }
        console.log(diasEventos);
        for (let index = 0; index < diasEventos.length; index++) {
            const elementId = diasEventos[index];
            var nombreConferencista;
            var idConferencista = data[index].capacitadoresParticipantes;
            console.log(elementId);
            $.get('http://localhost:4000/conferencista/buscarconferencista/' + idConferencista[0], function (dataConfer, err) {
                nombreConferencista = dataConfer.nombre + " " + dataConfer.apellido;
                console.log(`${elementId} ${data[index].temaEvento} ${nombreConferencista} ${index}`);
                document.getElementById(elementId).innerHTML = "<p>" + elementId + " </p>" + "<p>" + data[index].temaEvento + "</p>" + "<p>" + nombreConferencista + "</p>";
            });
            // console.log(nombreConferencista);
            // console.log(`${elementId} ${data[index].temaEvento} ${nombreConferencista[index]}`);


        }
    });

}
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
function cancelEdit() {
    $("#editData").attr('hidden');
    location.reload();

}
function editarEvento(data) {
    // alert(data);
    $(document).ready(function () {
        $.get('http://localhost:4000/evento/buscar/' + data, function (data, err) {
            if (err)
                // alert(err);
                document.getElementById("editData").removeAttribute("hidden");
            // document.getElementById().setAttribute
            if (data != null) {
                debugger
                // alert(data.capacitadoresParticipantes);
                var componentesFecha = data.fechaEvento.split("T");
                var date = componentesFecha[0];
                document.getElementById("_id").value = data._id;
                document.getElementById("temaEventoA").value = data.temaEvento;
                document.getElementById("fechaEventoA").value = date;
                document.getElementById("duracionA").value = data.duracion;
            }
        });
    });

}
function guardarCambiosEvento() {
    var _id = document.getElementById("_id").value;
    var temaEvento = document.getElementById("temaEventoA").value;
    var fechaEvento = document.getElementById("fechaEventoA").value;
    var duracion = document.getElementById("duracionA").value;

    var cJson = '{' + JSON.stringify('temaEvento') + ':' + JSON.stringify(temaEvento) + ',' +
        JSON.stringify('fechaEvento') + ':' + JSON.stringify(fechaEvento) + ',' +
        JSON.stringify('duracion') + ':' + JSON.stringify(duracion) + '}';
    console.log(cJson);

    $.ajax({
        url: "http://localhost:4000/evento/" + _id,
        type: 'PUT',
        contentType: "application/json;charset=utf-8",
        data: cJson,
        success: 'Datos del evento modificados',
        error: 'Error'
    });
    cargarListadoEventos();
    location.reload();

}
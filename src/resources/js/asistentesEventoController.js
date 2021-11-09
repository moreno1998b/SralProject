function sendEmailRegister(idAsistente, idEvento) {
	var correo;
	var temaEvento;
	$.get('http://localhost:4000/asistente/buscar/' + idAsistente, function (data, err) {
		debugger
		if (data !== null && data !== undefined) {
			correo = data.correo;

			$.get('http://localhost:4000/evento/buscar/' + idEvento, function (dataEvento, err) {
				debugger
				if (dataEvento !== null && dataEvento !== undefined) {
					temaEvento = dataEvento.temaEvento;
					Email.send({
						Host: "smtp.gmail.com",
						Username: "correodepruebaneex@gmail.com",
						Password: "ltcjftkjuuqrsvio",
						To: correo,
						From: "correodepruebaneex@gmail.com",
						Subject: "Notificación Inscripción a Evento ",
						Body: `${data.nombre} ${data.apellido} Gracias por tu registro al evento ${temaEvento} que se realizara en la fecha  ${dataEvento.fechaEvento}`,
					}).then(
						message => alert("mail sent successfully")
					);
				}
			});
		}
	});


}
function buscarAsistentePorDocumento() {
	var documentoDigitado = document.getElementById("documentoDigitado").value;
	if (documentoDigitado !== null && documentoDigitado !== undefined) {


		$.get('http://localhost:4000/asistente/buscarPordocumento/' + documentoDigitado, function (data, err) {
			debugger
			if (data !== null && data !== undefined) {
				// alert(data.nombre);
				document.getElementById("checkAsistente").innerHTML =
					`<input class="form-check-input" type="radio" name="asistenteEncontrado" id="asistenteEncontrado" value="${data[0]._id}" >
			<label class="form-check-label" for="exampleRadios1">
				${data[0].nombre} ${data[0].apellido}
			</label>`;

			}
		});
	}
}
function asociarAsistenteAEvento() {
	var eventoAsistencia = document.getElementById("eventoAsistencia").value;
	var idAsistente = document.getElementById("asistenteEncontrado").value;

	var cJson = '{' + JSON.stringify('fk_id_asistente') + ':' + JSON.stringify(idAsistente) + ',' +
		JSON.stringify('fk_id_evento') + ':' + JSON.stringify(eventoAsistencia) + '}';
	console.log(cJson);

	$.ajax({
		url: "http://localhost:4000/asistentesEvento/",
		type: 'POST',
		contentType: "application/json;charset=utf-8",
		data: cJson,
		success: sendEmailRegister(idAsistente, eventoAsistencia),
		error: 'Error'
	});
	// location.reload();
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
function buscarDetalleInfoEvento() {
	var asistentesEncontrados = [];

	var eventoIdSelect = document.getElementById("eventoAsistencia").value;
	if (eventoIdSelect !== "") {
		$.get('http://localhost:4000/evento/buscar/' + eventoIdSelect, function (data, err) {
			debugger
			if (data.materialUrl !== undefined) {
				document.getElementById("material").innerHTML =(data.materialUrl!=null?`<a href="${data.materialUrl}" target="_blank">${data.materialUrl}</a>`:'Sin Adjuntos') ;
			}
			if (data != null) {//si entra aqui, es pq encontro el evento en la bd.
				document.getElementById("detallesEvento").hidden = false;
				var fechaArray = data.fechaEvento;
				var fecha = fechaArray.split("T");
				$.get('http://localhost:4000/asistentesEvento/buscarIdAsistentesPorEvento/' + eventoIdSelect, function (dataAsistentes, err) {
					// bodyTableAsistentesEvento
					if (dataAsistentes !== null) {//si entra aqui, es pq encontro asistentes al evento.
						//sacar el id del asistente, y en un ciclo for, buscar informacion de cada asistente y pegarla en un array
						//luego recorrer el array, para mostrar los datos en la tabla.


						for (let index = 0; index < dataAsistentes.length; index++) {

							$.get('http://localhost:4000/asistente/buscar/' + dataAsistentes[index].fk_id_asistente, function (dataAsist, err) {

								$("#bodyTableAsistentesEvento").html($("#bodyTableAsistentesEvento").html()
									+ "<tr>"
									+ "<th scope='col'>" + dataAsist.nombre + " " + dataAsist.apellido + "</th>"
									+ "<td>" + fecha[0] + "</td>"
									+ "<td>" + data.temaEvento + "</td>"
									+ " </tr>");

							});

						}


					}
				});

			}
		});
	}

}

var pcEnciendeDiv = $('#pcEnciendeDiv');
var pcConectadoDiv = $('#pcConectadoDiv');
var interruptorConfDiv = $('#interruptorConfDiv');
var ventiladorGiraDiv = $('#ventiladorGiraDiv');
var ledPlacaPrendeDiv = $('#ledPlacaPrendeDiv');
var emiteSonidoDiv = $('#emiteSonidoDiv');
var tiposSonidoDiv = $('#tiposSonidoDiv');
var problemaMonitorDiv = $('#problemaMonitorDiv');
var calidadImagenDiv = $('#calidadImagenDiv');
var soIniciaDiv = $('#soIniciaDiv');
var mensajeErrorDiv = $('#mensajeErrorDiv');
var tipoMensajeDiv = $('#tipoMensajeDiv');
var estadoProcesadorDiv = $('#estadoProcesadorDiv');
var tipoProblemaDiv = $('#tipoProblemaDiv');
var pantallaAzulDiv = $('#pantallaAzulDiv');
var redLinkeaDiv = $('#redLinkeaDiv');
var redReconoceDiv = $('#redReconoceDiv');
var habilitadaRedDiv = $('#habilitadaRedDiv');
var conectadoMonitorDiv = $('#conectadoMonitorDiv');
var funcionaCorrienteMonitorDiv = $('#funcionaCorrienteMonitorDiv');
var enciendeMonitorDiv = $('#enciendeMonitorDiv');
var imagenMonitorDiv = $('#imagenMonitorDiv');
var vgaConectadoDiv = $('#vgaConectadoDiv');
var vgaFuncionaDiv = $('#vgaFuncionaDiv');
var sonidoConectadoDiv = $('#sonidoConectadoDiv');


var submit = $('#btnSubmit');


ocultar(pcConectadoDiv);
ocultar(interruptorConfDiv);
ocultar(ventiladorGiraDiv);
ocultar(ledPlacaPrendeDiv);
ocultar(emiteSonidoDiv);
ocultar(tiposSonidoDiv);
ocultar(problemaMonitorDiv);
ocultar(calidadImagenDiv);
ocultar(soIniciaDiv);
ocultar(mensajeErrorDiv);
ocultar(tipoMensajeDiv);
ocultar(estadoProcesadorDiv);
ocultar(tipoProblemaDiv);
ocultar(pantallaAzulDiv);
ocultar(redLinkeaDiv);
ocultar(redReconoceDiv);
ocultar(habilitadaRedDiv);
ocultar(conectadoMonitorDiv);
ocultar(funcionaCorrienteMonitorDiv);
ocultar(enciendeMonitorDiv);
ocultar(imagenMonitorDiv);
ocultar(vgaConectadoDiv);
ocultar(vgaFuncionaDiv);
ocultar(sonidoConectadoDiv);
ocultar(submit);


$("input:radio[name='pcEnciende']").on('click',function() {
	var value = $("input:radio[name='pcEnciende']:checked").val();
	if (value === "No") {
		mostrar(pcConectadoDiv);

		ocultar(emiteSonidoDiv);
		ocultar(tiposSonidoDiv);
		ocultar(enciendeMonitorDiv);
		ocultar(conectadoMonitorDiv);
		ocultar(funcionaCorrienteMonitorDiv);
		ocultar(imagenMonitorDiv);
		ocultar(vgaConectadoDiv);
		ocultar(vgaFuncionaDiv);
		ocultar(calidadImagenDiv);
		ocultar(soIniciaDiv);
		ocultar(mensajeErrorDiv);
		ocultar(tipoMensajeDiv);
		ocultar(estadoProcesadorDiv);
		ocultar(tipoProblemaDiv);
		ocultar(sonidoConectadoDiv);
		ocultar(pantallaAzulDiv);
		ocultar(redLinkeaDiv);
		ocultar(redReconoceDiv);
		ocultar(habilitadaRedDiv);
		ocultar(submit);

	}else if (value === "Si") {
		mostrar(emiteSonidoDiv);

		ocultar(pcConectadoDiv);
		ocultar(interruptorConfDiv);
		ocultar(ventiladorGiraDiv);
		ocultar(ledPlacaPrendeDiv);
		ocultar(submit);
	}
});

$("input:radio[name='pcConectado']").on('click',function() {
	var value = $("input:radio[name='pcConectado']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(interruptorConfDiv);
		ocultar(ventiladorGiraDiv);
		ocultar(ledPlacaPrendeDiv);

	}else if (value === "Si") {
		mostrar(interruptorConfDiv);

		ocultar(submit);
	}
});	



$("input:radio[name='emiteSonido']").on('click',function() {
	var value = $("input:radio[name='emiteSonido']:checked").val();
	if (value === "No") {
		mostrar(enciendeMonitorDiv);

		ocultar(tiposSonidoDiv);
	}else if (value === "Si") {
		mostrar(tiposSonidoDiv);

		ocultar(enciendeMonitorDiv);
		ocultar(conectadoMonitorDiv);
		ocultar(funcionaCorrienteMonitorDiv);
		ocultar(imagenMonitorDiv);
		ocultar(vgaConectadoDiv);
		ocultar(vgaFuncionaDiv);
		ocultar(calidadImagenDiv);
		ocultar(soIniciaDiv);
		ocultar(mensajeErrorDiv);
		ocultar(tipoMensajeDiv);
		ocultar(estadoProcesadorDiv);
		ocultar(tipoProblemaDiv);
		ocultar(sonidoConectadoDiv);
		ocultar(pantallaAzulDiv);
		ocultar(redLinkeaDiv);
		ocultar(redReconoceDiv);
		ocultar(habilitadaRedDiv);
		ocultar(submit);
	}
});	

$("input:radio[name='tiposSonido']").on('click',function() {
	mostrar(submit);
});	

$("input:radio[name='enciendeMonitor']").on('click',function() {
	var value = $("input:radio[name='enciendeMonitor']:checked").val();
	if (value === "No") {
		mostrar(conectadoMonitorDiv);

		ocultar(imagenMonitorDiv);
	}else if (value === "Si") {
		mostrar(imagenMonitorDiv);

		ocultar(conectadoMonitorDiv);
	}
});

$("input:radio[name='conectadoMonitor']").on('click',function() {
	var value = $("input:radio[name='conectadoMonitor']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(funcionaCorrienteMonitorDiv);
	}else if (value === "Si") {
		mostrar(funcionaCorrienteMonitorDiv);

		ocultar(submit);
	}
});

$("input:radio[name='funcionaCorrienteMonitor']").on('click',function() {
	var value = $("input:radio[name='funcionaCorrienteMonitor']:checked").val();
	mostrar(submit);
});

$("input:radio[name='interruptorConf']").on('click',function() {
	var value = $("input:radio[name='interruptorConf']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(ventiladorGiraDiv);
		ocultar(ledPlacaPrendeDiv);
	}else if (value === "Si") {
		mostrar(ventiladorGiraDiv);

		ocultar(submit);
	}
});

$("input:radio[name='ventiladorGira']").on('click',function() {
	var value = $("input:radio[name='ventiladorGira']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(ledPlacaPrendeDiv);
	}else if (value === "Si") {
		mostrar(ledPlacaPrendeDiv);

		ocultar(submit);
	}
});

$("input:radio[name='ledPlacaPrende']").on('click',function() {
	mostrar(submit);
});

$("input:radio[name='imagenMonitor']").on('click',function() {
	var value = $("input:radio[name='imagenMonitor']:checked").val();
	if (value === "No") {
		mostrar(vgaConectadoDiv);

		ocultar(calidadImagenDiv);
		ocultar(soIniciaDiv);
		ocultar(mensajeErrorDiv);
		ocultar(tipoMensajeDiv);
		ocultar(estadoProcesadorDiv);
		ocultar(tipoProblemaDiv);
		ocultar(sonidoConectadoDiv);
		ocultar(pantallaAzulDiv);
		ocultar(redLinkeaDiv);
		ocultar(redReconoceDiv);
		ocultar(habilitadaRedDiv);
	}else if (value === "Si") {
		mostrar(calidadImagenDiv);

		ocultar(vgaConectadoDiv);
		ocultar(vgaFuncionaDiv);
	}
});

$("input:radio[name='vgaConectado']").on('click',function() {
	var value = $("input:radio[name='vgaConectado']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(vgaFuncionaDiv);
	}else if (value === "Si") {
		mostrar(vgaFuncionaDiv);

		ocultar(submit);
	}
});

$("input:radio[name='vgaFunciona']").on('click',function() {
	var value = $("input:radio[name='vgaFunciona']:checked").val();
	mostrar(submit);
});

$("input:radio[name='calidadImagen']").on('click',function() {
	var value = $("input:radio[name='calidadImagen']:checked").val();
	if (value === "4") {
		mostrar(soIniciaDiv);

		ocultar(submit);
	}else{
		mostrar(submit);

		ocultar(soIniciaDiv);
	}
});

$("input:radio[name='soInicia']").on('click',function() {
	var value = $("input:radio[name='soInicia']:checked").val();
	if (value === "No") {
		mostrar(mensajeErrorDiv);

		ocultar(tipoProblemaDiv);
	}else if (value === "Si") {
		mostrar(tipoProblemaDiv);

		ocultar(mensajeErrorDiv);
	}
});

$("input:radio[name='mensajeError']").on('click',function() {
	var value = $("input:radio[name='mensajeError']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(tipoMensajeDiv);
	}else if (value === "Si") {
		mostrar(tipoMensajeDiv);

		ocultar(submit);
	}
});

$("input:radio[name='tipoMensaje']").on('click',function() {
	var value = $("input:radio[name='tipoMensaje']:checked").val();
	if (value === "4") {
		mostrar(estadoProcesadorDiv);

		ocultar(submit);
	}else{
		mostrar(submit);

		ocultar(estadoProcesadorDiv);
	}
});

$("input:radio[name='estadoProcesador']").on('click',function() {
	mostrar(submit);
});

$("input:radio[name='tipoProblema']").on('click',function() {
	var value = $("input:radio[name='tipoProblema']:checked").val();
	switch(value){
		case "1":
			mostrar(pantallaAzulDiv);
			ocultar(submit);
			ocultar(redLinkeaDiv);
			ocultar(sonidoConectadoDiv);
			break;
		case "2":
			mostrar(submit);
			ocultar(pantallaAzulDiv);
			ocultar(redLinkeaDiv);
			ocultar(sonidoConectadoDiv);
			break;
		case "3":
			mostrar(redLinkeaDiv);
			ocultar(submit);
			ocultar(pantallaAzulDiv);
			ocultar(sonidoConectadoDiv);
			break;
		case "4":
			mostrar(sonidoConectadoDiv);
			ocultar(submit);
			ocultar(pantallaAzulDiv);
			ocultar(redLinkeaDiv);
			break;
	}
});

$("input:radio[name='pantallaAzul']").on('click',function() {
	mostrar(submit);
});

$("input:radio[name='redLinkea']").on('click',function() {
	var value = $("input:radio[name='redLinkea']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(redReconoceDiv);
		ocultar(habilitadaRedDiv);
	}else if (value === "Si") {
		mostrar(redReconoceDiv);

		ocultar(submit);
	}
});

$("input:radio[name='redReconoce']").on('click',function() {
	var value = $("input:radio[name='redReconoce']:checked").val();
	if (value === "No") {
		mostrar(submit);

		ocultar(habilitadaRedDiv);
	}else if (value === "Si") {
		mostrar(habilitadaRedDiv);

		ocultar(submit);
	}
});

$("input:radio[name='sonidoConectado']").on('click',function() {
	mostrar(submit);
});

$("input:radio[name='habilitadaRed']").on('click',function() {
	mostrar(submit);
});

function mostrar(div) {
	div.removeClass('fadeAway');
}

function ocultar(div){
	div.addClass('fadeAway');
}
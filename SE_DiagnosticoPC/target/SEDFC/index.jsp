<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>SEDFC</title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="assets/css/lib/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css">
</head>
<body>
	<div class="container">
			
		

		<div class="col-xs-8">
			<h1>Diagnóstico de fallas de la computadora</h1>

			<form action="DiagnosticoController" method="post">

				<div class="form-group" id="pcEnciendeDiv">
					<label for="pcEnciende">¿Su computadora enciende?</label>
					<br>
					<input type="radio" name="pcEnciende" value="Si">Si
					<input type="radio" name="pcEnciende" value="No">No
				</div>

				<div class="form-group" id="pcConectadoDiv">
					<label for="pcConectado">¿Está conectado el cable de alimentación?</label>
					<br>
					<input type="radio" name="pcConectado" value="Si">Si
					<input type="radio" name="pcConectado" value="No">No
				</div>
				
				<div class="form-group" id="interruptorConfDiv">
					<label for="interruptorConfDiv">¿El interruptor de la fuente está configurado en 220V?</label>
					<br>
					<input type="radio" name="interruptorConf" value="Si">Si
					<input type="radio" name="interruptorConf" value="No">No
				</div>

				<div class="form-group" id="ventiladorGiraDiv">
					<label for="ventiladorGira">¿Gira el ventilador de la fuente?</label>
					<br>
					<input type="radio" name="ventiladorGira" value="Si">Si
					<input type="radio" name="ventiladorGira" value="No">No
				</div>

				<div class="form-group" id="ledPlacaPrendeDiv">
					<label for="ledPlacaPrende">¿El led de la placa prende?</label>
					<br>
					<input type="radio" name="ledPlacaPrende" value="Si">Si
					<input type="radio" name="ledPlacaPrende" value="No">No
				</div>

				<div class="form-group" id="emiteSonidoDiv">
					<label for="emiteSonido">¿La PC emite sonidos?</label>
					<br>
					<input type="radio" name="emiteSonido" value="Si">Si
					<input type="radio" name="emiteSonido" value="No">No
				</div>

				<div class="form-group" id="tiposSonidoDiv">
					<label for="tiposSonido">¿Qué tipos de sonidos emite?</label>
					<br>
					<input type="radio" name="tiposSonido" value="1">2 sonidos cortos
					<br>
					<input type="radio" name="tiposSonido" value="2">1 sonido largo y 1 sonido corto
					<br>
					<input type="radio" name="tiposSonido" value="3">1 sonido largo y 2 cortos
					<br>
					<input type="radio" name="tiposSonido" value="4">1 sonido largo y 3 cortos
					<br>
					<input type="radio" name="tiposSonido" value="5">1 sonido largo y 9 cortos
					<br>
					<input type="radio" name="tiposSonido" value="6">3 sonidos
					<br>
					<input type="radio" name="tiposSonido" value="7">4 sonidos
					<br>
					<input type="radio" name="tiposSonido" value="8">5 sonidos
					<br>
					<input type="radio" name="tiposSonido" value="9">6 sonidos
					<br>
					<input type="radio" name="tiposSonido" value="10">8 sonidos
					<br>
					<input type="radio" name="tiposSonido" value="11">Sonidos largos y constantes
					<br>
					<input type="radio" name="tiposSonido" value="12">Sonidos cortos y constantes
					<br>
					<input type="radio" name="tiposSonido" value="13">Sonido de ambulancia
				</div>

				<div class="form-group" id="problemaMonitorDiv">
					<label for="problemaMonitor">¿Qué problema presenta el monitor?</label>
					<br>
					<input type="radio" name="problemaMonitor" value="1">Problemas en la imagen
					<input type="radio" name="problemaMonitor" value="2">No enciende
				</div>

				<div class="form-group" id="enciendeMonitorDiv">
					<label for="enciendeMonitor">¿El monitor enciende?</label>
					<br>
					<input type="radio" name="enciendeMonitor" value="Si">Si
					<input type="radio" name="enciendeMonitor" value="No">No
				</div>

				<div class="form-group" id="conectadoMonitorDiv">
					<label for="conectadoMonitor">¿El cable de corriente del monitor está conectado?</label>
					<br>
					<input type="radio" name="conectadoMonitor" value="Si">Si
					<input type="radio" name="conectadoMonitor" value="No">No
				</div>

				<div class="form-group" id="funcionaCorrienteMonitorDiv">
					<label for="funcionaCorrienteMonitor">¿El cable de corriente del monitor funciona en otra computadora?</label>
					<br>
					<input type="radio" name="funcionaCorrienteMonitor" value="Si">Si
					<input type="radio" name="funcionaCorrienteMonitor" value="No">No
				</div>


				<div class="form-group" id="imagenMonitorDiv">
					<label for="imagenMonitor">¿Se ve la imagen en el monitor?</label>
					<br>
					<input type="radio" name="imagenMonitor" value="Si">Si
					<input type="radio" name="imagenMonitor" value="No">No
				</div>

				<div class="form-group" id="calidadImagenDiv">
					<label for="calidadImagen">¿Qué calidad tiene la imagen que se muestra?</label>
					<br>
					<input type="radio" name="calidadImagen" value="1">Se ven rayas en el monitor
					<br>
					<input type="radio" name="calidadImagen" value="2">Los colores se ven distorsionados
					<br>
					<input type="radio" name="calidadImagen" value="3">Hay una(s) mancha(s) negra(s) en el monitor
					<br>
					<input type="radio" name="calidadImagen" value="4">Se ve correcto
				</div>

				<div class="form-group" id="soIniciaDiv">
					<label for="soInicia">¿El Sistema Operativo inicia?</label>
					<br>
					<input type="radio" name="soInicia" value="Si">Si
					<input type="radio" name="soInicia" value="No">No
				</div>

				<div class="form-group" id="mensajeErrorDiv">
					<label for="mensajeError">¿Se muestra algún mensaje de error en la pantalla?</label>
					<br>
					<input type="radio" name="mensajeError" value="Si">Si
					<input type="radio" name="mensajeError" value="No">No
				</div>

				<div class="form-group" id="tipoProblemaDiv">
					<label for="tipoProblema">¿Qué problema puede identificar?</label>
					<br>
					<input type="radio" name="tipoProblema" value="1">La computadora enciende por unos minutos y luego se apaga
					<br>
					<input type="radio" name="tipoProblema" value="2">La imagen se ve con una calidad muy baja
					<br>
					<input type="radio" name="tipoProblema" value="3">Tengo problemas de red
					<br>
					<input type="radio" name="tipoProblema" value="4">No puedo escuchar sonido alguno
				</div>


				<div class="form-group" id="tipoMensajeDiv">
					<label for="tipoMensaje">¿Qué tipo de mensaje se muestra?</label>
					<br>
					<input type="radio" name="tipoMensaje" value="1">No se encuentra el sistema operativo (Operating System Not Found)
					<br>
					<input type="radio" name="tipoMensaje" value="2">Relacionado con el disco duro
					<br>
					<input type="radio" name="tipoMensaje" value="3">Relacionado con la memoria RAM
					<br>
					<input type="radio" name="tipoMensaje" value="4">Relacionado con el procesador
					<br>
					<input type="radio" name="tipoMensaje" value="5">Relacionado con los dispositivos de entrada
					<br>
					<input type="radio" name="tipoMensaje" value="6">Relacionado con los dispositivos de salida
					<br>
					<input type="radio" name="tipoMensaje" value="7">Pantalla azul
				</div>

				<div class="form-group" id="estadoProcesadorDiv">
					<label for="estadoProcesador">¿Cuál es el estado del procesador?</label>
					<br>
					<input type="radio" name="estadoProcesador" value="1">Sobrecalentado
					<input type="radio" name="estadoProcesador" value="2">Ventilador no gira
					<input type="radio" name="estadoProcesador" value="3">Funciona normalmente
				</div>

				<div class="form-group" id="pantallaAzulDiv">
					<label for="pantallaAzul">¿Antes de apagarse muestra una pantalla azul?</label>
					<br>
					<input type="radio" name="pantallaAzul" value="Si">Si
					<input type="radio" name="pantallaAzul" value="No">No
				</div>

				<div class="form-group" id="redLinkeaDiv">
					<label for="redLinkea">¿El cable de red linkea?</label>
					<br>
					<input type="radio" name="redLinkea" value="Si">Si
					<input type="radio" name="redLinkea" value="No">No
				</div>

				<div class="form-group" id="redReconoceDiv">
					<label for="reconoceRed">¿Se reconoce la tarjeta de red?</label>
					<br>
					<input type="radio" name="redReconoce" value="Si">Si
					<input type="radio" name="redReconoce" value="No">No
				</div>

				<div class="form-group" id="habilitadaRedDiv">
					<label for="habilitadaRed">¿La tarjeta de red está habilitada?</label>
					<br>
					<input type="radio" name="habilitadaRed" value="Si">Si
					<input type="radio" name="habilitadaRed" value="No">No
				</div>			

				<div class="form-group" id="vgaConectadoDiv">
					<label for="vgaConectado">¿El cable VGA está conectado?</label>
					<br>
					<input type="radio" name="vgaConectado" value="Si">Si
					<input type="radio" name="vgaConectado" value="No">No
				</div>

				<div class="form-group" id="vgaFuncionaDiv">
					<label for="vgaFunciona">¿El cable VGA funciona en otro monitor?</label>
					<br>
					<input type="radio" name="vgaFunciona" value="Si">Si
					<input type="radio" name="vgaFunciona" value="No">No
				</div>

				<div class="form-group" id="sonidoConectadoDiv">
					<label for="sonidoConectado">¿Los dispositivos de reproducción de sonido están conectados al puerto verde de audio?</label>
					<br>
					<input type="radio" name="sonidoConectado" value="Si">Si
					<input type="radio" name="sonidoConectado" value="No">No
				</div>

				<div class="form-group center-block">
					<button class="btn btn-primary" id="btnSubmit">Obtener Diagnóstico</button>
				</div>
			</form>
                        
                        <%
				String problema = (String)request.getAttribute("a1");
				if(problema == null){
                                    problema="";
				}else{
                                    problema = "Diagnostico: " + problema;
                                }
			%>

                        <p><%= problema%></p>
                        
		</div>
	</div>

	<script type="text/javascript" src="assets/js/lib/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="assets/js/diagnostico.js"></script>

</body>
</html>
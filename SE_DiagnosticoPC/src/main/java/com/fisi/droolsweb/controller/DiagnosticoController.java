package com.fisi.droolsweb.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fisi.droolsweb.model.domain.Computadora;
import com.fisi.droolsweb.model.domain.Red;
import com.fisi.droolsweb.services.DiagnosticoService;
import com.fisi.droolsweb.model.domain.Monitor;

/**
 * Servlet implementation class DiagnosticoController
 */
public class DiagnosticoController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DiagnosticoController() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Computadora computadora = paramToObject(request, response);

		DiagnosticoService service = new DiagnosticoService();
		
		computadora = service.miDiagnostico(computadora);
                
                request.setAttribute("a1", computadora.getProblema());

		request.getRequestDispatcher("index.jsp").forward(request, response);
	}

	private Computadora paramToObject(HttpServletRequest request, HttpServletResponse response) {
		String pcEnciende = request.getParameter("pcEnciende");
		String pcConectado = request.getParameter("pcConectado");
		String interruptorConf = request.getParameter("interruptorConf");
		String ventiladorGira = request.getParameter("ventiladorGira");
		String ledPlacaPrende = request.getParameter("ledPlacaPrende");
		String emiteSonido = request.getParameter("emiteSonido");
		String tiposSonido = request.getParameter("tiposSonido");
		String enciendeMonitor = request.getParameter("enciendeMonitor");
		String conectadoMonitor = request.getParameter("conectadoMonitor");
		String funcionaCorrienteMonitor = request.getParameter("funcionaCorrienteMonitor");
		String imagenMonitor = request.getParameter("imagenMonitor");
		String calidadImagen = request.getParameter("calidadImagen");
		String soInicia = request.getParameter("soInicia");
		String mensajeError = request.getParameter("mensajeError");
		String tipoProblema = request.getParameter("tipoProblema");
		String tipoMensaje = request.getParameter("tipoMensaje");
		String estadoProcesador = request.getParameter("estadoProcesador");
		String pantallaAzul = request.getParameter("pantallaAzul");
		String redLinkea = request.getParameter("redLinkea");
		String redReconoce = request.getParameter("redReconoce");
		String habilitadaRed = request.getParameter("habilitadaRed");
		String vgaConectado = request.getParameter("vgaConectado");
		String vgaFunciona = request.getParameter("vgaFunciona");
		String sonidoConectado = request.getParameter("sonidoConectado");

		Computadora computadora = new Computadora();
		Monitor monitor = new Monitor();
		Red red = new Red();

		if (hasContent(pcEnciende)) {
			computadora.setEnciende(filtrarString(pcEnciende));
		}

		if (hasContent(pcConectado)) {
			computadora.setConectado(filtrarString(pcConectado));
		}

		if (hasContent(interruptorConf)) {
			computadora.setConfigurado(filtrarString(interruptorConf));
		}

		if (hasContent(ventiladorGira)) {
			computadora.setGiraVentilador(filtrarString(ventiladorGira));
		}

		if (hasContent(ledPlacaPrende)) {
			computadora.setLedPrende(filtrarString(ledPlacaPrende));
		}

		if (hasContent(emiteSonido)) {
			computadora.setEmiteSonido(filtrarString(emiteSonido));
		}

		if (hasContent(tiposSonido)) {
			computadora.setTipoSonido(filtrarInteger(tiposSonido));
		}

		if (hasContent(enciendeMonitor)) {
			monitor.setEnciende(filtrarString(enciendeMonitor));
		}

		if (hasContent(conectadoMonitor)) {
			monitor.setConectado(filtrarString(conectadoMonitor));
		}

		if (hasContent(funcionaCorrienteMonitor)) {
			monitor.setFuncionaCorriente(filtrarString(funcionaCorrienteMonitor));
		}

		if (hasContent(imagenMonitor)) {
			monitor.setHayImagen(filtrarString(imagenMonitor));
		}

		if (hasContent(calidadImagen)) {
			monitor.setTipoCalidadImagen(filtrarInteger(calidadImagen));
		}
		
		if (hasContent(soInicia)) {
			computadora.setIniciaSO(filtrarString(soInicia));
		}
		
		if (hasContent(mensajeError)) {
			computadora.setMensajeError(filtrarString(mensajeError));
		}
		
		if (hasContent(tipoProblema)) {
			computadora.setTipoProblemaIdentificado(filtrarInteger(tipoProblema));
		}
		
		if (hasContent(tipoMensaje)) {
			computadora.setTipoMensajeError(filtrarInteger(tipoMensaje));
		}
		
		if (hasContent(estadoProcesador)) {
			computadora.setEstadoProcesador(filtrarInteger(estadoProcesador));
		}
		
		if (hasContent(pantallaAzul)) {
			computadora.setPantallaAzul(filtrarString(pantallaAzul));
		}
		
		if (hasContent(redLinkea)) {
			red.setLinkea(filtrarString(redLinkea));
		}
		
		if (hasContent(redReconoce)) {
			red.setReconoce(filtrarString(redReconoce));
		}
		
		if (hasContent(habilitadaRed)) {
			red.setHabilitada(filtrarString(habilitadaRed));
		}
		
		if (hasContent(vgaConectado)) {
			monitor.setVgaConectado(filtrarString(vgaConectado));
		}
		
		if (hasContent(vgaFunciona)) {
			monitor.setVgaFunciona(filtrarString(vgaFunciona));
		}
		
		if (hasContent(sonidoConectado)) {
			computadora.setSonidoConectado(filtrarString(sonidoConectado));
		}

		computadora.setMonitor(monitor);
		computadora.setRed(red);

		return computadora;
	}

	private boolean hasContent(String param) {
		if (param != null && !param.equals("")) {
			return true;
		}
		return false;
	}

	private int filtrarString(String param) {
		if (param.equals("Si")) {
			return 1;
		} else if (param.equals("No")) {
			return -1;
		} else {
			return 0;
		}
	}

	private int filtrarInteger(String param) {
		return Integer.parseInt(param);
	}

}

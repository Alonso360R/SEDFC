package com.fisi.droolsweb.model.domain;

public class Computadora {
	private int enciende;
	private int conectado;
	private int configurado;
	private int giraVentilador;
	private int ledPrende;
	private int emiteSonido;
	private int tipoSonido;
	private int tipoProblemaMonitor;
	private int iniciaSO;
	private int mensajeError;
	private int tipoMensajeError;
	private int estadoProcesador;
	private int tipoProblemaIdentificado;
	private int pantallaAzul;
	private int sonidoConectado;
	private Monitor monitor;
	private Red red;
	private String problema;

	public Computadora() {
	}

	public int getEnciende() {
		return enciende;
	}

	public void setEnciende(int enciende) {
		this.enciende = enciende;
	}

	public int getConectado() {
		return conectado;
	}

	public void setConectado(int conectado) {
		this.conectado = conectado;
	}

	public int getConfigurado() {
		return configurado;
	}

	public void setConfigurado(int configurado) {
		this.configurado = configurado;
	}

	public int getGiraVentilador() {
		return giraVentilador;
	}

	public void setGiraVentilador(int giraVentilador) {
		this.giraVentilador = giraVentilador;
	}

	public int getLedPrende() {
		return ledPrende;
	}

	public void setLedPrende(int ledPrende) {
		this.ledPrende = ledPrende;
	}

	public int getEmiteSonido() {
		return emiteSonido;
	}

	public void setEmiteSonido(int emiteSonido) {
		this.emiteSonido = emiteSonido;
	}

	public int getTipoSonido() {
		return tipoSonido;
	}

	public void setTipoSonido(int tipoSonido) {
		this.tipoSonido = tipoSonido;
	}

	public int getTipoProblemaMonitor() {
		return tipoProblemaMonitor;
	}

	public void setTipoProblemaMonitor(int tipoProblemaMonitor) {
		this.tipoProblemaMonitor = tipoProblemaMonitor;
	}

	public int getIniciaSO() {
		return iniciaSO;
	}

	public void setIniciaSO(int iniciaSO) {
		this.iniciaSO = iniciaSO;
	}

	public String getProblema() {
		return problema;
	}

	public void setProblema(String problema) {
		this.problema = problema;
	}

	public int getMensajeError() {
		return mensajeError;
	}

	public void setMensajeError(int mensajeError) {
		this.mensajeError = mensajeError;
	}

	public int getTipoMensajeError() {
		return tipoMensajeError;
	}

	public void setTipoMensajeError(int tipoMensajeError) {
		this.tipoMensajeError = tipoMensajeError;
	}

	public int getEstadoProcesador() {
		return estadoProcesador;
	}

	public void setEstadoProcesador(int estadoProcesador) {
		this.estadoProcesador = estadoProcesador;
	}

	public int getTipoProblemaIdentificado() {
		return tipoProblemaIdentificado;
	}

	public void setTipoProblemaIdentificado(int tipoProblemaIdentificado) {
		this.tipoProblemaIdentificado = tipoProblemaIdentificado;
	}

	public int getPantallaAzul() {
		return pantallaAzul;
	}

	public void setPantallaAzul(int pantallaAzul) {
		this.pantallaAzul = pantallaAzul;
	}

	public int getSonidoConectado() {
		return sonidoConectado;
	}

	public void setSonidoConectado(int sonidoConectado) {
		this.sonidoConectado = sonidoConectado;
	}

	public Monitor getMonitor() {
		return monitor;
	}

	public void setMonitor(Monitor monitor) {
		this.monitor = monitor;
	}

	public Red getRed() {
		return red;
	}

	public void setRed(Red red) {
		this.red = red;
	}

}

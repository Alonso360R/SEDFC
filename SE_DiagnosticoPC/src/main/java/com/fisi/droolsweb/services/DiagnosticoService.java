package com.fisi.droolsweb.services;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import com.fisi.droolsweb.model.domain.Computadora;

public class DiagnosticoService {
	

	public Computadora miDiagnostico(Computadora computadora) {
		Computadora temp = computadora;
		try {
			KieServices ks = KieServices.Factory.get();
			KieContainer kContainer = ks.getKieClasspathContainer();
			KieSession kSession = kContainer.newKieSession("ComputerKS");

			kSession.insert(temp);
			kSession.insert(temp.getMonitor());
			kSession.insert(temp.getRed());

			kSession.fireAllRules();

			System.out.println(temp.getProblema());
		} catch (Throwable t) {
			t.printStackTrace();
		}
		return temp;
	}
}

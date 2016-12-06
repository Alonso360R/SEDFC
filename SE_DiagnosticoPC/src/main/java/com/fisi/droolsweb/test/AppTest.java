package com.fisi.droolsweb.test;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import com.fisi.droolsweb.model.domain.Computadora;
import com.fisi.droolsweb.model.domain.Monitor;

public class AppTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			KieServices ks = KieServices.Factory.get();
			KieContainer kContainer = ks.getKieClasspathContainer();
			KieSession kSession = kContainer.newKieSession("ComputerKS");
			
			Computadora pc = new Computadora();
			Monitor m = new Monitor();
			
			m.setVgaFunciona(-1);
			m.setVgaConectado(1);
			
			kSession.insert(pc);
			kSession.insert(m);

			kSession.fireAllRules();

			System.out.println(pc.getProblema());
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}	

}

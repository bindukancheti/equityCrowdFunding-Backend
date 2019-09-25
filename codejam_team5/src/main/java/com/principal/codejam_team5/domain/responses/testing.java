package com.principal.codejam_team5.domain.responses;

import java.io.Serializable;

public class testing implements Serializable {
	
	private static final long serialVersionUID= 1L;
	int id;
	String testname;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTestname() {
		return testname;
	}
	public void setTestname(String testname) {
		this.testname = testname;
	}
	
	

}

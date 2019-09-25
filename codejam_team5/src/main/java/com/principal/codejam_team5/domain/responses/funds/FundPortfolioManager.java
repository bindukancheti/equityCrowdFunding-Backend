package com.principal.codejam_team5.domain.responses.funds;

import java.io.Serializable;

public class FundPortfolioManager implements Serializable{
	
	private int fun_manager_id;
	private String name;
	private String description;
	public int getFun_manager_id() {
		return fun_manager_id;
	}
	public void setFun_manager_id(int fun_manager_id) {
		this.fun_manager_id = fun_manager_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
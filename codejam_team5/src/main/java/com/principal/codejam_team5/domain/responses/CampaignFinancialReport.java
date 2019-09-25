package com.principal.codejam_team5.domain.responses;

public class CampaignFinancialReport {
	
	private static final long serialVersionUID= 1L;
	
	private int year;
	private int value;
	private String report;
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}
	
	

}

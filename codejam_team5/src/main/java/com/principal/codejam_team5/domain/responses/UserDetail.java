package com.principal.codejam_team5.domain.responses;

import java.util.List;

public class UserDetail {
	
	private static final long serialVersionUID= 1L;
	
	private int id;
	private String email;
	private String name;
	private String social_connect;
	private String description;
	private int role;
	private String company_name;
	private String password;
	private int annual_income;
	private int other_startup_investments;
	private String company_category;
	private List<UserInvestOnCampaignDetail> userInvestOnCampaignDetails;
	private List<UserInvestOnFundDetail> userInvestOnFundDetails;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSocial_connect() {
		return social_connect;
	}
	public void setSocial_connect(String social_connect) {
		this.social_connect = social_connect;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAnnual_income() {
		return annual_income;
	}
	public void setAnnual_income(int annual_income) {
		this.annual_income = annual_income;
	}
	public int getOther_startup_investments() {
		return other_startup_investments;
	}
	public void setOther_startup_investments(int other_startup_investments) {
		this.other_startup_investments = other_startup_investments;
	}
	public String getCompany_category() {
		return company_category;
	}
	public void setCompany_category(String company_category) {
		this.company_category = company_category;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public List<UserInvestOnCampaignDetail> getUserInvestOnCampaignDetails() {
		return userInvestOnCampaignDetails;
	}
	public void setUserInvestOnCampaignDetails(List<UserInvestOnCampaignDetail> userInvestOnCampaignDetails) {
		this.userInvestOnCampaignDetails = userInvestOnCampaignDetails;
	}
	public List<UserInvestOnFundDetail> getUserInvestOnFundDetails() {
		return userInvestOnFundDetails;
	}
	public void setUserInvestOnFundDetails(List<UserInvestOnFundDetail> userInvestOnFundDetails) {
		this.userInvestOnFundDetails = userInvestOnFundDetails;
	}

}

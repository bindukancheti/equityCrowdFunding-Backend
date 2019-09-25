package com.principal.codejam_team5.domain.responses;

import java.io.Serializable;

import javax.print.attribute.standard.DateTimeAtCompleted;

import org.joda.time.DateTime;

public class CampaignDetail implements Serializable{
	
	private static final long serialVersionUID= 1L;
	
	private int id;
	private int investors;
	private String name;
	private int fund_raiser_id;
	private String short_pitch;
	private String address;
	private String city;
	private int fund_required;
	private String description;
	private Boolean is_approved;
	private int equity_stake;
	private String created_time;
	private String start_date;
	private String end_date;
	private float capitalRaisedIndividually;
	private float capitalRaisedInFunds;
	private String category;
	private int number_of_fund;
	
	public int getNumber_of_fund() {
		return number_of_fund;
	}
	public void setNumber_of_fund(int number_of_fund) {
		this.number_of_fund = number_of_fund;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getInvestors() {
		return investors;
	}
	public void setInvestors(int investors) {
		this.investors = investors;
	}
	public float getCapitalRaisedIndividually() {
		return capitalRaisedIndividually;
	}
	public void setCapitalRaisedIndividually(float capitalRaisedIndividually) {
		this.capitalRaisedIndividually = capitalRaisedIndividually;
	}
	public float getCapitalRaisedInFunds() {
		return capitalRaisedInFunds;
	}
	public void setCapitalRaisedInFunds(float capitalRaisedInFunds) {
		this.capitalRaisedInFunds = capitalRaisedInFunds;
	}
	public String getCreated_time() {
		return created_time;
	}
	public void setCreated_time(String created_time) {
		this.created_time = created_time;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getFund_raiser_id() {
		return fund_raiser_id;
	}
	public void setFund_raiser_id(int fund_raiser_id) {
		this.fund_raiser_id = fund_raiser_id;
	}
	public String getShort_pitch() {
		return short_pitch;
	}
	public void setShort_pitch(String short_pitch) {
		this.short_pitch = short_pitch;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getFund_required() {
		return fund_required;
	}
	public void setFund_required(int fund_required) {
		this.fund_required = fund_required;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getIs_approved() {
		return is_approved;
	}
	public void setIs_approved(Boolean is_approved) {
		this.is_approved = is_approved;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public int getEquity_stake() {
		return equity_stake;
	}
	public void setEquity_stake(int equity_stake) {
		this.equity_stake = equity_stake;
	}
	public String getStart_date() {
		return start_date;
	}
	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}
	public String getEnd_date() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	
	
	

}

package com.principal.codejam_team5.domain.responses.funds;

import java.io.Serializable;

public class FundCompilation implements Serializable{
	
	private int fund_id;
	private int campaign_id;
	private int percentage;
	public int getFund_id() {
		return fund_id;
	}
	public void setFund_id(int fund_id) {
		this.fund_id = fund_id;
	}
	public int getCampaign_id() {
		return campaign_id;
	}
	public void setCampaign_id(int campaign_id) {
		this.campaign_id = campaign_id;
	}
	public int getPercentage() {
		return percentage;
	}
	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}
	
	

}

package com.principal.codejam_team5.common.domain;

public class FundAmountCampaignMapping {
	private static final long serialVersionUID= 1L;
	
	int campaign_id;
	int total;
	int fund_id;
	int percentage;
	
	FundAmountCampaignMapping(int campaign_id)
	{
		this.campaign_id=campaign_id;
	}
	
	public FundAmountCampaignMapping() {
		// TODO Auto-generated constructor stub
	}

	public int getCampaign_id() {
		return campaign_id;
	}

	public void setCampaign_id(int campaign_id) {
		this.campaign_id = campaign_id;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getFund_id() {
		return fund_id;
	}

	public void setFund_id(int fund_id) {
		this.fund_id = fund_id;
	}

	public int getPercentage() {
		return percentage;
	}

	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}

}

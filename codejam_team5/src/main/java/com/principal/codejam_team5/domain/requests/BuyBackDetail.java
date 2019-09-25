package com.principal.codejam_team5.domain.requests;

public class BuyBackDetail {

	private static final long serialVersionUID= 1L;
	
	private int campaign_id;
	private int return_percent;
	public int getCampaign_id() {
		return campaign_id;
	}
	public void setCampaign_id(int campaign_id) {
		this.campaign_id = campaign_id;
	}
	public int getReturn_percent() {
		return return_percent;
	}
	public void setReturn_percent(int return_percent) {
		this.return_percent = return_percent;
	}
	
	
}

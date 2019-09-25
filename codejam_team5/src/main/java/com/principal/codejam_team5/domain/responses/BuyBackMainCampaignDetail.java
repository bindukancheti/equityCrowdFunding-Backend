package com.principal.codejam_team5.domain.responses;

public class BuyBackMainCampaignDetail {
	
	private static final long serialVersionUID= 1L;
	
	private int buyback_return_percentage;
	private MainCampaign mainCampaign;

	
	public int getBuyback_return_percentage() {
		return buyback_return_percentage;
	}
	public void setBuyback_return_percentage(int buyback_return_percentage) {
		this.buyback_return_percentage = buyback_return_percentage;
	}
	public MainCampaign getMainCampaign() {
		return mainCampaign;
	}
	public void setMainCampaign(MainCampaign mainCampaign) {
		this.mainCampaign = mainCampaign;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}

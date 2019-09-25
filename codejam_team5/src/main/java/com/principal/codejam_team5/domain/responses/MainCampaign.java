package com.principal.codejam_team5.domain.responses;

import java.util.List;

public class MainCampaign {
	
	CampaignDetail campaignDetail;
	List<CampaignFandQ> campaignFandQs;
	List<CampaignTeam> campaignTeams;
	List<CampaignFinancialReport> campaignFinancialReports;
	List<CampaignMedia> campaignMedias;
	
	public List<CampaignMedia> getCampaignMedias() {
		return campaignMedias;
	}
	public void setCampaignMedias(List<CampaignMedia> campaignMedias) {
		this.campaignMedias = campaignMedias;
	}
	public CampaignDetail getCampaignDetail() {
		return campaignDetail;
	}
	public void setCampaignDetail(CampaignDetail campaignDetail) {
		this.campaignDetail = campaignDetail;
	}
	public List<CampaignFandQ> getCampaignFandQs() {
		return campaignFandQs;
	}
	public void setCampaignFandQs(List<CampaignFandQ> campaignFandQs) {
		this.campaignFandQs = campaignFandQs;
	}
	public List<CampaignTeam> getCampaignTeams() {
		return campaignTeams;
	}
	public void setCampaignTeams(List<CampaignTeam> campaignTeams) {
		this.campaignTeams = campaignTeams;
	}
	public List<CampaignFinancialReport> getCampaignFinancialReports() {
		return campaignFinancialReports;
	}
	public void setCampaignFinancialReports(List<CampaignFinancialReport> campaignFinancialReports) {
		this.campaignFinancialReports = campaignFinancialReports;
	}
	
	
	
	

}

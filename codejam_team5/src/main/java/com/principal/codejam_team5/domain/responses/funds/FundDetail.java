package com.principal.codejam_team5.domain.responses.funds;

import java.io.Serializable;
import java.util.List;

import com.principal.codejam_team5.domain.responses.CampaignDetail;
import com.principal.codejam_team5.domain.responses.CampaignMedia;
import com.principal.codejam_team5.domain.responses.MainCampaign;

public class FundDetail  implements Serializable{

	private static final long serialVersionUID= 1L;
	
	private int id;
	private String fund_name;
	private String category;
	private int fund_manager_id;
	private String start_date;
	private String end_date;
	private String short_description;
	private String prospectus_location;
	private String fund_termination_date;
	private int minimum_investment;
	private int maximum_investment;
	private int investors;
	
	
	private List<MainCampaign> fundCampaignsList;
	
	
	public List<MainCampaign> getFundCampaignsList() {
		return fundCampaignsList;
	}

	public void setFundCampaignsList(List<MainCampaign> fundCampaignsList) {
		this.fundCampaignsList = fundCampaignsList;
	}

	private String long_description;
	
	
	private List<FundFandQs> fundFandQs;
	
	private List<FundPortfolioManager> fundPortfolioManager;
	private List<CampaignMedia> fundMedias	;
	
	public List<CampaignMedia> getFundMedias() {
		return fundMedias;
	}

	public void setFundMedias(List<CampaignMedia> fundMedias) {
		this.fundMedias = fundMedias;
	}

	
	
	public String getLong_description() {
		return long_description;
	}

	public int getInvestors() {
		return investors;
	}

	public void setInvestors(int investors) {
		this.investors = investors;
	}

	public void setLong_description(String long_description) {
		this.long_description = long_description;
	}

	private float capitalRaisedInThisFund;
	
	public float getCapitalRaisedInThisFund() {
		return capitalRaisedInThisFund;
	}

	public void setCapitalRaisedInThisFund(float capitalRaisedInThisFund) {
		this.capitalRaisedInThisFund = capitalRaisedInThisFund;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFund_name() {
		return fund_name;
	}

	public void setFund_name(String fund_name) {
		this.fund_name = fund_name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getFund_manager_id() {
		return fund_manager_id;
	}

	public void setFund_manager_id(int fund_manager_id) {
		this.fund_manager_id = fund_manager_id;
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

	public String getShort_description() {
		return short_description;
	}

	public void setShort_description(String short_description) {
		this.short_description = short_description;
	}

	public String getProspectus_location() {
		return prospectus_location;
	}

	public void setProspectus_location(String prospectus_location) {
		this.prospectus_location = prospectus_location;
	}

	public String getFund_termination_date() {
		return fund_termination_date;
	}

	public void setFund_termination_date(String fund_termination_date) {
		this.fund_termination_date = fund_termination_date;
	}

	public int getMinimum_investment() {
		return minimum_investment;
	}

	public void setMinimum_investment(int minimum_investment) {
		this.minimum_investment = minimum_investment;
	}

	public int getMaximum_investment() {
		return maximum_investment;
	}

	public void setMaximum_investment(int maximum_investment) {
		this.maximum_investment = maximum_investment;
	}

	public List<FundFandQs> getFundFandQs() {
		return fundFandQs;
	}

	public void setFundFandQs(List<FundFandQs> fundFandQs) {
		this.fundFandQs = fundFandQs;
	}

	public List<FundPortfolioManager> getFundPortfolioManager() {
		return fundPortfolioManager;
	}

	public void setFundPortfolioManager(List<FundPortfolioManager> fundPortfolioManager) {
		this.fundPortfolioManager = fundPortfolioManager;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
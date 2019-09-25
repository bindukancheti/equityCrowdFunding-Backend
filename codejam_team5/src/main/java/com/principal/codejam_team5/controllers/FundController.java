package com.principal.codejam_team5.controllers;

import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.principal.codejam_team5.common.CommonFunc;
import com.principal.codejam_team5.domain.responses.CampaignDetail;
import com.principal.codejam_team5.domain.responses.CampaignMedia;
import com.principal.codejam_team5.domain.responses.MainCampaign;
import com.principal.codejam_team5.domain.responses.funds.FundCompilation;
import com.principal.codejam_team5.domain.responses.funds.FundDetail;
import com.principal.codejam_team5.domain.responses.funds.FundFandQs;
import com.principal.codejam_team5.domain.responses.funds.FundPortfolioManager;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class FundController {

	@Autowired
	JdbcTemplate jdbc;

	@GetMapping("/getAllFundsList")
	public List<FundDetail> getAllFundsDetailsList() {
		List<FundDetail> fundList = jdbc.query(
				"SELECT id, fund_name, category, fund_manager_id, start_date, end_date, short_description, prospectus_location, fund_termination_date, minimum_investment, maximum_investment FROM public.fund",
				new BeanPropertyRowMapper<FundDetail>(FundDetail.class));
		return fundList;
	}

	@GetMapping("/getAllFundListActive")
	public List<FundDetail> getAllFundListActive() {
		List<FundDetail> fundListActive = jdbc.query(
				"SELECT id, fund_name, category, fund_manager_id, start_date, end_date, short_description, prospectus_location, fund_termination_date, minimum_investment, maximum_investment,long_description FROM public.fund where start_date <= ? and end_date > ?",
				new Object[] { DateTime.now().toDate(), DateTime.now().toDate() },
				new BeanPropertyRowMapper<FundDetail>(FundDetail.class));

		CommonFunc commonFunc = new CommonFunc();
		for (FundDetail fundDetail : fundListActive) {
			fundDetail.setCapitalRaisedInThisFund(commonFunc.sumFundAmountInvested(jdbc, fundDetail.getId()));
			List<CampaignMedia> tempFundMedias = jdbc.query(
					"select file_location FROM public.campaign_media where fund_id =?",
					new Object[] { fundDetail.getId() }, new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));

			fundDetail.setFundMedias(tempFundMedias);

		}

		return fundListActive;
	}

	@GetMapping("/getFundDetail/{fund_id}")
	public FundDetail getFundDetail(@PathVariable("fund_id") int fund_id) {
		FundDetail fundDetail = jdbc.query(
				"SELECT id, fund_name, category, fund_manager_id, start_date, end_date, short_description, prospectus_location, fund_termination_date, minimum_investment, maximum_investment,long_description FROM public.fund where id = ?",
				new Object[] { fund_id }, new BeanPropertyRowMapper<FundDetail>(FundDetail.class)).get(0);

		fundDetail.setInvestors(jdbc.queryForObject("select count(*) from orders where item_id=? and invest_type='F'",
				new Object[] { fundDetail.getId() }, Integer.class));

		List<MainCampaign> fundCampaignsList = new ArrayList<MainCampaign>();
		List<FundCompilation> fundCampaignCompilation = jdbc.query(
				"SELECT fund_id, campaign_id, percentage from public.fund_compilation where fund_id = ?",
				new Object[] { fund_id }, new BeanPropertyRowMapper<FundCompilation>(FundCompilation.class));

		if (!fundCampaignCompilation.isEmpty()) {
			for (FundCompilation fundCampaign : fundCampaignCompilation) {
				MainCampaign campaignFundDetail = new MainCampaign();
				CampaignDetail campaignFundDetailTemp = jdbc.query(
						"SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date FROM public.campaign where id= ?",
						new Object[] { fundCampaign.getCampaign_id() },
						new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class)).get(0);
				campaignFundDetail.setCampaignDetail(campaignFundDetailTemp);
				
				List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {campaignFundDetailTemp.getId()},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
				if(!tempCampaignMedias.isEmpty())
					campaignFundDetail.setCampaignMedias(tempCampaignMedias);
				
				fundCampaignsList.add(campaignFundDetail);
			}
		}
		List<FundFandQs> fundFandQs = jdbc.query("SELECT question, answer FROM public.question_answer where fund_id=?;",
				new Object[] { fund_id }, new BeanPropertyRowMapper<FundFandQs>(FundFandQs.class));
		List<FundPortfolioManager> fundPortfolioManager = jdbc.query(
				"SELECT name, description FROM public.user where id=?",
				new Object[] { fundDetail.getFund_manager_id() },
				new BeanPropertyRowMapper<FundPortfolioManager>(FundPortfolioManager.class));

		List<CampaignMedia> tempFundMedias = jdbc.query(
				"select file_location FROM public.campaign_media where fund_id =?", new Object[] { fund_id },
				new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));

		fundDetail.setFundMedias(tempFundMedias);

		fundDetail.setFundCampaignsList(fundCampaignsList);
		fundDetail.setFundFandQs(fundFandQs);
		fundDetail.setFundPortfolioManager(fundPortfolioManager);

		CommonFunc commonFunc = new CommonFunc();
		fundDetail.setCapitalRaisedInThisFund(commonFunc.sumFundAmountInvested(jdbc, fund_id));

		return fundDetail;
	}

}

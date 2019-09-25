package com.principal.codejam_team5.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.principal.codejam_team5.common.CommonFunc;
import com.principal.codejam_team5.domain.requests.BuyBackDetail;
import com.principal.codejam_team5.domain.responses.BuyBackMainCampaignDetail;
import com.principal.codejam_team5.domain.responses.CampaignDetail;
import com.principal.codejam_team5.domain.responses.CampaignFandQ;
import com.principal.codejam_team5.domain.responses.CampaignFinancialReport;
import com.principal.codejam_team5.domain.responses.CampaignMedia;
import com.principal.codejam_team5.domain.responses.CampaignTeam;
import com.principal.codejam_team5.domain.responses.MainCampaign;
import com.principal.codejam_team5.domain.responses.funds.OrderDetail;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class BuyBackController {

	@Autowired
	JdbcTemplate jdbc;

	@PostMapping("/addBuyBack")
	public boolean addBuyBack(@RequestBody BuyBackDetail buyBackDetail) {
		try {
			jdbc.update("INSERT INTO public.buybackdetails\r\n" + "(campaign_id, return_percent)\r\n"
					+ "VALUES(?, ?);\r\n" + "",
					new Object[] { buyBackDetail.getCampaign_id(), buyBackDetail.getReturn_percent() });
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	@GetMapping("/getBuyBackMainCampaignDetails/{user_id}")
	public List<BuyBackMainCampaignDetail> getBuyBackDetails(@PathVariable("user_id") int user_id) {
		List<BuyBackMainCampaignDetail> buyBackMainCampaignDetails = new ArrayList<BuyBackMainCampaignDetail>();
		List<BuyBackDetail> buyBackDetails = jdbc.query(
				"select * from  buybackdetails where campaign_id in (select item_id from orders where user_id=? and invest_type='I')",
				new Object[] { user_id }, new BeanPropertyRowMapper<BuyBackDetail>(BuyBackDetail.class));
		for (BuyBackDetail buyBackDetail : buyBackDetails) {
			BuyBackMainCampaignDetail buyBackMainCampaignDetail = new BuyBackMainCampaignDetail();
			buyBackMainCampaignDetail.setBuyback_return_percentage(buyBackDetail.getReturn_percent());
			List<CampaignDetail> resultSet = jdbc.query(
					"SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date, category FROM public.campaign where id= ?",
					new Object[] { buyBackDetail.getCampaign_id() },
					new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
			if (resultSet.isEmpty())
				return null;
			else {
				MainCampaign mainCampaign = new MainCampaign();
				List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {resultSet.get(0).getId()},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
				if(!tempCampaignMedias.isEmpty())
					mainCampaign.setCampaignMedias(tempCampaignMedias);
				mainCampaign.setCampaignDetail(resultSet.get(0));
				buyBackMainCampaignDetail.setMainCampaign(mainCampaign);
				buyBackMainCampaignDetails.add(buyBackMainCampaignDetail);
			}
		}

		return buyBackMainCampaignDetails;
	}

	@GetMapping("/getBuyBackMainCampaignDetail/{campaign_id}")
	public BuyBackMainCampaignDetail getBuyBackMainCampaignDetail(@PathVariable int campaign_id )
	{
		BuyBackMainCampaignDetail buyBackMainCampaignDetail = new BuyBackMainCampaignDetail();
		buyBackMainCampaignDetail.setBuyback_return_percentage(jdbc.queryForObject("SELECT return_percent FROM public.buybackdetails where campaign_id= ?",new Object[] {campaign_id}, Integer.class));
		
		CommonFunc commonFunc = new CommonFunc();
		MainCampaign mainCampaign= new MainCampaign();
		List<CampaignDetail> resultSet=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date, category FROM public.campaign where id= ?",new Object[] {campaign_id}, new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
		if(resultSet.isEmpty())
			return null;
		else {
			
			int investors = jdbc.queryForObject("select count(*) from orders where item_id=? and invest_type='I'",new Object[] {resultSet.get(0).getId()},Integer.class);
		 	
			resultSet.get(0).setInvestors(investors);
			
			int number_of_fund = jdbc.queryForObject("select count(*) from fund_compilation where campaign_id=?",new Object[] {resultSet.get(0).getId()},Integer.class);
			
			resultSet.get(0).setNumber_of_fund(number_of_fund);
			
			mainCampaign.setCampaignDetail(resultSet.get(0));
			
			float capitalRaisedIndividually= commonFunc.sumAmountIndividual(jdbc, mainCampaign.getCampaignDetail().getId());
			mainCampaign.getCampaignDetail().setCapitalRaisedIndividually(capitalRaisedIndividually);
			
			float capitalRaisedInFunds=commonFunc.sumAmountFund(jdbc, mainCampaign.getCampaignDetail().getId());
			mainCampaign.getCampaignDetail().setCapitalRaisedInFunds(capitalRaisedInFunds);
			
			List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {campaign_id},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
			if(!tempCampaignMedias.isEmpty())
				mainCampaign.setCampaignMedias(tempCampaignMedias);
			
			List<CampaignFinancialReport> tempCampaignFinancialReports= jdbc.query("SELECT report, year, value FROM public.financials where campaign_id=?",new Object[] {campaign_id},new BeanPropertyRowMapper<CampaignFinancialReport>(CampaignFinancialReport.class));
			if(!tempCampaignFinancialReports.isEmpty())
				mainCampaign.setCampaignFinancialReports(tempCampaignFinancialReports);
			
			List<CampaignFandQ> tempCampaignFandQs= jdbc.query("SELECT question, answer FROM public.question_answer where campaign_id=?;",new Object[] {campaign_id},new BeanPropertyRowMapper<CampaignFandQ>(CampaignFandQ.class));
			if(!tempCampaignFandQs.isEmpty())
				mainCampaign.setCampaignFandQs(tempCampaignFandQs);
			
			List<CampaignTeam> tempCampaignTeams = jdbc.query("SELECT  name, profile, email_id FROM public.fundraiser_team where campaign_id=?;",new Object[] {campaign_id},new BeanPropertyRowMapper<CampaignTeam>(CampaignTeam.class));
			if(!tempCampaignTeams.isEmpty())
				mainCampaign.setCampaignTeams(tempCampaignTeams);
			
			buyBackMainCampaignDetail.setMainCampaign(mainCampaign);
			
			return buyBackMainCampaignDetail;
	}
	}
}

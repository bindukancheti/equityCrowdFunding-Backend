package com.principal.codejam_team5.controllers;


import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
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
import com.principal.codejam_team5.common.EmailSender;
import com.principal.codejam_team5.domain.responses.CampaignDetail;
import com.principal.codejam_team5.domain.responses.CampaignFandQ;
import com.principal.codejam_team5.domain.responses.CampaignFinancialReport;
import com.principal.codejam_team5.domain.responses.CampaignMedia;
import com.principal.codejam_team5.domain.responses.CampaignTeam;
import com.principal.codejam_team5.domain.responses.MainCampaign;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class CampaignController {
	
	@Autowired
	JdbcTemplate jdbc;
	
	@GetMapping("/getAllMainCampaignDetails")
	public List<MainCampaign> getAllMainCampaignDetails()
	{
		CommonFunc commonFunc = new CommonFunc();
		List<CampaignDetail> tempCampaignDetails=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date, category FROM public.campaign", new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
		List<MainCampaign> mainCampaigns = new ArrayList<MainCampaign>();
		for(CampaignDetail campaignDetail: tempCampaignDetails)
		{
			float capitalRaisedIndividually= commonFunc.sumAmountIndividual(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedIndividually(capitalRaisedIndividually);
			
			float capitalRaisedInFunds=commonFunc.sumAmountFund(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedInFunds(capitalRaisedInFunds);
			
			MainCampaign mainCampaign = new MainCampaign();
			
			
			mainCampaign.setCampaignDetail(campaignDetail);
			mainCampaigns.add(mainCampaign);
			
		}
		
		
		
		return mainCampaigns;
	}
	
	@GetMapping("/getAllMainCampaignDetailsApprovedAndActive")
	public List<MainCampaign> getAllMainCampaignDetailsApprovedAndActive()
	{
		CommonFunc commonFunc = new CommonFunc();
		List<CampaignDetail> tempCampaignDetails=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date , category FROM public.campaign where is_approved=true and end_date > ? and start_date <= ? ",new Object[] {DateTime.now().toDate() , DateTime.now().toDate()}, new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
		List<MainCampaign> mainCampaigns = new ArrayList<MainCampaign>();
		for(CampaignDetail campaignDetail: tempCampaignDetails)
		{
			float capitalRaisedIndividually= commonFunc.sumAmountIndividual(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedIndividually(capitalRaisedIndividually);
			
			float capitalRaisedInFunds=commonFunc.sumAmountFund(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedInFunds(capitalRaisedInFunds);
			
			MainCampaign mainCampaign = new MainCampaign();
			
			List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {campaignDetail.getId()},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
			if(!tempCampaignMedias.isEmpty())
				mainCampaign.setCampaignMedias(tempCampaignMedias);
			
			
			mainCampaign.setCampaignDetail(campaignDetail);
			mainCampaigns.add(mainCampaign);
		}
		
		return mainCampaigns;
	}
	
	@GetMapping("/getAllMainCampaignDetailsOnFundRaiserId/{fund_raiser_id}")
	public List<MainCampaign> getAllMainCampaignDetailsOnFundRaiserId(@PathVariable("fund_raiser_id") int fund_raiser_id)
	{
		CommonFunc commonFunc = new CommonFunc();
		List<CampaignDetail> tempCampaignDetails=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time,end_date, start_date , category FROM public.campaign where fund_raiser_id=?",new Object[] {fund_raiser_id}, new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
		List<MainCampaign> mainCampaigns = new ArrayList<MainCampaign>();
		for(CampaignDetail campaignDetail: tempCampaignDetails)
		{
			float capitalRaisedIndividually= commonFunc.sumAmountIndividual(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedIndividually(capitalRaisedIndividually);
			
			float capitalRaisedInFunds=commonFunc.sumAmountFund(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedInFunds(capitalRaisedInFunds);
			
			MainCampaign mainCampaign = new MainCampaign();
			
			List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {campaignDetail.getId()},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
			if(!tempCampaignMedias.isEmpty())
				mainCampaign.setCampaignMedias(tempCampaignMedias);
			
			mainCampaign.setCampaignDetail(campaignDetail);
			mainCampaigns.add(mainCampaign);
		}
		
		return mainCampaigns;
	}
	
	@GetMapping("/getAllMainCampaignDetailsOnFundRaiserIdApprovedAndActive/{fund_raiser_id}")
	public List<MainCampaign> getActiveAndApprovedMainCampaignDetailsOnFundRaiserId(@PathVariable("fund_raiser_id") int fund_raiser_id)
	{
		CommonFunc commonFunc = new CommonFunc();
		List<CampaignDetail> tempCampaignDetails=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time,end_date, start_date, category FROM public.campaign where fund_raiser_id=? and is_approved=true and end_date > ? and start_date <= ? ",new Object[] {fund_raiser_id , DateTime.now().toDate(), DateTime.now().toDate()}, new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
		List<MainCampaign> mainCampaigns = new ArrayList<MainCampaign>();
		for(CampaignDetail campaignDetail: tempCampaignDetails)
		{
			float capitalRaisedIndividually= commonFunc.sumAmountIndividual(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedIndividually(capitalRaisedIndividually);
			
			float capitalRaisedInFunds=commonFunc.sumAmountFund(jdbc, campaignDetail.getId());
			campaignDetail.setCapitalRaisedInFunds(capitalRaisedInFunds);
			
			MainCampaign mainCampaign = new MainCampaign();
			
			List<CampaignMedia> tempCampaignMedias= jdbc.query("select file_location FROM public.campaign_media where campaign_id =?",new Object[] {campaignDetail.getId()},new BeanPropertyRowMapper<CampaignMedia>(CampaignMedia.class));
			if(!tempCampaignMedias.isEmpty())
				mainCampaign.setCampaignMedias(tempCampaignMedias);
			
			mainCampaign.setCampaignDetail(campaignDetail);
			mainCampaigns.add(mainCampaign);
		}
		
		return mainCampaigns;
	}
	
	@GetMapping("/getMainCampaignDetailsOnCampaignId/{campaign_id}")
	public MainCampaign getMainCampaignDetailsOnCampaignId(@PathVariable("campaign_id") int campaign_id )
		{
		CommonFunc commonFunc = new CommonFunc();
			MainCampaign mainCampaign= new MainCampaign();
			List<CampaignDetail> resultSet=jdbc.query("SELECT id, name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, end_date, start_date, category FROM public.campaign where id= ?",new Object[] {campaign_id}, new BeanPropertyRowMapper<CampaignDetail>(CampaignDetail.class));
			if(resultSet.isEmpty())
				return null;
			else {
				 
				int investors = jdbc.queryForObject("select count(*) from orders where item_id=? and invest_type='I'",new Object[] {resultSet.get(0).getId()},Integer.class);
				
				int number_of_fund = jdbc.queryForObject("select count(*) from fund_compilation where campaign_id=?",new Object[] {resultSet.get(0).getId()},Integer.class);
				
				resultSet.get(0).setNumber_of_fund(number_of_fund);
				
				resultSet.get(0).setInvestors(investors);
				
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
				
				return mainCampaign;
			}
		}

	@PostMapping("/insertMainCampaignDetail")
	public Boolean insertMainCampaignDetail(@RequestBody MainCampaign mainCampaign)
	{
		
		CampaignDetail campaignDetail= mainCampaign.getCampaignDetail();
		
		try {
			Date date= new Date();
			Timestamp created_time= new Timestamp(date.getTime());
			DateTime end_date= new DateTime().parse(campaignDetail.getEnd_date(), DateTimeFormat.forPattern("yyyy-MM-dd"));
			System.out.println(end_date.toDate());
			DateTime start_date=new DateTime().parse(campaignDetail.getStart_date(), DateTimeFormat.forPattern("yyyy-MM-dd"));
		jdbc.update("INSERT INTO public.campaign\r\n" + 
				"(name, fund_raiser_id, short_pitch, address, city, fund_required, description, is_approved, equity_stake, created_time, start_date, end_date , category)\r\n" + 
				"VALUES(?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?);\r\n" + 
				"", new Object[] {campaignDetail.getName(),campaignDetail.getFund_raiser_id(),campaignDetail.getShort_pitch(),campaignDetail.getAddress(),campaignDetail.getCity(),
						campaignDetail.getFund_required(),campaignDetail.getDescription(),false,campaignDetail.getEquity_stake(),
						created_time,start_date.toDate(),end_date.toDate(), campaignDetail.getCategory()});
		
		int campaign_id= jdbc.queryForObject("select max(id) from campaign",Integer.class);
		
		for(CampaignFandQ campaignFandQ : mainCampaign.getCampaignFandQs()) {
			jdbc.update("INSERT INTO public.question_answer (question, answer, campaign_id) VALUES(?, ?, ?)",new Object[] {campaignFandQ.getQuestion(), campaignFandQ.getAnswer(),campaign_id});
		}
		for(CampaignTeam campaignTeam : mainCampaign.getCampaignTeams()) {
			jdbc.update("INSERT INTO public.fundraiser_team (name, profile, email_id, campaign_id) VALUES(?, ?, ?, ?)",new Object[] {campaignTeam.getName(), campaignTeam.getProfile(), campaignTeam.getEmail_id(),campaign_id});
		}
		
		for(CampaignFinancialReport campaignFinancialReport : mainCampaign.getCampaignFinancialReports()) {
			jdbc.update("INSERT INTO public.financials (report, year, value, campaign_id) VALUES(?, ?, ?, ?)",new Object[] {campaignFinancialReport.getReport(), campaignFinancialReport.getYear(),campaignFinancialReport.getValue(),campaign_id});
		}
		for(CampaignMedia campaignMedia : mainCampaign.getCampaignMedias()) {
			jdbc.update("INSERT INTO public.campaign_media(campaign_id, file_location) VALUES(?, ?)",new Object[] {campaign_id ,campaignMedia.getFile_location()});
		}
		
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;

	}
	
	@PostMapping("/updateMainCampaignDetail")
	public Boolean updateMainCampaignDetail(@RequestBody MainCampaign mainCampaign)
	{
		
		CampaignDetail campaignDetail= mainCampaign.getCampaignDetail();
		
		try {
			
			int campaign_id= campaignDetail.getId();
			
			jdbc.update("UPDATE public.campaign\r\n" + 
				"SET  short_pitch=?, address=?, city=?, description=?\r\n" + 
				"where id=?;", new Object[] {campaignDetail.getShort_pitch(),campaignDetail.getAddress(),campaignDetail.getCity(),
						campaignDetail.getDescription(),campaign_id});
		
		
		
		for(CampaignFandQ campaignFandQ : mainCampaign.getCampaignFandQs()) {
			jdbc.update("INSERT INTO public.question_answer (question, answer, campaign_id) VALUES(?, ?, ?)",new Object[] {campaignFandQ.getQuestion(), campaignFandQ.getAnswer(),campaign_id});
		}
		for(CampaignTeam campaignTeam : mainCampaign.getCampaignTeams()) {
			jdbc.update("INSERT INTO public.fundraiser_team (name, profile, email_id, campaign_id) VALUES(?, ?, ?, ?)",new Object[] {campaignTeam.getName(), campaignTeam.getProfile(), campaignTeam.getEmail_id(),campaign_id});
		}
		
		for(CampaignFinancialReport campaignFinancialReport : mainCampaign.getCampaignFinancialReports()) {
			jdbc.update("INSERT INTO public.financials (report, year, value, campaign_id) VALUES(?, ?, ?, ?)",new Object[] {campaignFinancialReport.getReport(), campaignFinancialReport.getYear(),campaignFinancialReport.getValue(),campaign_id});
		}
		for(CampaignMedia campaignMedia : mainCampaign.getCampaignMedias()) {
			jdbc.update("INSERT INTO public.campaign_media(campaign_id, file_location) VALUES(?, ?)",new Object[] {campaign_id ,campaignMedia.getFile_location()});
		}
		
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;

	}
	
	
}

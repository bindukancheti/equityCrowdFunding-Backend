package com.principal.codejam_team5.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.principal.codejam_team5.domain.responses.CampaignDetail;
import com.principal.codejam_team5.domain.responses.MainCampaign;
import com.principal.codejam_team5.domain.responses.UserDetail;
import com.principal.codejam_team5.domain.responses.UserInvestOnCampaignDetail;
import com.principal.codejam_team5.domain.responses.UserInvestOnFundDetail;
import com.principal.codejam_team5.domain.responses.testing;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class UserController {
	
	@Autowired
	JdbcTemplate jdbc;
	
	@PostMapping("/getUser")
	public UserDetail getUser(@RequestBody UserDetail tempUserDetail)
	{
		List<UserDetail> userDetails=jdbc.query("SELECT id, email, name, social_connect, description, role, company_name, password, annual_income, other_startup_investments, company_category \r\n" + 
				"FROM public.user where email= ? and password= ?",new Object[] {tempUserDetail.getEmail(),tempUserDetail.getPassword()},new BeanPropertyRowMapper<UserDetail>(UserDetail.class));
		
		if(userDetails.isEmpty())
			return null;
		
		else {
			
			List<UserInvestOnCampaignDetail> userInvestOnCampaignDetails = jdbc.query("select a.item_id as campaign_id ,a.amount , b.start_date , b.end_date \r\n" + 
					"	from (select item_id, amount from orders where user_id= ? and invest_type='I') a \r\n" + 
					"	inner join (select  id, start_date , end_date from campaign where id in (select item_id from orders where user_id= ? and invest_type='I')) b \r\n" + 
					"	on a.item_id = b.id",new Object[] {userDetails.get(0).getId(),userDetails.get(0).getId()},new BeanPropertyRowMapper<UserInvestOnCampaignDetail>(UserInvestOnCampaignDetail.class));
			
			for( UserInvestOnCampaignDetail userInvestOnCampaignDetail : userInvestOnCampaignDetails)
				userInvestOnCampaignDetail.intialiseIsActive();
			
			List<UserInvestOnFundDetail> userInvestOnFundDetails = jdbc.query("select a.item_id as fund_id ,a.amount , b.start_date , b.end_date\r\n" + 
					"	from (select item_id, amount from orders where user_id= ? and invest_type='F') a \r\n" + 
					"	inner join (select  id , start_date , end_date from fund where id in (select item_id from orders where user_id= ? and invest_type='F')) b \r\n" + 
					"	on a.item_id = b.id",new Object[] {userDetails.get(0).getId(),userDetails.get(0).getId()},new BeanPropertyRowMapper<UserInvestOnFundDetail>(UserInvestOnFundDetail.class));
			
			for( UserInvestOnFundDetail userInvestOnFundDetail : userInvestOnFundDetails)
				userInvestOnFundDetail.intialiseIsActive();
			
			userDetails.get(0).setUserInvestOnCampaignDetails(userInvestOnCampaignDetails);
			userDetails.get(0).setUserInvestOnFundDetails(userInvestOnFundDetails);
			
			
			
			return userDetails.get(0); 
		}
		
		
		
	}
	
	@PostMapping("/insertUser")
	public Boolean insetUser(@RequestBody UserDetail tempUserDetail)
	{
		try {
			
			jdbc.update("INSERT INTO public.user\r\n" + 
					"(email, name, social_connect, description, role, company_name, password, annual_income, other_startup_investments, company_category)\r\n" + 
					"VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", new Object[] {tempUserDetail.getEmail(),tempUserDetail.getName(),tempUserDetail.getSocial_connect(),tempUserDetail.getDescription(),
							tempUserDetail.getRole(), tempUserDetail.getCompany_name(), tempUserDetail.getPassword(),tempUserDetail.getAnnual_income(),
							tempUserDetail.getOther_startup_investments(),tempUserDetail.getCompany_category()});
			
			return true;
			
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
	

}

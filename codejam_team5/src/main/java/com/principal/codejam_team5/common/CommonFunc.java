package com.principal.codejam_team5.common;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.principal.codejam_team5.common.domain.FundAmountCampaignMapping;
import com.principal.codejam_team5.common.domain.Invest;

public class CommonFunc {
	
	public int sumAmountIndividual(JdbcTemplate jdbc, int campaign_id) {
		List<Invest> invests =jdbc.query("select sum(amount) as total , invest_type from orders where invest_type = 'I' and item_id=? group by invest_type",new Object[] {campaign_id}, new BeanPropertyRowMapper<Invest>(Invest.class));
		if(invests.isEmpty())
			return 0;
		else
		return invests.get(0).getTotal();
	}

	public float sumAmountFund(JdbcTemplate jdbc, int campaign_id) {
		List<FundAmountCampaignMapping> fundAmountCampaignMappings=jdbc.query("select a.total , b.fund_id, b.percentage from (select fund_id , percentage from fund_compilation a where campaign_id = ?) b \r\n" + 
				"inner join (select sum(amount) as total , item_id from orders where item_id in ( select fund_id from fund_compilation  where campaign_id = ?) and invest_type='F' group by item_id) a \r\n" + 
				"on  b.fund_id = a.item_id",new Object[] {campaign_id,campaign_id},new BeanPropertyRowMapper<FundAmountCampaignMapping>(FundAmountCampaignMapping.class));
		
		if(fundAmountCampaignMappings.isEmpty())
			return 0;
		else {
			float sum=0;
			for(FundAmountCampaignMapping fundAmountCampaignMapping : fundAmountCampaignMappings) {
				sum+=fundAmountCampaignMapping.getTotal()*((float)fundAmountCampaignMapping.getPercentage()/100);
			}
			return sum;
		}
	}
	
	public int sumFundAmountInvested(JdbcTemplate jdbc, int fund_id) {
		List<Invest> invests =jdbc.query("select sum(amount) as total , invest_type from orders where invest_type = 'F' and item_id=? group by invest_type",new Object[] {fund_id}, new BeanPropertyRowMapper<Invest>(Invest.class));
		if(invests.isEmpty())
			return 0;
		else
		return invests.get(0).getTotal();
	}

	
}

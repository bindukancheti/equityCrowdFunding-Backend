package com.principal.codejam_team5.domain.responses;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

public class UserInvestOnFundDetail {
	
	private static final long serialVersionUID= 1L;
	
	private int fund_id;
	private int amount;
	private boolean is_active;
	private String start_date;
	private String end_date;
	
	
	public int getFund_id() {
		return fund_id;
	}
	public void setFund_id(int fund_id) {
		this.fund_id = fund_id;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public boolean isIs_active() {
		return is_active;
	}
	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public void intialiseIsActive()
	{
		if(DateTime.parse(this.start_date,DateTimeFormat.forPattern("yyyy-MM-dd")).isBeforeNow() && DateTime.parse(this.end_date,DateTimeFormat.forPattern("yyyy-MM-dd")).isAfterNow() )
		{
			this.is_active=true;
		}else
			this.is_active=false;
	}
}

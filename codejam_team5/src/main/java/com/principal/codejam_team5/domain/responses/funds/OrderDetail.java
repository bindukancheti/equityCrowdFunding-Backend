package com.principal.codejam_team5.domain.responses.funds;

import java.io.Serializable;

public class OrderDetail implements Serializable{
	private static final long serialVersionUID = 1L;

	private int order_id;
	private int item_id;
	private int user_id;
	private int amount;
	private String invest_type;
	private String order_time;
	
	public String getOrder_time() {
		return order_time;
	}

	public void setOrder_time(String order_time) {
		this.order_time = order_time;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getItem_id() {
		return item_id;
	}

	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getInvest_type() {
		return invest_type;
	}

	public void setInvest_type(String invest_type) {
		this.invest_type = invest_type;
	}

}

package com.principal.codejam_team5.controllers;

import java.sql.Timestamp;
import java.util.Date;
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

import com.principal.codejam_team5.common.EmailSender;
import com.principal.codejam_team5.common.domain.Email;
import com.principal.codejam_team5.domain.responses.funds.OrderDetail;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class InvestorController {

	@Autowired
	JdbcTemplate jdbc;

	@GetMapping("/getCartItems/{id}")
	public List<OrderDetail> getCartItems(@PathVariable("id") int id) {
		List<OrderDetail> cartItems = jdbc.query(
				"SELECT item_id, user_id, amount, invest_type FROM public.cart where id = ?", new Object[] { id },
				new BeanPropertyRowMapper<OrderDetail>(OrderDetail.class));
		return cartItems;
	}

	@PostMapping("/insertItemToCart")
	public Boolean insertItemToCart(@RequestBody OrderDetail orderDetail) {
		try {
			jdbc.update(
					"INSERT INTO public.cart\r\n" + "(item_id, user_id, amount, invest_type)\r\n"
							+ "VALUES(?, ?, ?, ?);",
					new Object[] { orderDetail.getItem_id(), orderDetail.getUser_id(), orderDetail.getAmount(),
							orderDetail.getInvest_type() });

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@GetMapping("/placeOrderFromCart/{id}")
	public Boolean placeOrderFromCart(@PathVariable("id") int id) {

		List<OrderDetail> cartItems = jdbc.query(
				"SELECT item_id, user_id, amount, invest_type FROM public.cart where user_id = ?", new Object[] { id },
				new BeanPropertyRowMapper<OrderDetail>(OrderDetail.class));
		try {
			Date date = new Date();
			Timestamp created_time = new Timestamp(date.getTime());

			for (OrderDetail item : cartItems) {
				jdbc.update(
						"INSERT INTO public.orders(item_id, user_id, amount, order_time, invest_type)\r\n"
								+ "VALUES(?, ?, ?,?, ?);",
						new Object[] { item.getItem_id(), item.getUser_id(), item.getAmount(), created_time,
								item.getInvest_type() });

				jdbc.update("DELETE FROM public.cart where item_id = ? and user_id = ? and invest_type = ?",
						new Object[] { item.getItem_id(), item.getUser_id(), item.getInvest_type() });
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@GetMapping("/getOrderItems/{id}")
	public List<OrderDetail> getOrderItems(@PathVariable("id") int id) {
		List<OrderDetail> orderItems = jdbc.query(
				"SELECT order_id, item_id, user_id, amount, invest_type FROM public.cart where id = ?",
				new Object[] { id }, new BeanPropertyRowMapper<OrderDetail>(OrderDetail.class));
		return orderItems;
	}

	@PostMapping("/insertOrder")
	public Boolean insertOrder(@RequestBody List<OrderDetail> orderDetail) {
		try {
			Date date = new Date();
			Timestamp created_time = new Timestamp(date.getTime());
			for (OrderDetail orderItem : orderDetail) {
				jdbc.update(
						"INSERT INTO public.orders(item_id, user_id, amount, order_time, invest_type)\r\n"
								+ "VALUES(?, ?, ?,?, ?);",
						new Object[] { orderItem.getItem_id(), orderItem.getUser_id(), orderItem.getAmount(),
								created_time, orderItem.getInvest_type() });
			}

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@PostMapping("/updateOrder")
	public Boolean updateOrder(@RequestBody List<OrderDetail> orderDetail) {
		Email email = new Email();
		try {
			
			for (OrderDetail orderItem : orderDetail) {
				jdbc.update("UPDATE public.orders SET amount = ? WHERE user_id = ? and item_id = ? and invest_type = ?",
						new Object[] { orderItem.getAmount(), orderItem.getUser_id(), orderItem.getItem_id(),
								orderItem.getInvest_type() });
				
				email.setBody("Amount Divested on Start Up Id:"+orderItem.getItem_id()+" is "+orderItem.getAmount()+"\n");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		//email.setEmail(jdbc.queryForObject("select email from user where id=?", new Object[] {orderDetail.get(0).getItem_id()}, String.class));
		
		email.setEmail("the.avinashk@gmail.com");
		
		email.setSubject("Your Buy Back Details");
		
		EmailSender emailSender= new EmailSender();
		try {
			emailSender.sendmail(email);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return true;
		}
		return true;
	}

	@PostMapping("/insertOrUpdateOrder")
	public Boolean insertOrUpdateOrder(@RequestBody List<OrderDetail> orderDetail) {
		Email email = new Email();
		try {
			
			Date date = new Date();
			Timestamp created_time = new Timestamp(date.getTime());
			for (OrderDetail orderItem : orderDetail) {

				List<OrderDetail> orderItemExist = jdbc.query(
						"SELECT order_id, item_id, user_id, amount, invest_type FROM public.orders where user_id = ? and item_id = ? and invest_type = ?",
						new Object[] { orderItem.getUser_id(), orderItem.getItem_id(), orderItem.getInvest_type() },
						new BeanPropertyRowMapper<OrderDetail>(OrderDetail.class));
				if (!orderItemExist.isEmpty()) {
					//int oldAmount = orderItemExist.get(0).getAmount();
					jdbc.update(
							"UPDATE public.orders SET amount = ? WHERE user_id = ? and item_id = ? and invest_type = ?",
							new Object[] { orderItem.getAmount(), orderItem.getUser_id(),
									orderItem.getItem_id(), orderItem.getInvest_type() });
				} else {
					jdbc.update(
							"INSERT INTO public.orders(item_id, user_id, amount, order_time, invest_type)\r\n"
									+ "VALUES(?, ?, ?,?, ?);",
							new Object[] { orderItem.getItem_id(), orderItem.getUser_id(), orderItem.getAmount(),
									created_time, orderItem.getInvest_type() });
				}
				
				email.setBody("Amount Invested on Start Up Id:"+orderItem.getItem_id()+" is "+orderItem.getAmount()+"\n");

			}

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		//email.setEmail(jdbc.queryForObject("select email from user where id=?", new Object[] {orderDetail.get(0).getItem_id()}, String.class));
		
				email.setEmail("the.avinashk@gmail.com");
				
				email.setSubject("Your InvestMents Details");
		
				EmailSender emailSender= new EmailSender();
				try {
					emailSender.sendmail(email);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					return true;
				}
		return true;
	}

}

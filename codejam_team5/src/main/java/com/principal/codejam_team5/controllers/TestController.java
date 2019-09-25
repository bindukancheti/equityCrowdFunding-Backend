package com.principal.codejam_team5.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.principal.codejam_team5.common.EmailSender;
import com.principal.codejam_team5.common.domain.Email;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class TestController {
	
	@Autowired
	JdbcTemplate Jdbc;
	
	@GetMapping("/hello")
	public void test()
	{
			EmailSender emailSender= new EmailSender();
			
			Email email = new Email();
			email.setBody("Test");
			email.setEmail("the.avinashk@gmail.com");
			email.setSubject("Test through object");
		
		try {
			emailSender.sendmail(email);
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}
	
	@GetMapping("/hello1")
	public void insert()
	{
		Jdbc.update("INSERT INTO test.sample (id, testname) VALUES (?, ?)",3,"purvi");
	}

	@GetMapping("/hello123")
	public String hello()
	{
		return "Hi Avinash";
	}
}

package com.principal.codejam_team5.domain.responses.funds;

import java.io.Serializable;

public class FundFandQs implements Serializable{
	private static final long serialVersionUID= 1L;
	
	private String question;
	private String answer;
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
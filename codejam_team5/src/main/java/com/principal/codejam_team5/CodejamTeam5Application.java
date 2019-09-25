package com.principal.codejam_team5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication

public class CodejamTeam5Application extends SpringBootServletInitializer {
	
	@Override
    protected SpringApplicationBuilder configure(
      SpringApplicationBuilder builder) {
        return builder.sources(CodejamTeam5Application.class);
    }

	public static void main(String[] args) {
		
		
		SpringApplication.run(CodejamTeam5Application.class, args);
	}

}

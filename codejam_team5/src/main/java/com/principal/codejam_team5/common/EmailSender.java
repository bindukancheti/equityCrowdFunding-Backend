package com.principal.codejam_team5.common;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.principal.codejam_team5.common.domain.Email;

public class EmailSender {

    static final String FROM = "getusinvest@gmail.com";
    static final String FROMNAME = "Get Set Invest";
	
   
    
    static final String SMTP_USERNAME = "AKIAVQFB35KJ4PZ7BUAN";
    
    static final String SMTP_PASSWORD = "BOdEDImwRy3njpDQczi1o9dLPKzeDU9iIaqe+6zssDkh";
   
    
    static final String HOST = "email-smtp.us-east-1.amazonaws.com";
    
    static final int PORT = 25;
 
    public void sendmail(Email email) throws Exception {

    	Properties props = System.getProperties();
    	props.put("mail.transport.protocol", "smtp");
    	props.put("mail.smtp.port", PORT); 
    	props.put("mail.smtp.starttls.enable", "true");
    	props.put("mail.smtp.auth", "true");
    	props.put("mail.smpt.starttls.required", "true");
    	props.put("mail.smtp.localhost", HOST);

    	Session session = Session.getDefaultInstance(props);

        // Create a message with the specified information. 
        MimeMessage msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress(FROM,FROMNAME));
        msg.setRecipient(Message.RecipientType.TO, new InternetAddress(email.getEmail()));
        msg.setSubject(email.getSubject());
        msg.setContent(email.getBody(),"text/html");
        
            
        // Create a transport.
        Transport transport = session.getTransport();
                    
        // Send the message.
        try
        {
            System.out.println("Sending...");
            
            // Connect to Amazon SES using the SMTP username and password you specified above.
            transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);
        	
            // Send the email.
            transport.sendMessage(msg, msg.getAllRecipients());
            System.out.println("Email sent!");
        }
        catch (Exception ex) {
            System.out.println("The email was not sent.");
            System.out.println("Error message: " + ex.getMessage());
        }
        finally
        {
            // Close and terminate the connection.
            transport.close();
        }
    }
}

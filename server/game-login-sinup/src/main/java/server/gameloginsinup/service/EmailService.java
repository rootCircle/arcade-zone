package server.gameloginsinup.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.gameloginsinup.dao.UserDao;
import server.gameloginsinup.entity.UserTable;
import server.gameloginsinup.pages.EmailPage;

@Service
public class EmailService {

    @Autowired
    private UserDao userDao;

    // public boolean sendEmail(EmailPage emailPage) {
    public boolean sendEmail(String emailPage) {


        boolean f = false;

        String to = emailPage;

        // String to = emailPage.getTo();
        // String message = emailPage.getMessage();
        // String description = emailPage.getDescription();

        String from = "lcs2022027@iiitl.ac.in";

        // Variable for gmail
        String host = "smtp.gmail.com";

        // get the system properties
        Properties properties = System.getProperties();
        System.out.println("PROPERTIES " + properties);

        // setting important information to properties object

        // host set
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication(){
                return new PasswordAuthentication("lcs2022027@iiitl.ac.in","*********");
            }
        });

        session.setDebug(true);

        UserTable user = userDao.findByEmail(emailPage);

        String passwordToken = user.getPasswordToken();

        // Step 2 : compose the message [text,multi media]
        MimeMessage m = new MimeMessage(session);

        try {

            // from email
            m.setFrom(from);

            // adding recipient to message
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // adding subject to message
            m.setSubject("Password change : ");

            // adding text to message
            m.setText("Password token"+passwordToken);

            // send

            // Step 3 : send the message using Transport class
            Transport.send(m);

            f = true;

            System.out.println("Sent success...................");

        } catch (Exception e) {
            e.printStackTrace();
        }
        return f;
    }
}

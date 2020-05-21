package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.mail.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MailRestController {

    @Autowired
    public EmailService emailService;

    @GetMapping("/mail")
    private void sendSimpleMail(){
        emailService.sendSimpleMessage("mdasportsevents@gmail.com", "Test mail", "This a test message");
    }
}

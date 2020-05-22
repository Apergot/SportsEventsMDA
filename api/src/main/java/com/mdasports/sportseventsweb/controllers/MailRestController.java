package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.mail.Contact;
import com.mdasports.sportseventsweb.mail.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MailRestController {

    @Autowired
    public EmailService emailService;

    @Value("${spring.mail.username}")
    private String adminMail;

    @GetMapping("/contact")
    private void sendSimpleMail(){
        emailService.sendSimpleMessage("mdasportsevents@gmail.com", "Test mail", "This a test message");
    }

    @PostMapping("/contact")
    private ResponseEntity<?> sendMails(@Valid @RequestBody Contact contact, BindingResult result){
        Map<String, Object> map = new HashMap<>();

        if (result.hasErrors()) {
            List<String> errors = new ArrayList<>();
            for (FieldError err: result.getFieldErrors()) {
                errors.add(err.getDefaultMessage());
            }
            map.put("error", errors);
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }

        try {
            emailService.sendSimpleMessage(adminMail, contact.getSubject().concat(": " + contact.getEmail()), contact.getMessage());
        } catch (MailException e) {
            map.put("message", "error sending mail to admin");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        try {
            String bodyMail = "We have received your request correctly, will be processed as soon as possible.";
            emailService.sendSimpleMessage(contact.getEmail(), "Request sent correctly", bodyMail);
        } catch (MailException e) {
            map.put("message", "error sending confirmation mail");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        map.put("message", "We have received your request successfully!");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

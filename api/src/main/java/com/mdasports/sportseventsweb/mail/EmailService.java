package com.mdasports.sportseventsweb.mail;

public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}

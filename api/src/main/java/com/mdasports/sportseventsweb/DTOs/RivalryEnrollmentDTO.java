package com.mdasports.sportseventsweb.DTOs;

import java.util.Date;

public class RivalryEnrollmentDTO {

    private String rivalryName;
    private Date rivalryDate;
    private Long user_id;
    private Long rivalry_id;
    private Date enrollmentDate;
    private Long enrollment_id;

    public RivalryEnrollmentDTO(String rivalryName, Date rivalryDate, Long user_id, Long rivalry_id, Date enrollmentDate, Long enrollment_id) {
        this.rivalryName = rivalryName;
        this.rivalryDate = rivalryDate;
        this.user_id = user_id;
        this.rivalry_id = rivalry_id;
        this.enrollmentDate = enrollmentDate;
        this.enrollment_id = enrollment_id;
    }

    public String getRivalryName() {
        return rivalryName;
    }

    public void setRivalryName(String rivalryName) {
        this.rivalryName = rivalryName;
    }

    public Date getRivalryDate() {
        return rivalryDate;
    }

    public void setRivalryDate(Date rivalryDate) {
        this.rivalryDate = rivalryDate;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getRivalry_id() {
        return rivalry_id;
    }

    public void setRivalry_id(Long rivalry_id) {
        this.rivalry_id = rivalry_id;
    }

    public Date getEnrollmentDate() {
        return enrollmentDate;
    }

    public void setEnrollmentDate(Date enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }

    public Long getEnrollment_id() {
        return enrollment_id;
    }

    public void setEnrollment_id(Long enrollment_id) {
        this.enrollment_id = enrollment_id;
    }
}

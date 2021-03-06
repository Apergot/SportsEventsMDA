package com.mdasports.sportseventsweb.models.entities;

import com.mdasports.sportseventsweb.models.services.State;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="enrollments")
public class Enrollment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long rivalry_id;

    @Column(nullable = false)
    private Long user_id;

    @Enumerated(EnumType.STRING)
    private State state = State.ENABLED;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    private Date enrollmentDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRivalry_id() {
        return rivalry_id;
    }

    public void setRivalry_id(Long rivalry_id) {
        this.rivalry_id = rivalry_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Date getEnrollmentDate() {
        return enrollmentDate;
    }

    public void setEnrollmentDate(Date enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }


    private static final long serialVersionUID = 1L;

}

package com.mdasports.sportseventsweb.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "rivalries")
public class Rivalry implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "rivalry can not be empty")
    @Column(unique=true,length=60)
    private String rivalryname;

    @NotNull(message = "location can not be empty")
    @Column(length=30)
    private String location;

    private int capacity;

    @Temporal(TemporalType.DATE)
    private Date date_;

    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRivalryname() {
        return rivalryname;
    }

    public void setRivalryname(String rivalryname) {
        this.rivalryname = rivalryname;
    }

    public String getLocation(){
        return this.location;
    }

    public int getCapacity(){
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Date getDate(){
        return date_;
    }

    public void setDate(Date date) {
        this.date_ = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    private static final long serialVersionUID = 1L;
}

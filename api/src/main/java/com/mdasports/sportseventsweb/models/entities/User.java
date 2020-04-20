package com.mdasports.sportseventsweb.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "users")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "can not be empty")
    @Column(unique=true,length=15)
    private String username;

    @NotNull(message = "can not be empty")
    @Column(length=60)
    private String password;

    private boolean enabled;
    private String firstname;
    private String lastname;

    @Column(unique=true)
    private String email;

    @NotNull(message = "can not be empty")
    @ManyToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
    @JoinTable(uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id","roles_id"})})
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Role> roles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    private static final long serialVersionUID = 1L;
}

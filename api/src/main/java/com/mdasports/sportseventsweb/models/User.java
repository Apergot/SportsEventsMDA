package com.mdasports.sportseventsweb.models;

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

    private static final long serialVersionUID = 1L;
}

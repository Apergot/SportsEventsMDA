package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.models.entities.User;
import com.mdasports.sportseventsweb.models.services.IAdminUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {

    @Autowired
    private IAdminUsersService iAdminUsersService;

    @GetMapping("/users")
    public List<User> index(){
        return iAdminUsersService.findAll();
    }

    @GetMapping("/users/page/{page}")
    public Page <User> index(@PathVariable Integer page){
        Pageable pageable = PageRequest.of(page, 5);
        return iAdminUsersService.findAll(pageable);
    }



}

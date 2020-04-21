package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.models.entities.Role;
import com.mdasports.sportseventsweb.models.entities.User;
import com.mdasports.sportseventsweb.models.services.IAdminUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
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

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> map = new HashMap<>();
        try {
            iAdminUsersService.findById(id);
            iAdminUsersService.delete(id);
        } catch (DataAccessException e) {
            map.put("message", "Error deleting user");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "user deleted successfully");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

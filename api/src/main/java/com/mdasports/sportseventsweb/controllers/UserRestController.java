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
import org.springframework.security.access.annotation.Secured;
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

    @Secured({"ROLE_ADMIN"})
    @GetMapping("/users")
    public List<User> index(){
        return iAdminUsersService.findAll();
    }

    @Secured({"ROLE_ADMIN"})
    @GetMapping("/users/page/{page}")
    public Page <User> index(@PathVariable Integer page){
        Pageable pageable = PageRequest.of(page, 5);
        return iAdminUsersService.findAll(pageable);
    }

    @Secured({"ROLE_ADMIN"})
    @GetMapping("/users/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        User user = null;
        Map<String, Object> map = new HashMap<>();
        try {
            user = iAdminUsersService.findById(id);
        } catch (DataAccessException e) {
            map.put("message", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        if (user == null) {
            map.put("message", "User id ".concat(id.toString()).concat("does not exists"));
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);

    }

    @PostMapping("/users")
    public ResponseEntity<?> create(@Valid @RequestBody User user, BindingResult result) {

        User newUser = null;
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
            newUser = iAdminUsersService.save(user);
        } catch (DataAccessException e) {
            map.put("message", "Error inserting into database");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "User has been created successfully");
        map.put("user", newUser);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @Secured({"ROLE_ADMIN"})
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> map = new HashMap<>();
        try {
            iAdminUsersService.delete(id);
        } catch (DataAccessException e) {
            map.put("message", "Error deleting user");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "user deleted successfully");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody User user, @PathVariable Long id, BindingResult result) {

        User currentUser = iAdminUsersService.findById(id);
        Map<String, Object> map = new HashMap<>();

        if (result.hasErrors()) {
            List<String> errors = result.getFieldErrors()
                    .stream()
                    .map(err -> err.getDefaultMessage())
                    .collect(Collectors.toList());
            map.put("error", errors);
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }

        if (currentUser == null) {
            map.put("message", "Could not edit user with id ".concat(id.toString()).concat(" this does not exists"));
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

        User updatedUser = null;
        try {
            currentUser.setUsername(user.getUsername());
            currentUser.setPassword(user.getPassword());
            currentUser.setEnabled(user.isEnabled());
            currentUser.setFirstname(user.getFirstname());
            currentUser.setLastname(user.getLastname());
            currentUser.setEmail(user.getEmail());
            updatedUser = iAdminUsersService.save(currentUser);
        } catch (DataAccessException e) {
            map.put("message", "Error updating user data");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "user updated successfully");
        map.put("user", updatedUser);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }
}

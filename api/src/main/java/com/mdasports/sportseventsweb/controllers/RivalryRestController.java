package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.models.entities.Rivalry;
import com.mdasports.sportseventsweb.models.entities.User;
import com.mdasports.sportseventsweb.models.services.IAdminRivalriesService;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RivalryRestController {

    @Autowired
    private IAdminRivalriesService iAdminRivalriesService;

    @GetMapping("/rivalries")
    private List<Rivalry> index(){
        return iAdminRivalriesService.findAll();
    }

    @GetMapping("/rivalries/page/{page}")
    private Page<Rivalry> index(@PathVariable Integer page){
        Pageable pageable = PageRequest.of(page, 4);
        return iAdminRivalriesService.findAll(pageable);
    }

    @GetMapping("/rivalries/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Rivalry rivalry = null;
        Map<String, Object> map = new HashMap<>();
        try {
            rivalry = iAdminRivalriesService.findById(id);
        } catch (DataAccessException e) {
            map.put("message", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        if (rivalry == null) {
            map.put("message", "Rivalry id ".concat(id.toString()).concat("does not exists"));
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(rivalry, HttpStatus.OK);
    }

    @Secured({"ROLE_ADMIN","ROLE_USER"})
    @PostMapping("/rivalries")
    public ResponseEntity<?> create(@Valid @RequestBody Rivalry rivalry, BindingResult result) {

        Rivalry newRivalry = null;
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
            newRivalry = iAdminRivalriesService.save(rivalry);
        } catch (DataAccessException e) {
            map.put("message", "Error inserting into database");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "Rivalry has been created successfully");
        map.put("rivalry", newRivalry);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }
}

package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.models.entities.Rivalry;
import com.mdasports.sportseventsweb.models.services.IAdminRivalriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @DeleteMapping("/rivalries/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> map = new HashMap<>();
        try {
            iAdminRivalriesService.delete(id);
        } catch (DataAccessException e) {
            map.put("message", "Error deleting rivalry");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "rivalry has been deleted successfully");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
    @PutMapping("/rivalries/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody Rivalry rivalry, BindingResult result, @PathVariable Long id){

        Rivalry currentRivalry = iAdminRivalriesService.findById(id);
        Map<String, Object> map = new HashMap<>();
        if(result.hasErrors()){
            List<String> errors = result.getFieldErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            map.put("errors", errors);
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        if(currentRivalry==null){
            map.put("message", "Could not update rivalry with id ".concat(id.toString()));
        }

        Rivalry updatedRivalry = null;
        try{
            assert currentRivalry != null;
            currentRivalry.setRivalryname(rivalry.getRivalryname());
            currentRivalry.setLocation(rivalry.getLocation());
            currentRivalry.setCapacity(rivalry.getCapacity());
            currentRivalry.setRivalrydate(rivalry.getRivalrydate());
            currentRivalry.setDescription(rivalry.getDescription());
            updatedRivalry = iAdminRivalriesService.save(currentRivalry);
        }catch (DataAccessException e){
            map.put("message", "Error updating user data");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "Rivalry has been updated succesfully");
        map.put("rivalry", updatedRivalry);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }
}

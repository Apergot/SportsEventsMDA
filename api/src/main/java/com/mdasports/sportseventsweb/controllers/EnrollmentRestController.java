package com.mdasports.sportseventsweb.controllers;

import com.mdasports.sportseventsweb.models.entities.Enrollment;
import com.mdasports.sportseventsweb.models.services.IEnrollmentService;
import com.mdasports.sportseventsweb.models.services.State;
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
public class EnrollmentRestController {

    @Autowired
    private IEnrollmentService enrollmentService;

    @GetMapping("/enrollments")
    private List<Enrollment> index(){
        return enrollmentService.findAll();
    }
    @GetMapping("/enrollments/page/{page}")
    private Page<Enrollment> index(@PathVariable Integer page){
        Pageable pageable = PageRequest.of(page, 4);
        return enrollmentService.findAll(pageable);
    }
    //@Secured({"ROLE_ADMIN","ROLE_USER"})
    @PostMapping("/enrollments")
    private ResponseEntity<?> create(@Valid @RequestBody Enrollment enrollment, BindingResult result){

        Enrollment createdEnrollment=null;
        Map<String, Object> map = new HashMap<>();
        if (result.hasErrors()) {
            List<String> errors = new ArrayList<>();
            for (FieldError err: result.getFieldErrors()) {
                errors.add(err.getDefaultMessage());
            }
            map.put("error", errors);
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        try{
            /*createdEnrollment.setUser_id(enrollment.getUser_id());
            createdEnrollment.setRivalry_id(enrollment.getRivalry_id());
            createdEnrollment.setState(State.ENABLED);*/
            createdEnrollment = enrollmentService.save(enrollment);
        }catch (DataAccessException e){
            map.put("message", "Error inserting into database");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "enrollment created successfully");
        map.put("enrollment", createdEnrollment);
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    //@Secured({"ROLE_USER"})
    @DeleteMapping("/enrollments/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id){
        Map<String, Object> map = new HashMap<>();
        try{
            Enrollment enrollment = enrollmentService.findById(id);
            enrollmentService.remove(enrollment);
        }catch (DataAccessException e){
            map.put("message", "Error deleting enrollment");
            map.put("error", e.getMessage().concat(":").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        map.put("message", "enrollment deleted successfully");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}

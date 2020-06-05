package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.Enrollment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IEnrollmentService {

    List<Enrollment> findAll();
    Page<Enrollment> findAll(Pageable pageable);
    Enrollment findById(Long id);
    Enrollment save(Enrollment enrollment);
    void remove(Enrollment enrollment);
    List<Enrollment> retrieveAllUsersId(Long id);
}

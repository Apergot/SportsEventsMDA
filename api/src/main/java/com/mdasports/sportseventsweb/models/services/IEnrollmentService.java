package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.Enrollment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IEnrollmentService {

    public List<Enrollment> findAll();
    public Page<Enrollment> findAll(Pageable pageable);
    public Enrollment findById(Long id);
    public Enrollment save(Enrollment enrollment);
    public void remove(Enrollment enrollment);
}

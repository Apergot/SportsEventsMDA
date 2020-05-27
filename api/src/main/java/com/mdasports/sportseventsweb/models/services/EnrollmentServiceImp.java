package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.dao.IEnrollmentDao;
import com.mdasports.sportseventsweb.models.entities.Enrollment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EnrollmentServiceImp implements IEnrollmentService{

    @Autowired
    private IEnrollmentDao enrollmentDao;

    @Override
    @Transactional(readOnly = true)
    public List<Enrollment> findAll() {
        return enrollmentDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Enrollment> findAll(Pageable pageable) {
        return enrollmentDao.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Enrollment findById(Long id) {
        return enrollmentDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Enrollment save(Enrollment enrollment) {
        return enrollmentDao.save(enrollment);
    }

    @Override
    @Transactional
    public void remove(Enrollment enrollment) {
        enrollmentDao.delete(enrollment);
    }
}

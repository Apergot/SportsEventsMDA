package com.mdasports.sportseventsweb.models.dao;

import com.mdasports.sportseventsweb.models.entities.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEnrollmentDao extends JpaRepository<Enrollment, Long> {
}

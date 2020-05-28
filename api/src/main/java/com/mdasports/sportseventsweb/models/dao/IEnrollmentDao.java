package com.mdasports.sportseventsweb.models.dao;

import com.mdasports.sportseventsweb.models.entities.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IEnrollmentDao extends JpaRepository<Enrollment, Long> {

    @Query(value = "SELECT *  FROM enrollments WHERE user_id=:id", nativeQuery = true)
    public List<Enrollment> getEnrollmentsByUser_id(@Param("id") Long id);

}

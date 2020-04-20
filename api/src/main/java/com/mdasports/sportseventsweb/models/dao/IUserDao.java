package com.mdasports.sportseventsweb.models.dao;

import com.mdasports.sportseventsweb.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserDao extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

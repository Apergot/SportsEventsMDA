package com.mdasports.sportseventsweb.models.dao;

import com.mdasports.sportseventsweb.models.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserDao extends CrudRepository<User, Long> {
    User findByUsername(String username);
}

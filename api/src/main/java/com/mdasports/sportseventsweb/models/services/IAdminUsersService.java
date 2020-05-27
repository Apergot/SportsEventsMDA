package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAdminUsersService {
    List<User> findAll();
    Page<User> findAll(Pageable pageable);
    User findById(Long id);
    User save(User user);
    void delete(Long id);
    User getUserByUsername(String name);
}

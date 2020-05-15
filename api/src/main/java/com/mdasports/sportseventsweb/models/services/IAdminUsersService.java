package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAdminUsersService {
    public List<User> findAll();
    public Page<User> findAll(Pageable pageable);
    public User findById(Long id);
    public User save(User user);
    public void delete(Long id);
    public User getUserByUsername(String name);
}

package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import com.mdasports.sportseventsweb.models.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdminUsersServiceImp implements IAdminUsersService {

    @Autowired
    private IUserDao userAdminDao;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) userAdminDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<User> findAll(Pageable pageable) {
        return userAdminDao.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public User findById(Long id) {
        return userAdminDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public User save(User user) {
        return userAdminDao.save(user);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        userAdminDao.deleteById(id);
    }
}

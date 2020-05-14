package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.dao.IRivalryDao;
import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdminRivalryServiceImp implements IAdminRivalriesService{

    @Autowired
    public IRivalryDao rivalryAdminDao;

    @Override
    @Transactional(readOnly=true)
    public List<Rivalry> findAll(){
        return (List<Rivalry>) rivalryAdminDao.findAll();
    }
    @Override
    @Transactional(readOnly=true)
    public Page<Rivalry> findAll(Pageable pageable){
        return rivalryAdminDao.findAll(pageable);
    }
    @Override
    @Transactional(readOnly=true)
    public Rivalry findById(Long id){
        return rivalryAdminDao.findById(id).orElse(null);
    }
    @Override
    @Transactional
    public Rivalry save(Rivalry rivalry){
        return rivalryAdminDao.save(rivalry);
    }
    @Override
    @Transactional
    public void delete(Long id){
        rivalryAdminDao.deleteById(id);
    }
    @Override
    @Transactional
    public Rivalry getRivalryByName(String name) {
        return rivalryAdminDao.findByRivalryname(name);
    }
}

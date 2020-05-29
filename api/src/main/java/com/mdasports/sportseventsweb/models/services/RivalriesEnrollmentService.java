package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.dao.IRivalryDao;
import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RivalriesEnrollmentService {

    @Autowired
    public IRivalryDao rivalryDao;

    @Transactional(readOnly = true)
    public Rivalry findById(Long id){
        return rivalryDao.findById(id).orElse(null);
    }
}

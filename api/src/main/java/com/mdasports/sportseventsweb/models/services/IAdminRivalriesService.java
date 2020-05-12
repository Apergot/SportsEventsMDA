package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAdminRivalriesService {

    public List<Rivalry> findAll();
    public Page<Rivalry> findAll(Pageable pageable);
    public Rivalry findById(Long id);
    public Rivalry save(Rivalry rivalry);
    public void delete(Long id);
}

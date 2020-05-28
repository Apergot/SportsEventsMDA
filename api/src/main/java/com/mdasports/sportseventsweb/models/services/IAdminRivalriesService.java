package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAdminRivalriesService {

    List<Rivalry> findAll();
    Page<Rivalry> findAll(Pageable pageable);
    Rivalry findById(Long id);
    Rivalry save(Rivalry rivalry);
    void delete(Long id);
    Rivalry getRivalryByName(String name);
}

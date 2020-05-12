package com.mdasports.sportseventsweb.models.dao;

import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRivalryDao extends JpaRepository<Rivalry, Long> {
    Rivalry findByRivalryname(String rivalryname);
}

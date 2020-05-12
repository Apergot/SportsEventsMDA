package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.entities.User;

public interface IUserServiceClaims {
    User findByUsername(String username);
}

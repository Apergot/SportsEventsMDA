package com.mdasports.sportseventsweb.models.services;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import com.mdasports.sportseventsweb.models.entities.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService, IUserServiceClaims {

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private IUserDao userDao;

    @Override
    @Transactional(readOnly = true)
    public User findByUsername(String username) { return userDao.findByUsername(username); }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        User user = userDao.findByUsername(username);
        if (user == null) {
            logger.error(String.format(username, "Login error: user %s does not exists"));
            throw new UsernameNotFoundException(String.format("Login error: user %s does not exists", username));
        }
        List<GrantedAuthority> authorities = user.getRoles()
                .stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .peek(authority -> logger.info(String.format("Role: %s", authority.getAuthority())))
                .collect(Collectors.toList());
        return new org.springframework.security.core.userdetails.User(
                username,
                user.getPassword(),
                user.isEnabled(),
                true,
                true,
                true,
                authorities
        );
    }
}

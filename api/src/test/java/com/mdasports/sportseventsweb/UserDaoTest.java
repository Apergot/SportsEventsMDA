package com.mdasports.sportseventsweb;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import com.mdasports.sportseventsweb.models.entities.Role;
import com.mdasports.sportseventsweb.models.entities.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserDaoTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private IUserDao userDao;

    @Test
    public void whenFindByUsername_thenReturnUser() {

        //given
        User apergot = new User();
        apergot.setFirstname("Alejandro");
        apergot.setLastname("Perdomo");
        apergot.setUsername("Apergot");
        apergot.setEnabled(true);
        apergot.setPassword("$2a$10$Q2BWjW7p/4Dnxsz1LaTj3O/N0L6mJ/mTH0Y2HT4JMZDByRE7DEdmy");
        apergot.setEmail("apergot95@gmail.com");
        Role user_role = new Role();
        user_role.setId(1L);
        user_role.setName("ROLE_USER");
        Role admin_role = new Role();
        admin_role.setId(2L);
        admin_role.setName("ROLE_ADMIN");
        apergot.setRoles(Arrays.asList(user_role, admin_role));
        entityManager.persist(apergot);
        entityManager.flush();

        //when
        User found = userDao.findByUsername(apergot.getUsername());

        //then
        assertThat(found.getFirstname()).isEqualTo(apergot.getFirstname());
    }
}

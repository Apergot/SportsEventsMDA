package com.mdasports.sportseventsweb.integrationTests;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import com.mdasports.sportseventsweb.models.entities.Role;
import com.mdasports.sportseventsweb.models.entities.User;
import com.mdasports.sportseventsweb.models.services.AdminUsersServiceImp;
import com.mdasports.sportseventsweb.models.services.IAdminUsersService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class AdminUsersServiceImpIntegrationTest {

    @TestConfiguration
    static class AdminUsersImplTestContextConfiguration {
        @Bean
        public IAdminUsersService iAdminUsersService() {
            return new AdminUsersServiceImp();
        }
    }

    @Autowired
    private IAdminUsersService iAdminUsersService;

    @MockBean
    private IUserDao userDao;

    User apergot;

    @Before
    public void setUp() {
        apergot = new User();
        apergot.setId(10L);
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

        Mockito.when(iAdminUsersService.getUserByUsername(apergot.getUsername()))
                .thenAnswer(invocationOnMock -> apergot);
    }

    @Test
    public void whenValidName_thenUserShouldBeFound(){
        String username = "Apergot";
        User found = userDao.findByUsername(username);
        assertThat(found.getUsername()).isEqualTo(username);
    }

    @Test
    public void whenValidId_thenUserShouldBeFound(){
        Long id = 2L;
        Optional<User> found =  userDao.findById(id);
        if (found.isPresent()) {
            User user = found.get();
            assertThat(user.getUsername()).isEqualTo(apergot.getUsername());
        }
    }

}

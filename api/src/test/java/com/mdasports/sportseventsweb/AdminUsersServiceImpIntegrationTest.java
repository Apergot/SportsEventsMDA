package com.mdasports.sportseventsweb;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import com.mdasports.sportseventsweb.models.services.AdminUsersServiceImp;
import com.mdasports.sportseventsweb.models.services.IAdminUsersService;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

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

    //write test cases here

}

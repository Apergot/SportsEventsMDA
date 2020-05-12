package com.mdasports.sportseventsweb;

import com.mdasports.sportseventsweb.models.dao.IUserDao;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserDaoTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private IUserDao userDao;

    //write test cases here
}

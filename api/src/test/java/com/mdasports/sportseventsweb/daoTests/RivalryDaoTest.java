package com.mdasports.sportseventsweb.daoTests;

import com.mdasports.sportseventsweb.models.dao.IRivalryDao;
import com.mdasports.sportseventsweb.models.entities.Rivalry;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RivalryDaoTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private IRivalryDao rivalryDao;

    private Rivalry example;

    @Before
    public void init(){
        example = new Rivalry();
        example.setCapacity(1000);
        example.setRivalrydate(new Date());
        example.setRivalryname("Olimpic Games");
        example.setId(1L);
        example.setLocation("Las Palmas");
        example.setDescription("Carrera de atletismo");
        entityManager.merge(example);
        entityManager.flush();
    }

    @Test
    public void whenFindByRivalryname_thenReturnRivalry() {

        //when
        Rivalry found = rivalryDao.findByRivalryname(example.getRivalryname());

        //then
        assertThat(found.getRivalryname()).isEqualTo(example.getRivalryname());
        assertThat(found.getCapacity()).isEqualTo(example.getCapacity());
        assertThat(found.getRivalrydate()).isEqualTo(example.getRivalrydate());
        assertThat(found.getId()).isEqualTo(example.getId());
    }

}

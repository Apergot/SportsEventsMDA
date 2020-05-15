package com.mdasports.sportseventsweb.integrationTests;

import com.mdasports.sportseventsweb.models.dao.IRivalryDao;
import com.mdasports.sportseventsweb.models.entities.Rivalry;
import com.mdasports.sportseventsweb.models.services.AdminRivalryServiceImp;
import com.mdasports.sportseventsweb.models.services.IAdminRivalriesService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
public class AdminRivalryServiceImpIntegrationTest {

    @TestConfiguration
    static class AdminRivalriesImplTestContextConfiguration {
        @Bean
        public IAdminRivalriesService iAdminRivalriesService() {
            return new AdminRivalryServiceImp();
        }
    }

    @Autowired
    private IAdminRivalriesService iAdminRivalriesService;

    @MockBean
    private IRivalryDao rivalryDao;

    Rivalry rivalry;

    @Before
    public void setUp() {
        rivalry = new Rivalry();
        rivalry.setDescription("Competición de atletismo");
        rivalry.setLocation("Las Palmas");
        rivalry.setRivalryname("LPAthletism");
        rivalry.setRivalrydate(new Date());
        rivalry.setCapacity(2000);
        rivalry.setId(1L);

        Mockito.when(iAdminRivalriesService.getRivalryByName(rivalry.getRivalryname()))
                .thenAnswer(invocationOnMock -> rivalry);
    }

    @Test
    public void whenValidName_thenRivalryShouldBeFound(){
        String rivalryName = "LPAthletism";
        Rivalry found = rivalryDao.findByRivalryname(rivalryName);
        assertThat(found.getRivalryname()).isEqualTo(rivalryName);
    }

    @Test
    public void whenValidId_thenRivalryShouldBeFound(){
        Long id = 1L;
        Optional<Rivalry> found = rivalryDao.findById(id);
        if (found.isPresent()) {
            Rivalry retrieved = found.get();
            assertThat(retrieved.getRivalryname()).isEqualTo(rivalry.getRivalryname());
        }
    }
}

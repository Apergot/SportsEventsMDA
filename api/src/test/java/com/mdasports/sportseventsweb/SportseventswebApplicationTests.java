package com.mdasports.sportseventsweb;

import com.mdasports.sportseventsweb.controllers.RivalryRestController;
import com.mdasports.sportseventsweb.controllers.UserRestController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class SportseventswebApplicationTests {

    @Autowired
    private UserRestController userRestController;

    @Autowired
    private RivalryRestController rivalryRestController;

    //Sanity checks for the autowired injected controllers
    @Test
    void contextLoads() throws Exception{
        assertThat(userRestController).isNotNull();
        assertThat(rivalryRestController).isNotNull();
    }

}

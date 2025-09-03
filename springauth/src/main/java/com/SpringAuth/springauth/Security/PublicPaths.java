package com.SpringAuth.springauth.Security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PublicPaths {

    @Bean
    public List<String> publicPath() {
        return List.of("/api/v1/auth/**");
    }
}

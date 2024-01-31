package com.wp.user.global.config;


import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI(){
        SecurityScheme securityScheme = new SecurityScheme()
                .type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")
                .in(SecurityScheme.In.HEADER).name("Authorization");
        SecurityRequirement securityRequirement = new SecurityRequirement().addList("bearer");

        return new OpenAPI()
                .info(new Info()
                        .title("라이브 커머스 프로젝트 회원 API")
                        .description("회원 관리, 판매자 관리, 팔로우, 알림 기능을 제공합니다.")
                        .version("1.0.0"))
                .components(new Components().addSecuritySchemes("bearer", securityScheme))
                .security(Arrays.asList(securityRequirement));
    }

}

package com.example.FitnessGoalTracker.configuration;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**") // all endpoints, including swagger
//                        .allowedOrigins("http://localhost:3000", "http://localhost:8080") // add frontend + swagger-ui
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                        .allowedHeaders("*")
//                        .exposedHeaders("*")
//                        .allowCredentials(true);
//            }
//        };
//    }
//}

 
@Configuration
public class  CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000") // Your frontend URL
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowCredentials(false);
            }
        };
    }
}

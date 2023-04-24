package com.example.fyum.config;

import java.util.Arrays;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/**").permitAll()
            .antMatchers("/api/test").permitAll()
            .antMatchers("/api/oauth2/**").permitAll()
            .antMatchers("/login/oauth2/code/kakao").permitAll()
            .antMatchers("/favicon.ico").permitAll()
            .anyRequest().authenticated();

        http
            .httpBasic().disable()
            .cors().configurationSource(corsConfigurationSource())
            .and()
            .csrf().disable()
            .formLogin().disable()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

//        http.oauth2Login()
//            .authorizationEndpoint()
//            .baseUri("/api/oauth2/authorization")
//            .and()
//            .userInfoEndpoint() // 필수
//            .userService(principalOAuth2UserService)
//            .and()
//            .successHandler(oAuth2AuthenticationSuccessHandler);
//        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

//        http.exceptionHandling()
//            .authenticationEntryPoint((request, response, authException) -> {
//                authException.printStackTrace();
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                response.getWriter().print(authException.getMessage());
//            })
//            .accessDeniedHandler((request, response, accessDeniedException) -> {
//                accessDeniedException.printStackTrace();
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                response.getWriter().print(accessDeniedException.getMessage());
//            });
        return http.build();

    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowedHeaders(Arrays.asList(
            "Accept",
            "Accept-Language",
            "Authorization",
            "Content-Language",
            "Content-Type"
        ));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    AuthenticationManager authenticationManager(
        AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }


}

package com.wp.domain.auth.service;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.InitializingBean;

import java.util.Map;

public interface JwtTokenProviderService extends InitializingBean {

    public void afterPropertiesSet() throws Exception;
    public Map<String, String> createToken(String userId, String password, String auth);
    public boolean deleteRefreshToken(String email);
    public boolean validateAccessToken(String accessToken);
    public boolean validateRefreshToken(String refreshToken);
    public boolean validateAccessTokenOnlyExpired(String accessToken);
    public String resolveToken(HttpServletRequest httpServletRequest);
    public Claims getClaims(String token);
}

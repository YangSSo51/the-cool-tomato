package com.wp.domain.auth.service;

import com.wp.domain.auth.entity.JwtToken;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Key;
import java.util.*;

@Slf4j
@Service
@Transactional(readOnly = true)
public class JwtTokenProviderServiceImpl implements JwtTokenProviderService {

    @Autowired
    private AuthRedisService authRedisServiceImpl;
    private static final String AUTHORITIES_KEY = "auth";
    private static final String USER_ID = "userId";
    private static final String PASSWORD = "password";
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";

    @Value("${spring.jwt.secret}")
    private String secretKey;
    @Value("${spring.jwt.token-validity-in-seconds}")
    private Long tokenValidityInMilliseconds;

    private Key signingKey;

    @Override
    public void afterPropertiesSet() throws Exception {
        byte[] secretKeyBytes = Decoders.BASE64.decode(secretKey);
        signingKey = Keys.hmacShaKeyFor(secretKeyBytes);
    }

    @Transactional
    public Map<String, String> createToken(String userId, String password, String auth){
        Long now = System.currentTimeMillis();
        Long accessTokenValidityInMilliseconds = tokenValidityInMilliseconds * 1000;
        String accessToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS512")
                .setExpiration(new Date(now + accessTokenValidityInMilliseconds))
                .setSubject("access-token")
                .claim(USER_ID, userId)
                .claim(PASSWORD, password)
                .claim(AUTHORITIES_KEY, auth)
                .signWith(signingKey, SignatureAlgorithm.HS512)
                .compact();

        Long refreshTokenValidityInMilliseconds = tokenValidityInMilliseconds * 1000 * 2 * 24;
        String refreshToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS512")
                .setExpiration(new Date(now + refreshTokenValidityInMilliseconds))
                .setSubject("refresh-token")
                .signWith(signingKey, SignatureAlgorithm.HS512)
                .compact();

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);
        authRedisServiceImpl.registRefreshToken(userId, refreshToken);
        return tokens;
    }

    public boolean deleteRefreshToken(String email){
        return authRedisServiceImpl.removeRefreshToken(email);
    }

    public boolean validateAccessToken(String accessToken) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(accessToken);
            return true;
        } catch(ExpiredJwtException e) {
            return true; // => ???
        } catch (Exception e) {
            return false;
        }
    }

    public boolean validateRefreshToken(String refreshToken){
        JwtToken jwtToken = authRedisServiceImpl.getRefreshToken(refreshToken);
        if (jwtToken != null) {
            return false;
        }

        try {
            Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(refreshToken);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.error("잘못된 JWT 토큰입니다: " + jwtToken.getId());
        } catch (ExpiredJwtException e) {
            log.error("만료된 JWT 토큰입니다: " + jwtToken.getId());
        } catch (UnsupportedJwtException e) {
            log.error("지원되지 않는 JWT 토큰입니다: " + jwtToken.getId());
        } catch (IllegalArgumentException e) {
            log.error("JWT claims이 비어있습니다: " + jwtToken.getId());
        } catch (NullPointerException e){
            log.error("JWT 토큰이 비어있습니다" + jwtToken.getId());
        }
        return false;
    }

    public boolean validateAccessTokenOnlyExpired(String accessToken) {
        try {
            return getClaims(accessToken)
                    .getExpiration()
                    .before(new Date());
        } catch(ExpiredJwtException e) {
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String resolveToken(HttpServletRequest httpServletRequest) {
        String bearerToken = httpServletRequest.getHeader(AUTHORIZATION_HEADER);
        if (bearerToken != null && bearerToken.startsWith(BEARER_PREFIX)) {
            return bearerToken.substring(7);
        }
        return null;
    }

    public Claims getClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException e) { // Access Token
            return e.getClaims();
        }
    }
}

package com.wp.domain.auth.service;

import com.wp.domain.auth.entity.JwtToken;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Component
@Transactional(readOnly = true)
public class JwtTokenProvider implements InitializingBean {

    @Autowired
    private AuthRedisServiceImpl authRedisServiceImpl;
    private static final String AUTHORITIES_KEY = "role";
    private static final String EMAIL_KEY = "email";
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
    public List<String> createToken(String email, String authorities){
        Long now = System.currentTimeMillis();
        Long accessTokenValidityInMilliseconds = tokenValidityInMilliseconds * 1000;
        String accessToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS512")
                .setExpiration(new Date(now + accessTokenValidityInMilliseconds))
                .setSubject("access-token")
                .claim(EMAIL_KEY, email)
                .claim(AUTHORITIES_KEY, authorities)
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

        List<String> tokens = new ArrayList<>();
        tokens.add(accessToken);
        tokens.add(refreshToken);
        authRedisServiceImpl.registRefreshToken(email, refreshToken);
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

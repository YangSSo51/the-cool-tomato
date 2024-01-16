package com.wp.domain.auth.service;

import com.wp.domain.auth.entity.JwtToken;

public interface AuthRedisService {
    boolean registRefreshToken(String email, String refreshToken);
    JwtToken getRefreshToken(String email);
    boolean updateRefreshToken(String email, String refreshToken);
    boolean removeRefreshToken(String email);
}

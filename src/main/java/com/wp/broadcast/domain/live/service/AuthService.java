package com.wp.broadcast.domain.live.service;

public interface AuthService {
    public boolean validateToken(String token);
    public Long getUserId(String token);
    public String getAuth(String token);
}

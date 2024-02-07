package com.wp.live.domain.broadcast.service;

public interface AuthService {
    public boolean validateToken(String token);
    public Long getUserId(String token);
    public String getAuth(String token);
}

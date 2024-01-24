package com.wp.broadcast.domain.live.service;

public interface AuthConnectionService {
    public boolean validationToken(String token);
    public String getAuth(String token);
}

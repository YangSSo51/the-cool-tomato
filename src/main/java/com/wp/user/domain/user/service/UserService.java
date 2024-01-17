package com.wp.user.domain.user.service;


import com.wp.user.domain.user.dto.request.JoinRequest;

public interface UserService {
    void saveUser(JoinRequest joinRequest);
    boolean existUserByLoginId(String loginId);
}

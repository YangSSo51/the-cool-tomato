package com.wp.user.domain.user.service;


import com.wp.user.domain.user.dto.request.FindPasswordRequest;
import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.dto.request.LoginRequest;
import com.wp.user.domain.user.dto.response.DuplicateLoginIdResponse;
import com.wp.user.domain.user.dto.response.LoginResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.transaction.annotation.Transactional;


public interface UserService {
    void saveUser(JoinRequest joinRequest);
    DuplicateLoginIdResponse existUserByLoginId(String loginId);
    LoginResponse login(LoginRequest logInRequest);
    void findLoginIdByEmail(String email);
    void setTempPasswordByEmail(String loginId, String email);
    void logout(HttpServletRequest httpServletRequest);
    void removeUser(HttpServletRequest httpServletRequest);
}

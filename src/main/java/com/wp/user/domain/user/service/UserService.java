package com.wp.user.domain.user.service;


import com.wp.user.domain.user.dto.request.AddUserRequest;
import com.wp.user.domain.user.dto.request.LoginRequest;
import com.wp.user.domain.user.dto.request.ModifyUserRequest;
import com.wp.user.domain.user.dto.response.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {
    void addUser(AddUserRequest addUserRequest);
    DuplicateLoginIdResponse getUserByLoginId(String loginId);
    CheckEmailResponse checkEmail(String email);
    CheckEmailVerificationResponse checkEmailVerification(String email, String code);
    LoginResponse login(LoginRequest logInRequest);
    void getLoginIdByEmail(String email);
    void getPasswordByEmail(String loginId, String email);
    void logout(HttpServletRequest httpServletRequest);
    GetUserResponse getUser(HttpServletRequest httpServletRequest);
    ModifyUserResponse modifyUser(HttpServletRequest httpServletRequest, MultipartFile profileImgFile, ModifyUserRequest modifyUserRequest);
    void removeUser(HttpServletRequest httpServletRequest);
    GetUserListResponse getUsers(HttpServletRequest httpServletRequest);
    void forceRemoveUser(HttpServletRequest httpServletRequest, Long id);
}

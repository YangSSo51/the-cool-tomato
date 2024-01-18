package com.wp.user.domain.user.service;

import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.dto.request.LoginRequest;
import com.wp.user.domain.user.dto.response.DuplicateLoginIdResponse;
import com.wp.user.domain.user.dto.response.LoginResponse;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
import com.wp.user.global.common.code.ErrorCode;
import com.wp.user.global.common.service.JwtService;
import com.wp.user.global.exception.BusinessExceptionHandler;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder passwordEncoder;

    // 회원가입
    @Override
    @Transactional
    public void saveUser(JoinRequest joinRequest) {

        // 이메일 중복인 경우 강제 에러 발생
        try {
            if(userRepository.existsByEmail(joinRequest.getEmail()))
                throw new BusinessExceptionHandler(ErrorCode.ALREADY_REGISTERED_EMAIL);
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.ALREADY_REGISTERED_EMAIL); // errorCode : B001
        }

        // User 엔티티 생성
        User user = User.builder()
                .auth(Auth.BUYER)
                .loginId(joinRequest.getLoginId())
                .password(passwordEncoder.encode(joinRequest.getPassword()))
                .email(joinRequest.getEmail())
                .nickname(joinRequest.getNickname())
                .sex(joinRequest.getSex())
                .birthday(joinRequest.getBirthday())
                .build();

        // 회원 저장
        userRepository.save(user);
    }

    // 로그인 ID 중복 확인
    @Override
    public DuplicateLoginIdResponse existUserByLoginId(String loginId) {
        boolean isDuplicate = userRepository.existsByLoginId(loginId);
        return DuplicateLoginIdResponse.builder().isDuplicate(isDuplicate).build();
    }

    @Override
    @Transactional
    public LoginResponse login(LoginRequest logInRequest) {
        // 로그인, 패스워드 검사
        User user = userRepository.findUserByLoginId(logInRequest.getLoginId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER)); // errorCode : B002
        try {
            if(!passwordEncoder.matches(logInRequest.getPassword(), user.getPassword()))
                throw new BusinessExceptionHandler(ErrorCode.NOT_VALID_PASSWORD);
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_VALID_PASSWORD); // errorCode : B003
        }
        // 토큰 발급
        return LoginResponse.builder().accessToken("").refreshToken("").build();
    }

    @Override
    public void logout(HttpServletRequest httpServletRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 로그아웃 처리
    }


}

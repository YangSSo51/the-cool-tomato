package com.wp.user.domain.user.service;

import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
import com.wp.user.global.common.code.ErrorCode;
import com.wp.user.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
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
                .password(joinRequest.getPassword())
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
    public boolean existUserByLoginId(String loginId) {
        return userRepository.existsByLoginId(loginId);
    }
}

package com.wp.user.domain.user.service;

import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
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
    @Transactional
    public void saveUser(JoinRequest joinRequest) {

        User user = User.builder()
                .auth(Auth.BUYER)
                .loginId(joinRequest.getLoginId())
                .password(joinRequest.getPassword())
                .email(joinRequest.getEmail())
                .nickname(joinRequest.getNickname())
                .sex(joinRequest.getSex())
                .birthday(joinRequest.getBirthday())
                .build();

        userRepository.save(user);
    }
}

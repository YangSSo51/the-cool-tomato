package com.wp.user.domain.user.repository;

import com.wp.user.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // 로그인 아이디 중복 체크
    boolean existsByLoginId(String loginId);
    // 이메일 중복 체크
    boolean existsByEmail(String email);
    // 로그인 아이디로 회원 정보 찾기
    Optional<User> findUserByLoginId(String loginId);
}

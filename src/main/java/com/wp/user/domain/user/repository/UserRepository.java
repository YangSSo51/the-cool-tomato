package com.wp.user.domain.user.repository;

import com.wp.user.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // 로그인 아이디 중복 체크
    boolean existsByLoginId(String loginId);
    // 이메일 중복 체크
    boolean existsByEmail(String email);
}

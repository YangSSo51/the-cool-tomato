package com.wp.live.domain.broadcast.repository;

import com.wp.live.domain.broadcast.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

package com.wp.user.domain.follow.repository;

import com.wp.user.domain.follow.entity.FollowManage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowManageRepository extends JpaRepository<FollowManage, Long> {
    void deleteByFollowerIdAndFollowingId(Long followerId, Long followingId);
    boolean existsByFollowerIdAndFollowingId(Long followerId, Long followingId);

    List<FollowManage> findAllByFollowerId(Long followerId);
}

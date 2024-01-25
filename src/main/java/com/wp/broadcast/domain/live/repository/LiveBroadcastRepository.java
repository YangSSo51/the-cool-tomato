package com.wp.broadcast.domain.live.repository;

import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface LiveBroadcastRepository extends JpaRepository<LiveBroadcast, Long> {
}

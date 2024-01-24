package com.wp.broadcast.domain.live.repository;

import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LiveBroadcastRepository extends JpaRepository<LiveBroadcast, Long> {
}

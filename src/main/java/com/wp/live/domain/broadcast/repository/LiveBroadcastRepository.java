package com.wp.live.domain.broadcast.repository;

import com.wp.live.domain.broadcast.entity.LiveBroadcast;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
@Transactional
public interface LiveBroadcastRepository extends JpaRepository<LiveBroadcast, Long> {
    @EntityGraph(attributePaths = {"user"})
    public Page<LiveBroadcast> findAllByBroadcastStatus(Boolean broadcastStatus, Pageable pageable);

    public Page<LiveBroadcast> findByUserIdIn(Collection<Long> id, Pageable pageable);
}

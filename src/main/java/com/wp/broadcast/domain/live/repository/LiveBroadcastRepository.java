package com.wp.broadcast.domain.live.repository;

import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface LiveBroadcastRepository extends JpaRepository<LiveBroadcast, Long> {
    @Override
    @EntityGraph(attributePaths = {"user"})
    List<LiveBroadcast> findAll();
    @EntityGraph(attributePaths = {"user"})
    Optional<LiveBroadcast> findById(Long id);

    @EntityGraph(attributePaths = {"user"})
    List<LiveBroadcast> findAllById(Iterable<Long> ids);
}

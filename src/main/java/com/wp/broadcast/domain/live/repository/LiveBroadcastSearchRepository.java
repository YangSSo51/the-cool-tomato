package com.wp.broadcast.domain.live.repository;

import com.wp.broadcast.domain.live.entity.LiveBroadcastDocument;
import jakarta.transaction.Transactional;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface LiveBroadcastSearchRepository extends ElasticsearchRepository<LiveBroadcastDocument, Long> {
    public List<LiveBroadcastDocument> findByBroadcastTitle(String keyword);
}

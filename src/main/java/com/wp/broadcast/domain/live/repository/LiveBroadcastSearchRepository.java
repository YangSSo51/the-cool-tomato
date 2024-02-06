package com.wp.broadcast.domain.live.repository;

import com.wp.broadcast.domain.live.entity.LiveBroadcastDocument;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface LiveBroadcastSearchRepository extends ElasticsearchRepository<LiveBroadcastDocument, Long> {
    public List<LiveBroadcastDocument> findByBroadcastTitleContaining(String keyword, Pageable pageable);
}

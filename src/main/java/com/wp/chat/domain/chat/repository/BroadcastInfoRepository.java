package com.wp.chat.domain.chat.repository;

import com.wp.chat.domain.chat.entity.BroadcastInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BroadcastInfoRepository extends CrudRepository<BroadcastInfo, String> {
}

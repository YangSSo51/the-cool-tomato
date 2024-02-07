package com.wp.chat.domain.block.repository;

import com.wp.user.domain.block.entity.BlockHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlockHashRepository extends CrudRepository<BlockHash, Long> {
}

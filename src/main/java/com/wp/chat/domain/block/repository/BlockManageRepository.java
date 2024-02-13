package com.wp.chat.domain.block.repository;

import com.wp.chat.domain.block.entity.BlockManage;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlockManageRepository extends JpaRepository<BlockManage, Long> {
    @EntityGraph(attributePaths = {"blocked"})
    List<BlockManage> findAllBySellerId(Long sellerId);
    List<Long> findAllBlockedIdBySellerId(Long sellerId);

    void deleteByBlockedIdAndSellerId(Long blockedId, Long sellerId);
}

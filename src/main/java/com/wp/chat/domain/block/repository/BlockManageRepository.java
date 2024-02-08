package com.wp.chat.domain.block.repository;

import com.wp.chat.domain.block.entity.BlockManage;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlockManageRepository extends JpaRepository<BlockManage, Long> {
    List<BlockManage> findAllBySellerId(Long sellerId);
    @Query("SELECT e.blocked.id FROM BlockManage e WHERE e.seller.id = :sellerId")
    List<Long> findAllBlockedIdBySellerId(@Param("sellerId") Long sellerId);

    void deleteByBlockedIdAndSellerId(Long blockedId, Long sellerId);
}

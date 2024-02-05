package com.wp.user.domain.block.repository;

import com.wp.user.domain.block.entity.BlockManage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlockManageRepository extends JpaRepository<BlockManage, Long> {
    List<BlockManage> findAllBySellerId(Long sellerId);

    void deleteByBlockedIdAndSellerId(Long blockedId, Long sellerId);
}

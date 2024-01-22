package com.wp.user.domain.seller.repository;

import com.wp.user.domain.seller.entity.SellerInfo;
import com.wp.user.domain.user.entity.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SellerInfoRepository extends JpaRepository<SellerInfo, Long> {
    Optional<SellerInfo> findSellerInfoByUserId(Long userId);
    List<SellerInfo> findAllByApprovalStatus(boolean approvalStatus);
}

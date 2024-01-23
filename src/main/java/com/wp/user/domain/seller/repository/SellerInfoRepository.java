package com.wp.user.domain.seller.repository;

import com.wp.user.domain.seller.entity.SellerInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerInfoRepository extends JpaRepository<SellerInfo, Long> {
}

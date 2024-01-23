package com.wp.user.domain.seller.repository;

import com.wp.user.domain.seller.entity.SellerInfo;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SellerInfoRepository extends JpaRepository<SellerInfo, Long> {
    Optional<SellerInfo> findSellerInfoByUserId(Long sellerId);
    @EntityGraph(attributePaths = {"user"})
    List<SellerInfo> findAll();
    @EntityGraph(attributePaths = {"user"})
    Optional<SellerInfo> findById(Long id);
}

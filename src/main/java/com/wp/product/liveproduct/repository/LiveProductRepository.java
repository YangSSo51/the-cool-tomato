package com.wp.product.liveproduct.repository;

import com.wp.product.liveproduct.entity.LiveProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LiveProductRepository extends JpaRepository<LiveProduct,Long> {
}

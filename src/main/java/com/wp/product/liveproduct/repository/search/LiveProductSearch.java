package com.wp.product.liveproduct.repository.search;

import com.wp.product.liveproduct.dto.request.LiveProductSearchRequest;
import com.wp.product.liveproduct.entity.LiveProduct;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;

public interface LiveProductSearch {
    @Transactional
    Page<LiveProduct> search(LiveProductSearchRequest request);
}

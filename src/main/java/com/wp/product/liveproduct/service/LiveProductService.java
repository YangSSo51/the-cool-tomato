package com.wp.product.liveproduct.service;

import com.wp.product.liveproduct.dto.request.LiveProductCreateRequest;
import java.util.List;

public interface LiveProductService {
    void saveLiveProduct(List<LiveProductCreateRequest> liveProductRequestList);

    void deleteLiveProduct(Long liveId);
}

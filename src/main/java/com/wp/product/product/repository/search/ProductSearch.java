package com.wp.product.product.repository.search;

import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import org.springframework.data.domain.Page;
import java.util.List;

public interface ProductSearch {
    Page<ProductFindResponse> search(ProductSearchRequest request);
    Page<ProductFindResponse> searchRecentProducts(List<Long> idList);
}

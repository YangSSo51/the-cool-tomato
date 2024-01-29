package com.wp.product.productquestion.repository.search;

import com.wp.product.productquestion.dto.request.ProductQuestionSearchRequest;
import com.wp.product.productquestion.dto.response.ProductQuestionSearchResponse;
import org.springframework.data.domain.Page;

public interface ProductQuestionSearch {
    Page<ProductQuestionSearchResponse> search(ProductQuestionSearchRequest request);
}

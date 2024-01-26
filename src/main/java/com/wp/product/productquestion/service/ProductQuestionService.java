package com.wp.product.productquestion.service;

import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;

public interface ProductQuestionService {
    void saveProductQuestion(ProductQuestionCreateRequest productQuestionRequest);

    void updateProducQuestion(ProductQuestionUpdateRequest productQuestionRequest);

    void deleteProducQuestion(Long productQuestionId);
}

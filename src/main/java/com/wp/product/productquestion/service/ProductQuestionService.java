package com.wp.product.productquestion.service;

import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;

public interface ProductQuestionService {
    void saveProductQuestion(ProductQuestionCreateRequest productQuestionRequest);
}

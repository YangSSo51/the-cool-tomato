package com.wp.product.productquestion.service;

import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;
import com.wp.product.productquestion.dto.response.ProductQuestionResponse;

public interface ProductQuestionService {

    ProductQuestionResponse findProductQuestion(Long productQuestionId);
    void saveProductQuestion(ProductQuestionCreateRequest productQuestionRequest);

    void updateProducQuestion(ProductQuestionUpdateRequest productQuestionRequest);

    void deleteProducQuestion(Long productQuestionId);
}

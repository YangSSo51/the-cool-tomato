package com.wp.product.productquestion.service;

import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionSearchRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;
import com.wp.product.productquestion.dto.response.ProductQuestionResponse;
import java.util.Map;

public interface ProductQuestionService {

    Map<String, Object> getProductQuestionList(ProductQuestionSearchRequest productQuestionSearchRequest);

    Map<String, Object> getMyProductQuestionList(ProductQuestionSearchRequest productQuestionSearchRequest);

    Map<String, Object> getMyQuestionList(ProductQuestionSearchRequest productQuestionSearchRequest);

    ProductQuestionResponse findProductQuestion(Long productQuestionId);

    void saveProductQuestion(ProductQuestionCreateRequest productQuestionRequest);

    void updateProducQuestion(ProductQuestionUpdateRequest productQuestionRequest);

    void deleteProducQuestion(Long productQuestionId);
}

package com.wp.product.productquestion.service;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.product.entity.Product;
import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.entity.ProductQuestion;
import com.wp.product.productquestion.repository.ProductQuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductQuestionServiceImpl implements ProductQuestionService{

    private final ProductQuestionRepository productQuestionRepository;

    @Override
    public void saveProductQuestion(ProductQuestionCreateRequest productQuestionRequest) {
        //상품 문의 객체 생성
        ProductQuestion productQuestion = ProductQuestion.builder()
                .writerId(1L)
                .questionContent(productQuestionRequest.getQuestionContent())
                .product(Product.builder().productId(productQuestionRequest.getProductId()).build())
                .build();

        try {
            productQuestionRepository.save(productQuestion);
        } catch (Exception e) {
            throw new BusinessExceptionHandler("상품 문의 등록에 실패했습니다.", ErrorCode.INSERT_ERROR);
        }
    }
}

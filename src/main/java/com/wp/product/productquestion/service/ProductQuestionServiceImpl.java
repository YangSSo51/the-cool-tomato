package com.wp.product.productquestion.service;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.product.entity.Product;
import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;
import com.wp.product.productquestion.entity.ProductQuestion;
import com.wp.product.productquestion.repository.ProductQuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;
import java.util.Optional;

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

    @Override
    public void updateProducQuestion(ProductQuestionUpdateRequest productQuestionRequest) {
        //상품 문의 게시판 번호로 조회된 상품이 있는지 확인
        Long productQuestionId = productQuestionRequest.getProductQuestionBoardId();
        //TODO : 판매자의 수정요청인지 확인 필요
        Optional<ProductQuestion> result = productQuestionRepository.findById(productQuestionId);

        try {
            ProductQuestion productQuestion = result.orElseThrow();
            //상품 문의 등록
            productQuestion.change(productQuestionRequest);
            productQuestionRepository.save(productQuestion);
        }catch (NoSuchElementException e){
            throw new NoSuchElementException("상품 문의가 존재하지 않습니다");
        }catch(Exception e){
            throw new BusinessExceptionHandler("상품 문의 답변 등록에 실패했습니다",ErrorCode.UPDATE_ERROR);
        }
    }
}

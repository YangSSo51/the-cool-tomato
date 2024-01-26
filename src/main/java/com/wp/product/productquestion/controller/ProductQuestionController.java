package com.wp.product.productquestion.controller;

import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;
import com.wp.product.productquestion.service.ProductQuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/product-questions")
@Tag(name="상품 문의 API",description = "상품 문의 관리용 API")
public class ProductQuestionController {

    private final ProductQuestionService productQuestionService;

    @PostMapping
    @Operation(summary = "상품 문의 등록",description = "구매자가 상품 문의를 등록함")
    public ResponseEntity<?> saveProductQuestion(@RequestBody @Valid ProductQuestionCreateRequest productQuestionRequest){
        //TODO : 권한 확인 필요(로그인한 유저)

        //상품 문의를 등록함
        productQuestionService.saveProductQuestion(productQuestionRequest);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "상품 문의 답변 등록",description = "판매자가 상품 문의를 등록함")
    public ResponseEntity<?> updateProductQuestion(@RequestBody @Valid ProductQuestionUpdateRequest productQuestionRequest){
        //TODO : 권한 확인 필요(BUYER)

        //상품 문의 답변을 등록함
        productQuestionService.updateProducQuestion(productQuestionRequest);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.UPDATE_SUCCESS.getStatus())
                .message(SuccessCode.UPDATE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{productQuestionId}")
    @Operation(summary = "상품 문의 삭제",description = "등록자가 상품 문의를 삭제함")
    public ResponseEntity<?> deleteProductQuestion(@PathVariable Long productQuestionId){
        //TODO : 권한 확인 필요(로그인한 유저)

        //상품 문의 답변을 삭제함
        productQuestionService.deleteProducQuestion(productQuestionId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

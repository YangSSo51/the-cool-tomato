package com.wp.product.productquestion.controller;

import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.productquestion.dto.request.ProductQuestionCreateRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionSearchRequest;
import com.wp.product.productquestion.dto.request.ProductQuestionUpdateRequest;
import com.wp.product.productquestion.dto.response.ProductQuestionResponse;
import com.wp.product.productquestion.service.ProductQuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/product-questions")
@Tag(name="상품 문의 API",description = "상품 문의 관리용 API")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductQuestionController {

    private final ProductQuestionService productQuestionService;

    @GetMapping("/list")
    @Operation(summary = "상품 문의 목록 조회",description = "상품 번호로 상품 문의 리스트를 조회함")
    public ResponseEntity<?> getProductQuestionList(@RequestParam int page,
                                                    @RequestParam int size,
                                                    @RequestParam("product-id") Long productId){
        //TODO : 로그인 아이디
        ProductQuestionSearchRequest productQuestionSearchRequest = ProductQuestionSearchRequest.builder()
                .page(page)
                .size(size)
                .productId(productId)
                .loginId(2L).build();

        //상품 문의 리스트 조회
        Map<String, Object> productQuestionList = productQuestionService.getProductQuestionList(productQuestionSearchRequest);

        SuccessResponse response = SuccessResponse.builder()
                .data(productQuestionList)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/seller/my/list")
    @Operation(summary = "판매자가 상품 문의 목록 조회",description = "판매자의 상품 문의 리스트를 조회함")
    public ResponseEntity<?> getMyProductQuestionList(@RequestParam int page,
                                                    @RequestParam int size){
        //TODO : 로그인한 판매자 아이디 가져오기

        ProductQuestionSearchRequest productQuestionSearchRequest = ProductQuestionSearchRequest.builder()
                .page(page)
                .size(size)
                .sellerId(2L).build();

        //판매자 상품 문의 리스트 조회
        Map<String, Object> productQuestionList = productQuestionService.getMyProductQuestionList(productQuestionSearchRequest);

        SuccessResponse response = SuccessResponse.builder()
                .data(productQuestionList)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/buyer/my/list")
    @Operation(summary = "구매자가 자신의 상품 문의 목록 조회",description = "구매자가 자신의 상품 문의 리스트를 조회함")
    public ResponseEntity<?> getMyQuestionList(@RequestParam int page,
                                               @RequestParam int size){
        //TODO : 로그인한 구매자 아이디 가져오기

        ProductQuestionSearchRequest productQuestionSearchRequest = ProductQuestionSearchRequest.builder()
                .page(page)
                .size(size)
                .buyerId(1L).build();

        //판매자 상품 문의 리스트 조회
        Map<String, Object> productQuestionList = productQuestionService.getMyQuestionList(productQuestionSearchRequest);

        SuccessResponse response = SuccessResponse.builder()
                .data(productQuestionList)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{productQuestionId}")
    @Operation(summary = "상품 문의 조회",description = "판매자가 상품 문의 아이디로 상품 문의를 조회함")
    public ResponseEntity<?> findProductQuestion(@PathVariable Long productQuestionId){
        //TODO : 권한 확인 필요(SELLER), 상품 등록자인지

        //상품 문의 id로 상품 문의 단 건 조회
        ProductQuestionResponse productQuestion = productQuestionService.findProductQuestion(productQuestionId);

        SuccessResponse response = SuccessResponse.builder()
                .data(productQuestion)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

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

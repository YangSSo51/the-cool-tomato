package com.wp.product.product.controller;

import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import com.wp.product.product.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/products")
@Tag(name="상품 API",description = "상품 관리용 API")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/list")
    @Operation(summary = "상품 목록 조회",description = "카테고리 ID로 상품 목록 조회 ")
    public ResponseEntity<?> searchProduct(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "10") int size,
                                           @RequestParam(required = false,name = "category-id") Long categoryId){

        //상품 목록 조회 request 만듦
        ProductSearchRequest productSearchRequest = ProductSearchRequest.builder()
                                                                        .page(page)
                                                                        .size(size)
                                                                        .categoryId(categoryId).build();

        //카테고리 ID로 상품 목록 조회
        Map<String, Object> productFindResponses = productService.searchProduct(productSearchRequest);

        SuccessResponse response = SuccessResponse.builder()
                .data(productFindResponses)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/my/list")
    @Operation(summary = "판매자 상품 목록 조회",description = "판매자 자신이 등록한 상품 목록 조회 ")
    public ResponseEntity<?> searchMyProducts(@RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "10") int size){
        
        //TODO : 판매자 권한이 있고 판매자 ID로 목록 조회
        //판매자 상품 목록 조회 request 만듦
        ProductSearchRequest productSearchRequest = ProductSearchRequest.builder()
                .page(page)
                .size(size)
                .sellerId(1L).build();

        //판매자 ID로 상품 목록 조회
        Map<String, Object> productFindResponses = productService.searchMyProducts(productSearchRequest);

        SuccessResponse response = SuccessResponse.builder()
                .data(productFindResponses)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/recent/list")
    @Operation(summary = "마이페이지 최근 상품 목록 조회",description = "마이페이지에서 상품 id로 최근 본 상품 목록 조회")
    public ResponseEntity<?> searchRecentProducts(@RequestParam(required = true, name = "idList") List<Long> idList){
        //마이페이지에서 상품 id로 상품 목록 조회
        Map<String, Object> productFindResponses = productService.searchRecentProducts(idList);

        SuccessResponse response = SuccessResponse.builder()
                .data(productFindResponses)
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    @Operation(summary = "상품 조회",description = "판매자가 상품번호로 단일 상품을 조회함")
    public ResponseEntity<?> findProduct(@PathVariable Long productId){
        //상품 번호로 단일 상품을 조회함
        ProductFindResponse productById = productService.findProductById(productId);

        SuccessResponse response = SuccessResponse.builder()
                                    .data(productById)
                                    .status(SuccessCode.SELECT_SUCCESS.getStatus())
                                    .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "상품 등록",description = "판매자가 상품을 등록함")
    public ResponseEntity<?> saveProduct(@RequestBody @Valid ProductCreateRequest productRequest){
        //TODO : 권한 확인 필요(BUYER)

        //상품을 등록함
        productService.saveProduct(productRequest);

        SuccessResponse response = SuccessResponse.builder()
                                    .status(SuccessCode.INSERT_SUCCESS.getStatus())
                                    .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "상품 수정",description = "판매자가 상품 정보를 수정함")
    public ResponseEntity<?> updateProduct(@RequestBody @Valid ProductUpdateRequest productRequest){
        //TODO : 권한 확인 필요(BUYER)

        //상품 정보를 수정함
        productService.updateProduct(productRequest);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.UPDATE_SUCCESS.getStatus())
                .message(SuccessCode.UPDATE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{productId}")
    @Operation(summary = "상품 삭제",description = "판매자가 상품번호로 상품을 삭제함")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId){
        //TODO : 권한 확인 필요(BUYER)

        //상품 번호로 상품을 삭제함
        productService.deleteProduct(productId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}

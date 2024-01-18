package com.wp.product.product.controller;

import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.response.ErrorResponse;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import com.wp.product.product.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
@RequestMapping("/v1/products")
@Tag(name="상품 API",description = "상품 관리용 API")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<?> findProduct(@PathVariable Long productId){
        ProductFindResponse productById = productService.findProductById(productId);

        SuccessResponse response = SuccessResponse.builder()
                                    .data(productById)
                                    .status(SuccessCode.SELECT_SUCCESS.getStatus())
                                    .message(SuccessCode.SELECT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "상품 등록",description = "판매자가 상품을 등록함", responses ={
            @ApiResponse(responseCode = "200", description = "상품 등록 성공" ),
            @ApiResponse(responseCode = "400", description = "상품 등록 실패")})
    public ResponseEntity<?> saveProduct(@RequestBody @Valid ProductCreateRequest productRequest){
        productService.saveProduct(productRequest);
        SuccessResponse response = SuccessResponse.builder()
                                    .status(SuccessCode.INSERT_SUCCESS.getStatus())
                                    .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "상품 수정",description = "판매자가 상품을 수정함", responses ={
            @ApiResponse(responseCode = "200", description = "상품 수정 성공" ),
            @ApiResponse(responseCode = "400", description = "상품 수정 실패",content =
                    { @Content(mediaType = "application/json", schema =
                    @Schema(implementation = ErrorResponse.class))})})
    public ResponseEntity<?> updateProduct(@RequestBody @Valid ProductUpdateRequest productRequest){
        productService.updateProduct(productRequest);
        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.UPDATE_SUCCESS.getStatus())
                .message(SuccessCode.UPDATE_SUCCESS.getMessage()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{productId}")
    @Operation(summary = "상품 삭제",description = "판매자가 상품을 삭제함", responses ={
            @ApiResponse(responseCode = "200", description = "상품 삭제 성공" ),
            @ApiResponse(responseCode = "400", description = "상품 삭제 실패",content =
                    { @Content(mediaType = "application/json", schema =
                    @Schema(implementation = ErrorResponse.class))})})
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId){
        productService.deleteProduct(productId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage()).build();
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}

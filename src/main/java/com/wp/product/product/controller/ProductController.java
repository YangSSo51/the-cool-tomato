package com.wp.product.product.controller;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.request.AccessTokenRequest;
import com.wp.product.global.common.request.ExtractionRequest;
import com.wp.product.global.common.response.ErrorResponse;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.global.common.service.AuthClient;
import com.wp.product.global.common.service.JwtService;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import com.wp.product.product.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
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
    private final JwtService jwtService;
    private final AuthClient authClient;

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
    public ResponseEntity<?> searchMyProducts(HttpServletRequest httpServletRequest,
                                              @RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "10") int size){
        //판매자 권한이 있고 판매자 ID로 목록 조회
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 헤더 Access Token 추출
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        // 권한이 구매자일 경우만 저장
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();

        if(!infos.get("auth").equals("SELLER")) {
            ErrorResponse response = ErrorResponse.of(ErrorCode.FORBIDDEN_ERROR, ErrorCode.FORBIDDEN_ERROR.getMessage());
            return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
        }

        //판매자 상품 목록 조회 request 만듦
        ProductSearchRequest productSearchRequest = ProductSearchRequest.builder()
                .page(page)
                .size(size)
                .sellerId(Long.valueOf(infos.get("userId"))).build();

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
    public ResponseEntity<?> saveProduct(HttpServletRequest httpServletRequest,
                                         @RequestBody @Valid ProductCreateRequest productRequest){
        //판매자 권한이 있는지 확인
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 헤더 Access Token 추출
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        // 권한이 구매자일 경우만 저장
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();

        if(!infos.get("auth").equals("SELLER")) {
            ErrorResponse response = ErrorResponse.of(ErrorCode.FORBIDDEN_ERROR, ErrorCode.FORBIDDEN_ERROR.getMessage());
            return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
        }

        Long userId = Long.valueOf(infos.get("userId"));
        //상품을 등록함
        productService.saveProduct(productRequest,userId);

        SuccessResponse response = SuccessResponse.builder()
                                    .status(SuccessCode.INSERT_SUCCESS.getStatus())
                                    .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "상품 수정",description = "판매자가 상품 정보를 수정함")
    public ResponseEntity<?> updateProduct(HttpServletRequest httpServletRequest,
                                           @RequestBody @Valid ProductUpdateRequest productRequest){
        //판매자 권한이 있는지 확인
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 헤더 Access Token 추출
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        // 권한이 구매자일 경우만 저장
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();

        if(!infos.get("auth").equals("SELLER")) {
            ErrorResponse response = ErrorResponse.of(ErrorCode.FORBIDDEN_ERROR, ErrorCode.FORBIDDEN_ERROR.getMessage());
            return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
        }

        Long userId = Long.valueOf(infos.get("userId"));

        //상품 정보를 수정함
        productService.updateProduct(productRequest,userId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.UPDATE_SUCCESS.getStatus())
                .message(SuccessCode.UPDATE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{productId}")
    @Operation(summary = "상품 삭제",description = "판매자가 상품번호로 상품을 삭제함")
    public ResponseEntity<?> deleteProduct(HttpServletRequest httpServletRequest,
                                           @PathVariable Long productId){
        //판매자 권한이 있는지 확인
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 헤더 Access Token 추출
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        // 권한이 구매자일 경우만 저장
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();

        if(!infos.get("auth").equals("SELLER")) {
            ErrorResponse response = ErrorResponse.of(ErrorCode.FORBIDDEN_ERROR, ErrorCode.FORBIDDEN_ERROR.getMessage());
            return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
        }

        Long userId = Long.valueOf(infos.get("userId"));

        //상품 번호로 상품을 삭제함
        productService.deleteProduct(productId,userId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}

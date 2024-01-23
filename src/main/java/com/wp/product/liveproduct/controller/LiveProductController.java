package com.wp.product.liveproduct.controller;

import com.wp.product.global.common.code.SuccessCode;
import com.wp.product.global.common.response.SuccessResponse;
import com.wp.product.liveproduct.dto.request.LiveProductCreateRequest;
import com.wp.product.liveproduct.service.LiveProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/live-products")
@Tag(name="라이브 상품 API",description = "라이브 상품 관리용 API")
public class LiveProductController {

    private final LiveProductService liveProductService;

    @PostMapping
    @Operation(summary = "방송 상품 등록",description = "판매자가 방송 상품 리스트로 등록함")
    public ResponseEntity<?> saveLiveProduct(@RequestBody List<LiveProductCreateRequest> liveProductRequestList){

        liveProductService.saveLiveProduct(liveProductRequestList);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{liveId}")
    @Operation(summary = "방송 상품 삭제",description = "판매자가 방송 아이디로 삭제함")
    public ResponseEntity<?> deleteLiveProduct(@PathVariable Long liveId){

        liveProductService.deleteLiveProduct(liveId);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

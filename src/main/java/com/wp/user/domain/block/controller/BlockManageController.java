package com.wp.user.domain.block.controller;

import com.wp.user.domain.block.dto.request.BlockedIdListRequest;
import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import com.wp.user.domain.block.service.BlockManageService;
import com.wp.user.global.common.code.SuccessCode;
import com.wp.user.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("v1/users/block")
@Tag(name = "차단 API", description = "차단 관리 용 API")
public class BlockManageController {
    private final BlockManageService blockManageService;
    private final static String BLOCKED_LIST = "blocked_list";

    @GetMapping("/{seller-id}")
    @Cacheable(key = "#sellerId", cacheNames = BLOCKED_LIST)
    @Operation(summary = "방송 시작 후 차단 목록 캐싱", description = "판매자의 차단 목록을 방송 시작 시 캐싱합니다.")
    public ResponseEntity<SuccessResponse<?>> getBlockManagesCache(@NotNull(message = "판매자 회원 ID를 입력해 주세요.") @PathVariable(value = "seller-id") Long sellerId) {
        GetBlockManageListResponse getBlockManageListResponse = blockManageService.getBlockManagesBySellerId(sellerId);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage())
                .data(getBlockManageListResponse)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    @Operation(summary = "차단 목록 조회", description = "판매자의 차단 목록을 조회합니다.")
    public ResponseEntity<SuccessResponse<?>> getBlockManages(HttpServletRequest httpServletRequest) {
        GetBlockManageListResponse getBlockManageListResponse = blockManageService.getBlockManages(httpServletRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage())
                .data(getBlockManageListResponse)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/add")
    @CacheEvict(cacheNames = BLOCKED_LIST, key = "#blockListRequest.sellerId")
    @Operation(summary = "차단 일괄 등록", description = "판매자는 구매자 ID로 구매자를 차단 합니다.")
    public ResponseEntity<SuccessResponse<?>> addBlocked(@Valid @RequestBody BlockedIdListRequest blockListRequest) {
        blockManageService.addBlocked(blockListRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/remove")
    @CacheEvict(cacheNames = BLOCKED_LIST, key = "#blockListRequest.sellerId")
    @Operation(summary = "차단 일괄 삭제", description = "판매자는 구매자 ID로 구매자를 차단을 취소 합니다.")
    public ResponseEntity<SuccessResponse<?>> removeBlocked(@Valid @RequestBody BlockedIdListRequest blockListRequest) {
        blockManageService.removeBlocked(blockListRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

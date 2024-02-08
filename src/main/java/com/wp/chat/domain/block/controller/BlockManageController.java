package com.wp.chat.domain.block.controller;

import com.wp.chat.domain.block.dto.request.BlockedIdRequest;
import com.wp.chat.domain.block.dto.response.GetBlockManageListResponse;
import com.wp.chat.domain.block.service.BlockManageService;
import com.wp.chat.global.common.code.SuccessCode;
import com.wp.chat.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RequiredArgsConstructor
@RestController
@RequestMapping("v1/chat/block")
@Tag(name = "차단 API", description = "차단 관리 용 API")
public class BlockManageController {
    private final BlockManageService blockManageService;

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
    public ResponseEntity<SuccessResponse<?>> addBlocked(@Valid @RequestBody BlockedIdRequest blockedIdRequest) {
        blockManageService.addBlocked(blockedIdRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<SuccessResponse<?>> removeBlocked(@Valid @RequestBody BlockedIdRequest blockedIdRequest) {
        blockManageService.removeBlocked(blockedIdRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

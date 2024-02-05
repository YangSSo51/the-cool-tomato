package com.wp.broadcast.domain.live.controller;

import com.wp.broadcast.domain.live.dto.controller.request.StopRequestDto;
import com.wp.broadcast.domain.live.service.BroadcastInfosService;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.common.response.SuccessResponse;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/live/infos")
@Tag(name = "info", description = "라이브 API Doc")
public class InfosController {

    private final BroadcastInfosService broadcastInfosService;

    @GetMapping("/carousel")
    @Operation(summary = "라이브 종료", description = "라이브를 종료합니다.")
    public void getCarousel(){
        broadcastInfosService.getCarousel();
    }
}

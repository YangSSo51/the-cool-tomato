package com.wp.broadcast.domain.live.controller;

import com.wp.broadcast.domain.live.dto.controller.request.ParticipationRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.ReservationRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.StartRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.StopRequestDto;
import com.wp.broadcast.domain.live.dto.controller.response.ParticipationResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.ReservationResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.StartResponseDto;
import com.wp.broadcast.domain.live.service.AuthService;
import com.wp.broadcast.domain.live.service.BroadcastService;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.common.response.SuccessResponse;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/mediate/openvidu")
@Tag(name = "live", description = "라이브 API Doc")
public class LiveController {

    @Autowired
    AuthService authService;
    @Autowired
    BroadcastService broadcastService;

    @ResponseBody
    @PostMapping("/reservation")
    @Operation(summary = "라이브 예약", description = "라이브를 예약합니다.")
    public ResponseEntity<SuccessResponse<ReservationResponseDto>> reserveLive(@RequestBody @Validated ReservationRequestDto reservationRequestDto){
        String accessToken = reservationRequestDto.getAccessToken();
        if(authService.validateToken(accessToken)){
            if(authService.getAuth(accessToken).equals("seller")){
                Long userId = authService.getUserId(accessToken);
                Long broadcastId = broadcastService.reserveBroadcast(reservationRequestDto, userId);
                ReservationResponseDto result = ReservationResponseDto.builder().liveBroadcastId(broadcastId).build();
                return new ResponseEntity<>(SuccessResponse.<ReservationResponseDto>builder().data(result).status(201).message("방송 예약 성공").build(), HttpStatus.OK);
            }else{
                throw new BusinessExceptionHandler("판매자만 가능한 기능입니다.", ErrorCode.FORBIDDEN_ERROR);
            }
        }else{
            throw new BusinessExceptionHandler("만료된 토큰입니다.", ErrorCode.FORBIDDEN_ERROR);
        }
    }

    @ResponseBody
    @PostMapping("/start")
    @Operation(summary = "라이브 시작", description = "라이브를 시작합니다.")
    public ResponseEntity<SuccessResponse<StartResponseDto>> startLive(@RequestBody @Validated StartRequestDto startRequestDto){
        String accessToken = startRequestDto.getAccessToken();
        if(authService.validateToken(accessToken)){
            if(authService.getAuth(accessToken).equals("seller")){
                Long userId = authService.getUserId(accessToken);
                Map<String, String> tokenAndtopic = broadcastService.startBroadcast(startRequestDto, userId);
                StartResponseDto result = StartResponseDto.builder().token(tokenAndtopic.get("token")).topicId(tokenAndtopic.get("topicId")).build();
                return new ResponseEntity<>(SuccessResponse.<StartResponseDto>builder().data(result).status(201).message("방송 시작 성공").build(), HttpStatus.OK);
            }else{
                throw new BusinessExceptionHandler("판매자만 가능한 기능입니다.", ErrorCode.FORBIDDEN_ERROR);
            }
        }else{
            throw new BusinessExceptionHandler("만료된 토큰입니다.", ErrorCode.FORBIDDEN_ERROR);
        }
    }

    @ResponseBody
    @PostMapping("/participation")
    @Operation(summary = "라이브 참여", description = "라이브에 참여합니다.")
    public ResponseEntity<SuccessResponse<ParticipationResponseDto>> participateLive(@RequestBody @Validated ParticipationRequestDto participationRequestDto){
        String token = broadcastService.participateBroadcast(participationRequestDto);
        ParticipationResponseDto result = ParticipationResponseDto.builder().token(token).build();
        return new ResponseEntity<>(SuccessResponse.<ParticipationResponseDto>builder().data(result).status(201).message("방송 참여 성공").build(), HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/stop")
    @Operation(summary = "토큰 정보 추출", description = "라이브를 종료합니다.")
    public ResponseEntity<SuccessResponse<Boolean>> stopLive(@RequestBody @Validated StopRequestDto stopRequestDto){
        String accessToken = stopRequestDto.getAccessToken();
        if(authService.validateToken(accessToken)){
            if(authService.getAuth(accessToken).equals("seller")){
                Long userId = authService.getUserId(accessToken);
                broadcastService.stopBroadcast(stopRequestDto, userId);
                return new ResponseEntity<>(SuccessResponse.<Boolean>builder().data(true).status(200).message("방송 종료 성공").build(), HttpStatus.OK);
            }else{
                throw new BusinessExceptionHandler("판매자만 가능한 기능입니다.", ErrorCode.FORBIDDEN_ERROR);
            }
        }else{
            throw new BusinessExceptionHandler("만료된 토큰입니다.", ErrorCode.FORBIDDEN_ERROR);
        }
    }
}

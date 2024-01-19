package com.wp.domain.auth.controller;

import com.google.gson.JsonObject;
import com.wp.domain.auth.dto.request.AccessTokenRequestDto;
import com.wp.domain.auth.dto.request.UserRequestDto;
import com.wp.domain.auth.dto.response.TokenResponseDto;
import com.wp.domain.auth.service.JwtTokenProviderService;
import com.wp.global.common.response.SuccessResponse;
import io.swagger.v3.core.util.Json;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/auth")
@Tag(name = "Auth", description = "인증/인강  API Doc")
public class AuthController {

    @Autowired
    JwtTokenProviderService jwtTokenProviderService;

    @ResponseBody
    @PostMapping
    @Operation(summary = "토큰 발급", description = "토큰을 발급합니다.")
    public ResponseEntity<SuccessResponse<TokenResponseDto>> createToken(@RequestBody @Validated UserRequestDto user){
        TokenResponseDto tokenResponseDto = jwtTokenProviderService.createToken(user.getUserId(), user.getAuth());
        return new ResponseEntity<>(SuccessResponse.<TokenResponseDto>builder().data(tokenResponseDto).status(201).message("토큰 생성 성공").build(), HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping
    @Operation(summary = "토큰 삭제", description = "Refresh 토큰을 삭제합니다.")
    public ResponseEntity<SuccessResponse<Boolean>> deleteToken(@RequestBody @Validated AccessTokenRequestDto accessToken){
        jwtTokenProviderService.validateAccessToken(accessToken.getAccessToken());
        String userId = jwtTokenProviderService.getUserId(accessToken.getAccessToken());
        jwtTokenProviderService.deleteRefreshToken(userId);
        return new ResponseEntity<>(SuccessResponse.<Boolean>builder().data(true).status(200).message("토큰 삭제 성공").build(), HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/validationToken")
    @Operation(summary = "토큰 인증", description = "토큰을 인증합니다.")
    public ResponseEntity<SuccessResponse<Boolean>> validateToken(@RequestBody @Validated AccessTokenRequestDto accessToken){
        System.out.println(accessToken.getAccessToken());
        jwtTokenProviderService.validateAccessToken(accessToken.getAccessToken());
        return new ResponseEntity<>(SuccessResponse.<Boolean>builder().data(true).status(200).message("토큰 인증 완료").build(), HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("/reissue")
    @Operation(summary = "토큰 인증", description = "토큰을 인증합니다.")
    public ResponseEntity<SuccessResponse<Boolean>> reissueToken(@RequestBody @Validated AccessTokenRequestDto accessToken){
        jwtTokenProviderService.validateAccessToken(accessToken.getAccessToken());
        String userId = jwtTokenProviderService.getUserId(accessToken.getAccessToken());
        jwtTokenProviderService.deleteRefreshToken(userId);
        return new ResponseEntity<>(SuccessResponse.<Boolean>builder().data(true).status(200).message("토큰 삭제 성공").build(), HttpStatus.OK);
    }
}

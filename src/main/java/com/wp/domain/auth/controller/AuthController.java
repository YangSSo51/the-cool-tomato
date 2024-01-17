package com.wp.domain.auth.controller;

import com.wp.domain.auth.dto.request.UserRequestDto;
import com.wp.domain.auth.dto.response.TokenResponseDto;
import com.wp.domain.auth.service.JwtTokenProviderService;
import com.wp.global.common.response.SuccessResponse;
import io.jsonwebtoken.Claims;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/auth")
public class AuthController {

    @Autowired
    JwtTokenProviderService jwtTokenProviderService;

    @ResponseBody
    @PostMapping
    public ResponseEntity<SuccessResponse<TokenResponseDto>> createToken(@RequestBody @Validated UserRequestDto user){
        TokenResponseDto tokenResponseDto = jwtTokenProviderService.createToken(user.getUserId(), user.getPassword(), user.getAuth());
        return new ResponseEntity<>(SuccessResponse.<TokenResponseDto>builder().data(tokenResponseDto).status(200).message("토큰 생성 성공").build(), HttpStatus.OK);
    }

//    @ResponseBody
//    @DeleteMapping
//    public ResponseEntity<SuccessResponse<Boolean>> deleteToken(@RequestBody @NotBlank String accessToken){
//        Claims claims = jwtTokenProviderService.getClaims(accessToken);
//    }

    @ResponseBody
    @PostMapping("/vaildationToken")
    public ResponseEntity<SuccessResponse<Boolean>> validationToken(@RequestBody @NotBlank String accessToken){
        boolean result = jwtTokenProviderService.validateAccessTokenOnlyExpired(accessToken);
        return new ResponseEntity<>(SuccessResponse.<Boolean>builder().data(result).status(200).message("토큰 인증 성공").build());
    }

}

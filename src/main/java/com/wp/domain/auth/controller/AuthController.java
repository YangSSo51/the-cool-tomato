package com.wp.domain.auth.controller;

import com.wp.domain.auth.dto.request.UserRequestDto;
import com.wp.domain.auth.dto.response.AuthFailDto;
import com.wp.domain.auth.dto.response.AuthSuccessDto;
import com.wp.domain.auth.dto.response.ResponseDto;
import com.wp.domain.auth.service.JwtTokenProviderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/auth")
public class AuthController {

    @Autowired
    JwtTokenProviderService jwtTokenProviderService;

    @ResponseBody
    @PostMapping
    public ResponseEntity<ResponseDto> createToken(@RequestBody UserRequestDto user){
        ResponseDto response;
        if(user.getUserId() == null || user.getPassword() == null || user.getAuth() == null){
            response = AuthFailDto.builder().status(400).message("모든 파라미터가 입력되지 않았습니다.").build();
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        Map<String, String> tokens = jwtTokenProviderService.createToken(user.getUserId(), user.getPassword(), user.getAuth());
        response = AuthSuccessDto.builder().status(200).message("토큰 생성 성공").data(tokens).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping
    public ResponseEntity<ResponseDto> deleteToken(){
        ResponseDto response;
        return HttpStatus.OK;
    }

//    @ResponseBody
//    @PostMapping(/vaildationToken)
//    public ResponseEntity<ResponseDto> validationToken(){
//
//        return HttpStatus.OK;
//    }

}

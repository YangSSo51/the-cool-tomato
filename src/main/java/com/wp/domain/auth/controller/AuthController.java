package com.wp.domain.auth.controller;

import com.wp.domain.auth.dto.request.UserRequestDto;
import com.wp.domain.auth.service.JwtTokenProviderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Map<String, String>> createToken(@RequestBody UserRequestDto user){
        Map<String, String> tokens = jwtTokenProviderService.createToken(user.getUserId(), user.getPassword(), user.getAuth());

        return new ResponseEntity<>(tokens, HttpStatus.OK);
    }

    @ResponseBody
    @DeleteMapping
    public HttpStatus deleteToken(){

        return HttpStatus.OK;
    }

    @ResponseBody
    @DeleteMapping
    public HttpStatus validationToken(){

        return HttpStatus.OK;
    }

}

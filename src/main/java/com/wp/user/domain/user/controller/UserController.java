package com.wp.user.domain.user.controller;

import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.dto.response.DuplicateLoginIdResponse;
import com.wp.user.domain.user.service.UserService;
import com.wp.user.global.common.code.SuccessCode;
import com.wp.user.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("v1/users")
@Tag(name = "회원 API", description = "회원 관리 용 API")
public class UserController {

    private final UserService userService;
    @PostMapping("/join")
    @Operation(summary = "회원가입", description = "사용자는 회원 정보를 입력하여 회원가입을 합니다.")
    public ResponseEntity<SuccessResponse<?>> createUser(@Valid @RequestBody JoinRequest joinRequest) {
        userService.saveUser(joinRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/join/check-login-id/{login-id}")
    @Operation(summary = "아이디 중복 확인", description = "사용자는 회원가입 시 로그인 ID를 입력하여 중복 여부를 확인합니다.")
    public ResponseEntity<SuccessResponse<?>> isDuplicateLoginId(@NotBlank @PathVariable("login-id") String loginId) {
        DuplicateLoginIdResponse duplicateLoginIdResponse = DuplicateLoginIdResponse.builder().isDuplicate(userService.existUserByLoginId(loginId)).build();
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage())
                .data(duplicateLoginIdResponse)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}

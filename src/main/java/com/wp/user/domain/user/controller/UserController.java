package com.wp.user.domain.user.controller;

import com.wp.user.domain.user.dto.request.JoinRequest;
import com.wp.user.domain.user.dto.request.LoginRequest;
import com.wp.user.domain.user.dto.response.DuplicateLoginIdResponse;
import com.wp.user.domain.user.dto.response.LoginResponse;
import com.wp.user.domain.user.service.UserService;
import com.wp.user.global.common.code.SuccessCode;
import com.wp.user.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
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
    public ResponseEntity<SuccessResponse<?>> isDuplicateLoginId(@NotBlank(message = "로그인 ID를 입력해 주세요.") @PathVariable("login-id") String loginId) {
        DuplicateLoginIdResponse duplicateLoginIdResponse = userService.existUserByLoginId(loginId);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.SELECT_SUCCESS.getStatus())
                .message(SuccessCode.SELECT_SUCCESS.getMessage())
                .data(duplicateLoginIdResponse)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/v1/users/login")
    @Operation(summary = "로그인", description = "사용자는 로그인 ID와 PASSWORD를 입력하여 로그인합니다.")
    public ResponseEntity<SuccessResponse<?>> login(@Valid @RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = userService.login(loginRequest);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .data(loginResponse)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/v1/users/find-login-id/{email}")
    @Operation(summary = "아이디 찾기", description = "사용자는 email을 입력하여 로그인 ID를 찾습니다.")
    public ResponseEntity<SuccessResponse<?>> findLoginId(@NotBlank @Email @PathVariable String email) {
        userService.findLoginIdByEmail(email);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/v1/users/find-password/{login-id}/{email}")
    @Operation(summary = "비밀번호 찾기", description = "사용자는 로그인 ID와 email을 입력하여 password를 재설정합니다.")
    public ResponseEntity<SuccessResponse<?>> findPassword(@NotBlank(message = "이메일을 입력해주세요.") @PathVariable(name = "login-id") String loginId, @NotBlank(message = "이메일을 입력해주세요.") @Email @PathVariable String email) {
        userService.setTempPasswordByEmail(loginId, email);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/v1/users/logout")
    @Operation(summary = "로그아웃", description = "사용자는 로그아웃합니다.")
    public ResponseEntity<SuccessResponse<?>> logout(HttpServletRequest request) {
        userService.logout(request);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/v1/users")
    @Operation(summary = "회원탈퇴", description = "사용자는 회원탈퇴를 합니다.")
    public ResponseEntity<SuccessResponse<?>> deleteUser(HttpServletRequest request) {
        userService.removeUser(request);
        SuccessResponse<?> response = SuccessResponse.builder()
                .status(SuccessCode.DELETE_SUCCESS.getStatus())
                .message(SuccessCode.DELETE_SUCCESS.getMessage())
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}

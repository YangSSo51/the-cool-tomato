package com.wp.domain.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestDto {
    @NotBlank(message = "userId가 입력되지 않았습니다.")
    private String userId;
    @NotBlank(message = "password가 입력되지 않았습니다.")
    private String password;
    @NotBlank(message = "auth가 입력되지 않았습니다.")
    private String auth;
}

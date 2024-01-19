package com.wp.domain.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AccessTokenRequestDto {
    @NotBlank(message = "AccessToken을 입력해주세요.")
    private String accessToken;
}

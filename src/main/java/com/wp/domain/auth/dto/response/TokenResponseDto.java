package com.wp.domain.auth.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Schema(description = "토큰 DTO")
public class TokenResponseDto {
    @Schema(description = "Access Token")
    private String accessToken;
    @Schema(description = "Refresh Token")
    private String refreshToken;
}

package com.wp.user.domain.seller.dto.response;

import com.wp.user.domain.user.entity.Auth;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Schema(description = "판매자 상태 전환을 위한 응답 객체")
public class ModifySellerStatusResponse {
    String profileImg;
    Auth auth;
    String accessToken;
    String refreshToken;
}

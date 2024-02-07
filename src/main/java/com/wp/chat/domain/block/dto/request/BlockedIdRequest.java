package com.wp.chat.domain.block.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "차단 목록을 위한 요청 객체(userId)")
public class BlockedIdRequest {
    @NotNull(message = "판매자의 유저 ID를 입력해주세요.")
    @Schema(description = "유저 ID를 입력해주세요.", example = "1")
    Long sellerId;

    @NotNull(message = "차단할 구매자의 유저 ID를 입력해주세요.")
    @Schema(description = "유저 ID를 입력해주세요.", example = "1")
    Long blockedId;
}

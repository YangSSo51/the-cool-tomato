package com.wp.user.domain.block.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "차단 목록을 위한 요청 객체(userId)")
public class BlockedIdListRequest {
    Long sellerId;
    List<Long> blockedIds;
}

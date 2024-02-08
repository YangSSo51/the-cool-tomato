package com.wp.chat.domain.block.dto.response;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Schema(description = "차단 목록 조회(캐시)를 위한 응답 객체")
public class GetBlockIdsListResponse {
    List<Long> blockIds;
}

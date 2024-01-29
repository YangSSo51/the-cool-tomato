package com.wp.broadcast.domain.live.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StartRequestDto {
    private String accessToken;
    private Long liveBroadcastId;

}

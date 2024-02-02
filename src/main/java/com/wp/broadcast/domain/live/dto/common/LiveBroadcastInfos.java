package com.wp.broadcast.domain.live.dto.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LiveBroadcastInfos {
    private Long liveBroadcastId;
    private String broadcastTitle;
    private String nickName;
    private Long viewCount;
    private Long sellerId;
}

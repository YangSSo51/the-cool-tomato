package com.wp.broadcast.domain.live.dto.controller.response;

import com.wp.broadcast.domain.live.dto.common.LiveBroadcastInfos;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SearchByTitleResponseDto {
    List<LiveBroadcastInfos> liveBroadcastInfosList;
}

package com.wp.broadcast.domain.live.dto.utils.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetInfoRequestDto {
    private String accessToken;
    private List<String> infos;
}

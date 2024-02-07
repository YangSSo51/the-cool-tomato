package com.wp.live.domain.broadcast.service;

import com.wp.live.domain.broadcast.dto.controller.request.ReservationRequestDto;
import com.wp.live.domain.broadcast.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.live.domain.broadcast.dto.controller.request.ParticipationRequestDto;
import com.wp.live.domain.broadcast.dto.controller.request.StartRequestDto;
import com.wp.live.domain.broadcast.dto.controller.request.StopRequestDto;

import java.util.Map;

public interface BroadcastService {

    public Long reserveBroadcast(ReservationRequestDto reservation, Long sellerId);
    public Map<String, String> startBroadcast(StartRequestDto start, Long sellerId);
    public void stopBroadcast(StopRequestDto stop, Long sellerId);
    public String participateBroadcast(ParticipationRequestDto participation);
    public GetBroadcastListResponseDto getLivebBroadcastList(int page, int size);
}

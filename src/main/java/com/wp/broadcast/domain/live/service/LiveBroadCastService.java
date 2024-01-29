package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.request.ParticipateRequestDto;
import com.wp.broadcast.domain.live.dto.request.ReservationRequestDto;
import com.wp.broadcast.domain.live.dto.request.StartRequestDto;
import com.wp.broadcast.domain.live.dto.request.StopRequestDto;

public interface LiveBroadCastService {
    public Long reservationBroadcast(ReservationRequestDto reservation, Long sellerId);
    public String startBroadcast(StartRequestDto start);
    public void stopBroadcast(StopRequestDto stop);
    public String participateBroadcast(ParticipateRequestDto participate);
}

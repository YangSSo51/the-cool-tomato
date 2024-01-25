package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.request.ReservationRequestDto;
import com.wp.broadcast.domain.live.dto.request.StartRequestDto;

public interface LiveBroadCastService {
    public void reservationBroadcast(ReservationRequestDto reservationRequestDto, Long sellerId);
    public void startBroadcast(StartRequestDto startRequestDto);
    public void stopBroadcast();

}

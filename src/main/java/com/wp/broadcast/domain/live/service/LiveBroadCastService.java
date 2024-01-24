package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.request.ReservationBroadcastRequestDto;

public interface LiveBroadCastService {
    public void reservationBroadcast(ReservationBroadcastRequestDto reservationBroadcastRequestDto);
    public void startBroadcast();
    public void stopBroadcast();

}

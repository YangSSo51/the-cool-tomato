package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.request.ParticipateRequestDto;
import com.wp.broadcast.domain.live.dto.request.ReservationRequestDto;
import com.wp.broadcast.domain.live.dto.request.StartRequestDto;
import com.wp.broadcast.domain.live.dto.request.StopRequestDto;
import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import com.wp.broadcast.domain.live.repository.LiveBroadcastRepository;
import com.wp.broadcast.domain.live.utils.OpenviduProvider;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
import io.openvidu.java.client.OpenViduRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LiveBroadCastServiceImpl implements  LiveBroadCastService{

    @Autowired
    LiveBroadcastRepository liveBroadcastRepository;
    @Autowired
    OpenviduProvider openviduProvider;

    @Override
    public Long reservationBroadcast(ReservationRequestDto reservation, Long sellerId) {
        LiveBroadcast liveBroadcast = LiveBroadcast.builder().broadcastTitle(reservation.getBroadcastTitle())
                .sellerId(sellerId)
                .content(reservation.getContent())
                .script(reservation.getScript())
                .ttsSetting(reservation.getTtsSetting())
                .chatbotSetting(reservation.getChatbotSetting())
                .broadcastStartDate(reservation.getBroadcastStartDate())
                .broadcastStatus(false)
                .build();
        LiveBroadcast save = liveBroadcastRepository.save(liveBroadcast);
        return save.getId();
    }

    @Override
    public String startBroadcast(StartRequestDto start) {
        try {
            String sessionId = openviduProvider.createSession();
            Long liveBroadcastId = start.getLiveBroadcastId();
            LiveBroadcast liveBroadcast = liveBroadcastRepository.findById(liveBroadcastId).orElseThrow();
            liveBroadcast.setBroadcastStatus(true);
            liveBroadcast.setSessionId(sessionId);
            liveBroadcastRepository.save(liveBroadcast);
            return openviduProvider.getToken(sessionId, OpenViduRole.PUBLISHER);
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }

    @Override
    public void stopBroadcast(StopRequestDto stop) {
        try {
            Long liveBroadcastId = stop.getLiveBroadcastId();
            LiveBroadcast liveBroadcast = liveBroadcastRepository.findById(liveBroadcastId).orElseThrow();
            String sessionId = liveBroadcast.getSessionId();
            openviduProvider.removeSession(sessionId);
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }

    @Override
    public String participateBroadcast(ParticipateRequestDto participate) {
        try {
            Long liveBroadcastId = participate.getLiveBroadcastId();
            LiveBroadcast liveBroadcast = liveBroadcastRepository.findById(liveBroadcastId).orElseThrow();
            String sessionId = liveBroadcast.getSessionId();
            return openviduProvider.getToken(sessionId, OpenViduRole.SUBSCRIBER);
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }
}

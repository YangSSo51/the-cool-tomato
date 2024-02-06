package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.controller.request.ParticipationRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.ReservationRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.StartRequestDto;
import com.wp.broadcast.domain.live.dto.controller.request.StopRequestDto;
import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import com.wp.broadcast.domain.live.entity.User;
import com.wp.broadcast.domain.live.repository.LiveBroadcastRepository;
import com.wp.broadcast.domain.live.utils.MediateOpenviduConnection;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class BroadcastServiceImpl implements BroadcastService{

    private final MediateOpenviduConnection mediateOpenviduConnection;
    private final LiveBroadcastRepository liveBroadcastRepository;
    private final StringRedisTemplate redisTemplate;
    private final String RANK="ranking";
    private final String VIEW="view";

    @Override
    public Long reserveBroadcast(ReservationRequestDto reservation, Long sellerId) {
        User user = User.builder().id(sellerId).build();
        LiveBroadcast liveBroadcast = LiveBroadcast.builder()
                .user(user)
                .broadcastTitle(reservation.getBroadcastTitle())
                .content(reservation.getContent())
                .script(reservation.getScript())
                .ttsSetting(reservation.getTtsSetting())
                .chatbotSetting(reservation.getChatbotSetting())
                .broadcastStartDate(reservation.getBroadcastStartDate())
                .broadcastStatus(false)
                .viewCount(0L)
                .isDeleted(false)
                .build();
        LiveBroadcast save = liveBroadcastRepository.save(liveBroadcast);
        return save.getId();
    }

    @Override
    public Map<String, String> startBroadcast(StartRequestDto start, Long sellerId) {
        LiveBroadcast liveBroadcast;
        try {
            liveBroadcast = liveBroadcastRepository.findById(start.getLiveBroadcastId()).orElseThrow();
        }catch (NoSuchElementException e){
            throw new BusinessExceptionHandler("예약 내역이 없습니다.", ErrorCode.NOT_FOUND_ERROR);
        }

        if(!liveBroadcast.getUser().getId().equals(sellerId))throw new BusinessExceptionHandler("올바른 판매자가 아닙니다.", ErrorCode.FORBIDDEN_ERROR);

        try {
            String sessionId = mediateOpenviduConnection.getSessionId();
            String token = mediateOpenviduConnection.getToken(sessionId, "판매자");
            liveBroadcast.setBroadcastStatus(true);
            liveBroadcast.setSessionId(sessionId);
            liveBroadcast.setTopicId(sessionId);
            liveBroadcastRepository.save(liveBroadcast);
            redisTemplate.expire(RANK, 7, TimeUnit.DAYS);
            redisTemplate.opsForZSet().add(RANK, String.valueOf(start.getLiveBroadcastId()), 0);
            redisTemplate.opsForHash().put(VIEW, String.valueOf(start.getLiveBroadcastId()), "0");
            Map<String, String> result = new HashMap<>();
            result.put("topicId", sessionId);
            result.put("token", token);
            return result;
        } catch (Exception e){
            e.printStackTrace();
            throw new BusinessExceptionHandler("아이고 미안합니다. 김현종에게 문의해주세요~", ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public void stopBroadcast(StopRequestDto stop, Long sellerId) {
        LiveBroadcast liveBroadcast;
        try {
            liveBroadcast = liveBroadcastRepository.findById(stop.getLiveBroadcastId()).orElseThrow();
        }catch (NoSuchElementException e){
            throw new BusinessExceptionHandler("방송 내역이 없습니다.", ErrorCode.NOT_FOUND_ERROR);
        }

        if(!liveBroadcast.getUser().getId().equals(sellerId))throw new BusinessExceptionHandler("올바른 판매자가 아닙니다.", ErrorCode.FORBIDDEN_ERROR);

        try {
            mediateOpenviduConnection.deleteSession(liveBroadcast.getSessionId());
            liveBroadcast.setBroadcastStatus(false);
            liveBroadcastRepository.save(liveBroadcast);
            redisTemplate.opsForZSet().incrementScore(RANK, String.valueOf(stop.getLiveBroadcastId()), -1000000000);
            redisTemplate.opsForHash().delete(VIEW, Long.toString(stop.getLiveBroadcastId()));
        } catch (Exception e){
            throw new BusinessExceptionHandler("아이고 미안합니다. 김현종에게 문의해주세요~", ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public String participateBroadcast(ParticipationRequestDto participation) {
        try {
            LiveBroadcast liveBroadcast = liveBroadcastRepository.findById(participation.getLiveBroadcastId()).orElseThrow();
            redisTemplate.opsForZSet().incrementScore(RANK, String.valueOf(participation.getLiveBroadcastId()), 1);
            Long viewCount = Long.parseLong((String)redisTemplate.opsForHash().get(VIEW, String.valueOf(participation.getLiveBroadcastId()))) + 1;
            redisTemplate.opsForHash().put(VIEW, String.valueOf(participation.getLiveBroadcastId()), Long.toString(viewCount));
            return mediateOpenviduConnection.getToken(liveBroadcast.getSessionId(), "구매자");
        }catch (NoSuchElementException e) {
            throw new BusinessExceptionHandler("방송 내역이 없습니다.", ErrorCode.NOT_FOUND_ERROR);
        }catch (Exception e){
            throw new BusinessExceptionHandler("아이고 미안합니다. 김현종에게 문의해주세요~", ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }
}

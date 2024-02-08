package com.wp.chat.domain.chat.service;

import com.wp.chat.domain.chat.repository.BroadcastInfoRepository;
import com.wp.chat.global.common.code.ErrorCode;
import com.wp.chat.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatRoomServiceImpl implements ChatRoomService {
    private final BroadcastInfoRepository broadcastInfoRepository;
    @Override
    public Long getSellerId(String roomId) {
        // TODO : 판매자 ID를 방송 ID로 Redis에서 추출
        return broadcastInfoRepository.findById(roomId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID)).getSellerId();
    }
}

package com.wp.chat.global.common.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wp.chat.domain.block.service.BlockManageService;
import com.wp.chat.domain.chat.dto.request.ChatMessageRequest;
import com.wp.chat.domain.chat.service.ChatRoomService;
import com.wp.chat.global.common.code.ErrorCode;
import com.wp.chat.global.common.request.AccessTokenRequest;
import com.wp.chat.global.exception.BusinessExceptionHandler;
import com.wp.chat.global.exception.GlobalExceptionHandler;
import feign.FeignException;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static org.springframework.messaging.simp.stomp.DefaultStompSession.EMPTY_PAYLOAD;

@Order(Ordered.HIGHEST_PRECEDENCE + 99)
@RequiredArgsConstructor
@Component
public class FilterChannelInterceptor implements ChannelInterceptor {

    private final AuthClient authClient;
    private final BlockManageService blockManageService;
    private final ChatRoomService chatRoomService;

    @Override
    @SneakyThrows
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
        // 차단된 사용자는 메시지를 보낼 수 없음
        if (StompCommand.SEND.equals(headerAccessor.getCommand())) {
            String body = new String((byte[]) message.getPayload());
            ObjectMapper objectMapper = new ObjectMapper();
            ChatMessageRequest chatMessageRequest = objectMapper.readValue(body, ChatMessageRequest.class);
//            Long sellerId = chatRoomService.getSellerId(chatMessageRequest.getRoomId());
//            List<Long> blockIds = blockManageService.getBlockManagesBySellerId(sellerId);
//            if(blockIds.contains(chatMessageRequest.getSenderId())) {
//                throw new BusinessExceptionHandler(ErrorCode.BLOCKED_USER_ID);
//            }
        }
        // JWT 토큰 인증
        if (StompCommand.CONNECT.equals(headerAccessor.getCommand()) || StompCommand.SEND.equals(headerAccessor.getCommand())
                || StompCommand.SUBSCRIBE.equals(headerAccessor.getCommand())) {
            String accessToken = Objects.requireNonNull(headerAccessor.getNativeHeader("Authorization")).toString();
            if (StringUtils.hasText(accessToken) && accessToken.startsWith("[Bearer")) {
                accessToken = accessToken.substring(8, accessToken.length()-1);
            }
            authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        }
        return message;
    }
}

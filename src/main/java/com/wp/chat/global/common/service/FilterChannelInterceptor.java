package com.wp.chat.global.common.service;

import com.wp.chat.global.common.request.AccessTokenRequest;
import com.wp.chat.global.exception.BusinessExceptionHandler;
import com.wp.chat.global.exception.GlobalExceptionHandler;
import feign.FeignException;
import lombok.RequiredArgsConstructor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.Objects;

@Order(Ordered.HIGHEST_PRECEDENCE + 99)
@RequiredArgsConstructor
@Component
public class FilterChannelInterceptor implements ChannelInterceptor {

    private final AuthClient authClient;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
        if (StompCommand.CONNECT.equals(headerAccessor.getCommand()) || StompCommand.SEND.equals(headerAccessor.getCommand())
                || StompCommand.SUBSCRIBE.equals(headerAccessor.getCommand())) {
            String accessToken = Objects.requireNonNull(headerAccessor.getNativeHeader("Authorization")).toString();
            System.out.println(accessToken);
            if (StringUtils.hasText(accessToken) && accessToken.startsWith("[Bearer")) {
                accessToken = accessToken.substring(8, accessToken.length()-1);
            }
            // 토큰 인증
            authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
            return message;
        }
        return message;
    }
}

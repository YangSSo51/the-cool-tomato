package com.wp.chat.domain.chat.controller;

import com.wp.chat.domain.chat.dto.request.ChatMessageRequest;
import com.wp.chat.domain.chat.entity.ChatMessage;
import com.wp.chat.global.common.response.UserResponse;
import com.wp.chat.global.common.service.UserClient;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Controller
public class ChatMessageController {
    private final KafkaTemplate<String, ChatMessage> kafkaTemplate;
    private final UserClient userClient;
    private final NewTopic topic;

    @MessageMapping("/chat/message")
    @Transactional
    public void message(@Header("Authorization") String token, ChatMessageRequest chatMessageRequest) {
        // 회원 정보 추출
        UserResponse userResponse = userClient.getUser(token);
        ChatMessage chatMessage = ChatMessage.builder().roomId(chatMessageRequest.getRoomId()).sender(userResponse.getNickname()).message(chatMessageRequest.getMessage()).build();
        kafkaTemplate.send(topic.name(), chatMessage);
    }
}
package com.wp.chat.domain.chat.controller;

import com.wp.chat.domain.chat.dto.request.ChatMessageRequest;
import com.wp.chat.domain.chat.entity.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Controller
public class ChatMessageController {
    private final KafkaTemplate<String, ChatMessage> kafkaTemplate;
    private final NewTopic topic;

    @MessageMapping("/chat/message")
    @Transactional
    public void message(ChatMessageRequest chatMessageRequest) {
        ChatMessage chatMessage = ChatMessage.builder().roomId(chatMessageRequest.getRoomId()).senderId(chatMessageRequest.getSenderId()).senderNickname(chatMessageRequest.getSenderNickname()).message(chatMessageRequest.getMessage()).build();
        kafkaTemplate.send(topic.name(), chatMessage);
    }
}
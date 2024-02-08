package com.wp.chat.domain.chat.controller;

import com.wp.chat.domain.block.service.BlockManageService;
import com.wp.chat.domain.chat.dto.request.ChatMessageRequest;
import com.wp.chat.domain.chat.entity.ChatMessage;
import com.wp.chat.domain.chat.service.ChatMessageService;
import com.wp.chat.global.common.code.ErrorCode;
import com.wp.chat.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class ChatMessageController {

    private final ChatMessageService chatMessageService;

    @MessageMapping("/message")
    @Transactional
    public void message(ChatMessageRequest chatMessageRequest) {
        chatMessageService.sendMessage(chatMessageRequest);
    }
}
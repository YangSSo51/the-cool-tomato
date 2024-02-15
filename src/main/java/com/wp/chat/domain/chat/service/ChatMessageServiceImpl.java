package com.wp.chat.domain.chat.service;

import com.wp.chat.domain.block.service.BlockManageService;
import com.wp.chat.domain.chat.dto.request.ChatMessageRequest;
import com.wp.chat.domain.chat.entity.ChatMessage;
import com.wp.chat.global.common.code.ErrorCode;
import com.wp.chat.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatMessageServiceImpl implements ChatMessageService {

    private final KafkaTemplate<String, ChatMessage> kafkaTemplate;
    private final NewTopic topic;
    private final ChatRoomService chatRoomService;
    private final BlockManageService blockManageService;

    @Override
    public void sendMessage(ChatMessageRequest chatMessageRequest) {
        Long sellerId = chatRoomService.getSellerId(chatMessageRequest.getRoomId());
        List<Long> blockIds = blockManageService.getBlockManagesBySellerId(sellerId);
        if (blockIds.contains(chatMessageRequest.getSenderId())) {
            throw new BusinessExceptionHandler(ErrorCode.BLOCKED_USER_ID);
        }
        ChatMessage chatMessage = ChatMessage.builder().roomId(chatMessageRequest.getRoomId()).senderId(chatMessageRequest.getSenderId()).senderNickname(chatMessageRequest.getSenderNickname()).message(chatMessageRequest.getMessage()).build();
        kafkaTemplate.send(topic.name(), chatMessage);
    }
}

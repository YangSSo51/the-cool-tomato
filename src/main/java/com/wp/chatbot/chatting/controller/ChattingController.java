package com.wp.chatbot.chatting.controller;

import com.wp.chatbot.chatting.dto.MessageDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ChattingController {

    private final SimpMessagingTemplate template;
    private final SimpMessageSendingOperations sendingOperations;

    /**
     * 채팅 입장 시 입장 정보 전송
     * @param message
     */
    @MessageMapping(value = "/chat/enter")
    public void enter(MessageDto message){
        message.setMessage(message.getWriter() + "님이 채팅방에 참여하였습니다.");
        template.convertAndSend("/sub/chat/room/" + message.getRoomId(), message);
    }

    /**
     * 채팅 보내는 경로
     * @param message
     */
    @MessageMapping(value = "/chat/message")
    public void message(MessageDto message){
        //TODO : 질문에 대한 답변 찾아서 반환해줘야함
        MessageDto answer = MessageDto.builder().roomId(message.getRoomId()).message("답변이요").writer(1L).build();
        template.convertAndSend("/sub/chat/room/" + message.getRoomId(), message);
        template.convertAndSend("/sub/chat/room/" + message.getRoomId(), answer);
    }
}

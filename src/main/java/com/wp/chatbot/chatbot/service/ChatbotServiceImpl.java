package com.wp.chatbot.chatbot.service;

import com.wp.chatbot.chatbot.dto.request.ChatbotCreateRequest;
import com.wp.chatbot.chatbot.entity.Chatbot;
import com.wp.chatbot.chatbot.repository.ChatbotRepository;
import com.wp.chatbot.global.common.code.ErrorCode;
import com.wp.chatbot.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatbotServiceImpl implements ChatbotService{

    private final ChatbotRepository chatbotRepository;

    @Override
    public void save(ChatbotCreateRequest request) {
        Chatbot chatbot = Chatbot.builder()
                .roomId(request.getRoomId())
                .question(request.getQuestion())
                .answer(request.getAnswer()).build();
        try {
            chatbotRepository.save(chatbot);
        }catch (Exception e){
            throw new BusinessExceptionHandler("챗봇 등록 중에 에러가 발생했습니다.", ErrorCode.INSERT_ERROR);
        }
    }
}

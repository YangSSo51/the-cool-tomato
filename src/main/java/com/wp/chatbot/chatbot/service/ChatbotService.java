package com.wp.chatbot.chatbot.service;

import com.wp.chatbot.chatbot.dto.request.ChatbotCreateRequest;
import com.wp.chatbot.chatbot.dto.request.ChatbotUpdateRequest;

public interface ChatbotService {
    void save(ChatbotCreateRequest request);

    void update(ChatbotUpdateRequest request);

    void delete(Long chatbotId);
}

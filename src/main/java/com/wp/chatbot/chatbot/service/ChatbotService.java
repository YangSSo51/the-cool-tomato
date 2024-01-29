package com.wp.chatbot.chatbot.service;

import com.wp.chatbot.chatbot.dto.request.ChatbotCreateRequest;
import com.wp.chatbot.chatbot.dto.request.ChatbotSearchRequest;
import com.wp.chatbot.chatbot.dto.request.ChatbotUpdateRequest;
import java.util.Map;

public interface ChatbotService {
    Map<String, Object> search(ChatbotSearchRequest request);

    void save(ChatbotCreateRequest request);

    void update(ChatbotUpdateRequest request);

    void delete(Long chatbotId);
}

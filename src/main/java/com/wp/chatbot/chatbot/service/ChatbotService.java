package com.wp.chatbot.chatbot.service;

import com.wp.chatbot.chatbot.dto.request.ChatbotCreateRequest;

public interface ChatbotService {
    void save(ChatbotCreateRequest request);
}

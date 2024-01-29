package com.wp.chatbot.chatbot.repository.search;

import com.wp.chatbot.chatbot.dto.request.ChatbotSearchRequest;
import com.wp.chatbot.chatbot.dto.response.ChatbotResponse;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;

public interface ChatbotRepositorySearch {
    @Transactional
    Page<ChatbotResponse> search(ChatbotSearchRequest request);
}

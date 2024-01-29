package com.wp.chatbot.chatbot.repository;

import com.wp.chatbot.chatbot.entity.Chatbot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatbotRepository extends JpaRepository<Chatbot,Long> {
}

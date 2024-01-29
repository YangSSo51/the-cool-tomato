package com.wp.chatbot.chatbot.entity;

import com.wp.chatbot.chatbot.dto.request.ChatbotUpdateRequest;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Chatbot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatbotId;
    private Long roomId;
    private String question;
    private String answer;
    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime registerDate;

    public void change(ChatbotUpdateRequest request) {
        this.question = request.getQuestion();
        this.answer = request.getAnswer();
    }
}

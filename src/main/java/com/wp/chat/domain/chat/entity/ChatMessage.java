package com.wp.chat.domain.chat.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    private String roomId; // 방번호
    private String sender; // 메시지 보낸 사람
    private String message; // 메시지
}

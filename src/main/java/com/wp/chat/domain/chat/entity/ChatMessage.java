package com.wp.chat.domain.chat.entity;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage {
    private String roomId;
    private String sender;
    private String message;
}

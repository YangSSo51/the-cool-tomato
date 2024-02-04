package com.wp.chat.domain.chat.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessageRequest {
    @NotBlank(message = "채팅방 아이디를 입력해주세요.")
    private String roomId;
    private String message;
}

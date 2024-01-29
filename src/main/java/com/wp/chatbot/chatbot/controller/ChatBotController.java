package com.wp.chatbot.chatbot.controller;

import com.wp.chatbot.chatbot.dto.request.ChatbotCreateRequest;
import com.wp.chatbot.chatbot.dto.request.ChatbotUpdateRequest;
import com.wp.chatbot.chatbot.service.ChatbotService;
import com.wp.chatbot.global.common.code.SuccessCode;
import com.wp.chatbot.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/chatbots")
@Tag(name="챗봇 API",description = "챗봇 관리용 API")
public class ChatBotController {

    private final ChatbotService chatbotService;

    @PostMapping
    @Operation(summary = "챗봇 질의응답 등록",description = "판매자가 챗봇 질의응답을 등록함")
    public ResponseEntity<?> createChatbot(@RequestBody @Valid ChatbotCreateRequest request){
        //TODO : 판매자 권한 확인 필요

        chatbotService.save(request);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.INSERT_SUCCESS.getStatus())
                .message(SuccessCode.INSERT_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping
    @Operation(summary = "챗봇 질의응답 수정",description = "판매자가 챗봇 질의응답을 수정함")
    public ResponseEntity<?> updateChatbot(@RequestBody @Valid ChatbotUpdateRequest request){
        //TODO : 판매자 권한 확인 필요

        chatbotService.update(request);

        SuccessResponse response = SuccessResponse.builder()
                .status(SuccessCode.UPDATE_SUCCESS.getStatus())
                .message(SuccessCode.UPDATE_SUCCESS.getMessage()).build();

        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}

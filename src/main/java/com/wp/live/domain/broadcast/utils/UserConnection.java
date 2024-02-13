package com.wp.live.domain.broadcast.utils;

import com.wp.live.domain.broadcast.dto.utils.request.RegisterAlarmRequestDto;
import com.wp.live.domain.broadcast.dto.utils.request.ValidationRequestDto;
import com.wp.live.domain.broadcast.dto.utils.response.ResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class UserConnection {
    private WebClient webClient;
    private String url;
    public UserConnection(@Value("${user.url}")String url){
        this.webClient = WebClient.create(url + "/v1/users/alarms");
        this.url = url;
    }

    public void registerAlarm(Long sellerId, String topicId, String nickName){
        RegisterAlarmRequestDto request = RegisterAlarmRequestDto.builder().sellerId(sellerId).alarmUrl(topicId).content(nickName + "님 라이브 방송이 시작했습니다. 지금 바로 시청해보세요!").build();
        webClient.post()
                .uri("/validationToken")
                .body(Mono.just(request), RegisterAlarmRequestDto.class)
                .retrieve()
                .bodyToMono(ResponseDto.class)
                .block();
    }
}

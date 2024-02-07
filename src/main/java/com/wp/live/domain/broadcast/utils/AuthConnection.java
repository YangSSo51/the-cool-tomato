package com.wp.live.domain.broadcast.utils;

import com.wp.live.domain.broadcast.dto.utils.request.GetInfoRequestDto;
import com.wp.live.domain.broadcast.dto.utils.request.ValidationRequestDto;
import com.wp.live.domain.broadcast.dto.utils.response.ResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Component
public class AuthConnection {

    private WebClient webClient;
    private String url;
    public AuthConnection(@Value("${auth.url}")String url){
        this.webClient = WebClient.create(url + "/v1/auth");
        this.url = url;
    }

    public boolean validationToken(String token){
        ValidationRequestDto validationRequestDto = ValidationRequestDto.builder().accessToken(token).build();
        ResponseDto result = webClient.post()
                .uri("/validationToken")
                .body(Mono.just(validationRequestDto), ValidationRequestDto.class)
                .retrieve()
                .bodyToMono(ResponseDto.class)
                .block();
        return (boolean) result.getData();
    }

    public Map<String, Map<String, String>> getInfo(String token, List<String> infos){
        GetInfoRequestDto getInfoRequestDto = GetInfoRequestDto.builder().accessToken(token).infos(infos).build();
        ResponseDto result = webClient.post()
                .uri("/extraction")
                .body(Mono.just(getInfoRequestDto), GetInfoRequestDto.class)
                .retrieve()
                .bodyToMono(ResponseDto.class)
                .block();
        return (Map<String, Map<String, String>>) result.getData();
    }


}

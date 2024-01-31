package com.wp.broadcast.domain.live.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.openvidu.java.client.*;

import org.junit.jupiter.api.Test;
import org.springframework.web.reactive.function.client.WebClient;

import java.text.ParseException;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class OpenviduProviderTest {
    @Test
    public void openviduAPITest() throws ParseException, JsonProcessingException, OpenViduJavaClientException, OpenViduHttpException {
        WebClient webClient = WebClient.builder()
                .baseUrl("https://i10a501.p.ssafy.io") // 기본 URL 설정
                .defaultHeader("Authorization", "Basic T1BFTlZJRFVBUFA6c3NhZnk=") // 헤더 추가
                .build();

        String block = webClient.get()
                .uri("/openvidu/api/sessions/ses_GVfOYf9pmf")
                .retrieve()
                .bodyToMono(String.class)
                .block();

        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> map = mapper.readValue(block, Map.class);

        OpenVidu openVidu = new OpenVidu("http://i10a501.p.ssafy.io:5443/", "ssafy");
        SessionProperties build = SessionProperties.fromJson(map).build();
        Session session = openVidu.createSession(build);

        String serverData = "{\"serverData\": \"" + OpenViduRole.SUBSCRIBER + "\"}";
        ConnectionProperties connectionProperties = new ConnectionProperties.Builder().type(ConnectionType.WEBRTC).data(serverData).role(OpenViduRole.SUBSCRIBER).build();
        String token = session.createConnection(connectionProperties).getToken();
        System.out.println(token);
//        block.createConnection().getToken();


//        System.out.println("Response: " + response);
    }
}
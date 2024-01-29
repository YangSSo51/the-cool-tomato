package com.wp.broadcast.domain.live.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
import io.openvidu.java.client.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientException;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.text.ParseException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Slf4j
public class OpenviduProvider {

    private OpenVidu openVidu;
    private Map<String, Session> mapSessions = new ConcurrentHashMap<>();
    private Map<String, Map<String, OpenViduRole>> mapSessionNamesTokens = new ConcurrentHashMap<>();
    private String OPENVIDU_URL;
    private String SECRET;
    private WebClient webClient;
    private ObjectMapper mapper = new ObjectMapper();

    public OpenviduProvider(@Value("${openvidu.secret}") String secret, @Value("${openvidu.url}") String openviduUrl, @Value("${openvidu.http}") String openviduHTTPUrl, @Value("${openvidu.authorization}") String authorization) {
        this.SECRET = secret;
        this.OPENVIDU_URL = openviduUrl;
        this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
        this.webClient = WebClient.builder()
                .baseUrl(openviduHTTPUrl) // 기본 URL 설정
                .defaultHeader("Authorization", authorization) // 헤더 추가
                .build();
        this.mapper = new ObjectMapper();
    }

    public String createSession(){
        try {
            Session session = this.openVidu.createSession();

            return session.getSessionId();
        }catch (OpenViduJavaClientException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (OpenViduHttpException e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (Exception e){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }

    public String getToken(String sessionName, OpenViduRole openViduRole) {
        try{
            String sessionInfo = webClient.get()
                    .uri("/openvidu/api/sessions/" + sessionName)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
            Map<String, Object> map = mapper.readValue(sessionInfo, Map.class);
            Session session = openVidu.createSession(SessionProperties.fromJson(map).build());

            String serverData = "{\"serverData\": \"" + openViduRole + "\"}";
            ConnectionProperties connectionProperties = new ConnectionProperties.Builder().type(ConnectionType.WEBRTC).data(serverData).role(openViduRole).build();
            String token = session.createConnection(connectionProperties).getToken();
            return token;
        }catch (WebClientResponseException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (JsonProcessingException e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (OpenViduJavaClientException e3){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (OpenViduHttpException e4){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }catch (Exception e5){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }

    public void removeSession(String sessionName) {
        try{
            webClient.delete()
                    .uri("/openvidu/api/sessions/" + sessionName)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        }catch (WebClientResponseException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        } catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR);
        }
    }
}

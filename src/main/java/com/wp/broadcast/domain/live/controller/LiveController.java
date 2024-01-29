package com.wp.broadcast.domain.live.controller;

import com.wp.broadcast.domain.live.dto.response.ReservationResponseDto;
import com.wp.broadcast.domain.live.utils.OpenviduProvider;
import io.openvidu.java.client.OpenViduRole;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/live")
@Tag(name = "Live", description = "라이브 방송  API Doc")
public class LiveController {

    @Autowired
    OpenviduProvider openviduProvider;

    public ResponseEntity<ReservationResponseDto> reservationLive(){
        return null;
    }

    @GetMapping("/session")
    public ResponseEntity<String> startLive(){
        String session = openviduProvider.createSession();
        return new ResponseEntity<>(session, HttpStatus.OK);
    }

    public ResponseEntity<ReservationResponseDto> stopLive(){
        return null;
    }


    @GetMapping("/token/{sessionId}")
    public ResponseEntity<String> participateLive(@PathVariable String sessionId){
        String token = openviduProvider.getToken(sessionId, OpenViduRole.SUBSCRIBER);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

}

package com.wp.chat.global.common.service;

import com.wp.chat.global.common.response.UserResponse;
import com.wp.chat.global.config.FeignClientConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "user", url = "http://i10a501.p.ssafy.io:8084/v1/users", configuration = FeignClientConfig.class)
public interface UserClient {
    @GetMapping
    UserResponse getUser(@RequestHeader("Authorization") String token);
}

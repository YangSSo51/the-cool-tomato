package com.wp.chat.global.common.service;

import com.wp.chat.global.common.request.AccessTokenRequest;
import com.wp.chat.global.config.FeignClientConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "auth", url = "http://i10a501.p.ssafy.io:8080/v1/auth", configuration = FeignClientConfig.class)
public interface AuthClient {
    @PostMapping("/validationToken")
    String validateToken(@RequestBody AccessTokenRequest accessTokenRequest);
}

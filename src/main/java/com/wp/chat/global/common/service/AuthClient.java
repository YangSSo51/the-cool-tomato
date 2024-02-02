package com.wp.chat.global.common.service;

import com.wp.user.global.common.request.AccessTokenRequest;
import com.wp.user.global.common.request.ExtractionRequest;
import com.wp.user.global.common.request.IssueTokenRequest;
import com.wp.user.global.common.request.TokenRequest;
import com.wp.user.global.common.response.ExtractionResponse;
import com.wp.user.global.common.response.IssueTokenResponse;
import com.wp.user.global.config.FeignClientConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "auth", url = "http://3.39.6.29:8080/v1/auth", configuration = FeignClientConfig.class)
public interface AuthClient {
    @PostMapping
    IssueTokenResponse issueToken(@RequestBody IssueTokenRequest issueTokenRequest);
    @DeleteMapping
    String deleteToken(@RequestBody AccessTokenRequest accessTokenRequest);
    @PostMapping("/validationToken")
    String validateToken(@RequestBody AccessTokenRequest accessTokenRequest);
    @PostMapping("/reissue")
    IssueTokenResponse reissueToken(@RequestBody TokenRequest tokenRequest);
    @PostMapping("/extraction")
    ExtractionResponse extraction(@RequestBody ExtractionRequest extractionRequest);
}

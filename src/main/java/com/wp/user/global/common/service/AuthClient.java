package com.wp.user.global.common.service;

import com.wp.user.global.common.request.AccessTokenRequest;
import com.wp.user.global.common.request.IssueTokenRequest;
import com.wp.user.global.common.request.TokenRequest;
import com.wp.user.global.common.response.IssueTokenResponse;
import com.wp.user.global.common.response.SuccessResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "auth", url = "http://3.39.6.29:8080/v1/auth")
@Qualifier("auth")
public interface AuthClient {
    @PostMapping
    SuccessResponse<IssueTokenResponse> issueToken(@RequestBody IssueTokenRequest issueTokenRequest);
    @DeleteMapping
    SuccessResponse<?> deleteToken(@RequestBody AccessTokenRequest accessTokenRequest);
    @PostMapping("/validationToken")
    String validateToken(@RequestBody AccessTokenRequest accessTokenRequest);
    @PostMapping("/reissue")
    SuccessResponse<IssueTokenResponse> reissueToken(@RequestBody TokenRequest tokenRequest);
    @PostMapping("/extraction")
    SuccessResponse<?> extraction(@RequestBody TokenRequest tokenRequest);
}

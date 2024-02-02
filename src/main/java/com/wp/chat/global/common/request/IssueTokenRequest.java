package com.wp.chat.global.common.request;

import com.wp.chat.global.common.code.Auth;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IssueTokenRequest {
    Long userId;
    Auth auth;
}

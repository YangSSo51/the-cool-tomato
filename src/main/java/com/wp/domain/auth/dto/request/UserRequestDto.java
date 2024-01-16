package com.wp.domain.auth.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestDto {
    private String userId;
    private String password;
    private String auth;
}

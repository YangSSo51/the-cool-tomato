package com.wp.domain.auth.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestDto {
    String userId;
    String password;
    String auth;
}

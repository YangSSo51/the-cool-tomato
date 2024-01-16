package com.wp.domain.auth.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthFailDto implements ResponseDto{
    Integer status;
    String message;
}

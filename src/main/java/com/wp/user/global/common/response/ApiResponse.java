package com.wp.user.global.common.response;

import com.wp.user.global.common.code.ErrorCode;
import lombok.Builder;
import lombok.Getter;
import org.springframework.validation.BindingResult;

/**
 * [공통] API Response 결과의 반환 값을 관리
 */
@Getter
public class ApiResponse<T> {

    // API 응답 결과 Response
    private T result;

    // API 응답 코드 Response
    private int resultCode;

    // API 응답 코드 Message
    private String resultMsg;

    /**
     * ApiResponse 생성자
     *
     * @param result Response Object
     * @param resultCode SuccessCode
     * @param resultMsg SuccessMessage
     */
    @Builder
    public ApiResponse(final T result, final int resultCode, final String resultMsg) {
        this.result = result;
        this.resultCode = resultCode;
        this.resultMsg = resultMsg;
    }

}

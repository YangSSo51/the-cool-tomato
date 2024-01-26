package com.wp.product.productquestion.dto.response;

import com.wp.product.product.entity.Product;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@Schema(description = "상품 문의 조회을 위한 응답 객체")
public class ProductQuestionResponse {
    private Long productQuestionBoardId;
    private Long writerId;
//    private Product product;
    private Long productId;
    private String productName;
    private String productContent;
    private String questionContent;
    private String answerContent;
    private LocalDateTime questionRegisterDate;
    private LocalDateTime answerRegisterDate;
}

package com.wp.user.domain.seller.dto.response;

import com.wp.user.domain.seller.entity.SellerInfo;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Schema(description = "판매자 정보 목록 조회를 위한 응답 객체")
public class GetSellerInfoListResponse {
    List<GetSellerInfo> sellerInfos;
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class GetSellerInfo {
        private Long id;
        private String loginId;
        private String nickname;
        private String profileImg;
        private Long sellerInfoId;
    }

    public static GetSellerInfoListResponse from(List<SellerInfo> sellerInfoList) {
        List<GetSellerInfo> sellerInfos = new ArrayList<>();
        for (SellerInfo sellerInfo : sellerInfoList) {
            GetSellerInfo getSellerInfo = GetSellerInfo.builder()
                    .id(sellerInfo.getUser().getId())
                    .loginId(sellerInfo.getUser().getLoginId())
                    .nickname(sellerInfo.getUser().getNickname())
                    .profileImg(sellerInfo.getUser().getProfileImg())
                    .sellerInfoId(sellerInfo.getId()).build();
            sellerInfos.add(getSellerInfo);
        }
        return GetSellerInfoListResponse.builder().sellerInfos(sellerInfos).build();
    }
}

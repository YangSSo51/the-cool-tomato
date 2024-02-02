package com.wp.user.domain.seller.service;

import com.wp.user.domain.seller.dto.request.AddSellerInfoRequest;
import com.wp.user.domain.seller.dto.response.GetSellerInfoListResponse;
import com.wp.user.domain.seller.dto.response.GetSellerInfoResponse;
import com.wp.user.domain.seller.dto.response.GetSellerResponse;
import com.wp.user.domain.seller.dto.response.ModifySellerStatusResponse;
import jakarta.servlet.http.HttpServletRequest;

public interface SellerInfoService {
    GetSellerResponse getSeller(Long sellerId);
    GetSellerInfoListResponse getSellerInfos(HttpServletRequest httpServletRequest, int page, int size);
    GetSellerInfoResponse getSellerInfo(HttpServletRequest httpServletRequest, Long sellerInfoId);
    void addSellerInfo(HttpServletRequest httpServletRequest, AddSellerInfoRequest addSellerInfoRequest);
    ModifySellerStatusResponse modifySellerStatusTrue(HttpServletRequest httpServletRequest, Long sellerInfoId);
    ModifySellerStatusResponse modifySellerStatusFalse(HttpServletRequest httpServletRequest, Long sellerInfoId);
}

package com.wp.user.domain.block.service;


import com.wp.user.domain.block.dto.request.BlockedIdListRequest;
import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import jakarta.servlet.http.HttpServletRequest;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);
    GetBlockManageListResponse getBlockManagesBySellerId(Long sellerId);

    void addBlocked(BlockedIdListRequest blockListRequest);
    void removeBlocked(BlockedIdListRequest blockListRequest);
}

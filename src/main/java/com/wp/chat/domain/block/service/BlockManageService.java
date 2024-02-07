package com.wp.chat.domain.block.service;


import com.wp.user.domain.block.dto.request.BlockedIdRequest;
import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import jakarta.servlet.http.HttpServletRequest;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);

    // 차단 목록 조회
    GetBlockManageListResponse getBlockManagesCache(Long sellerId);

    void addBlocked(BlockedIdRequest blockListRequest);
    void removeBlocked(BlockedIdRequest blockListRequest);
}

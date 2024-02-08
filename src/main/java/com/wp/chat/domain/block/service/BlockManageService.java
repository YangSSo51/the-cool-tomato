package com.wp.chat.domain.block.service;


import com.wp.chat.domain.block.dto.request.BlockedIdRequest;
import com.wp.chat.domain.block.dto.response.GetBlockIdsListResponse;
import com.wp.chat.domain.block.dto.response.GetBlockManageListResponse;
import jakarta.servlet.http.HttpServletRequest;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);
    GetBlockIdsListResponse getBlockManagesBySellerId(Long sellerId);

    void addBlocked(BlockedIdRequest blockListRequest);
    void removeBlocked(BlockedIdRequest blockListRequest);
}

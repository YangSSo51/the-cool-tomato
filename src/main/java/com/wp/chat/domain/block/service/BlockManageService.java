package com.wp.chat.domain.block.service;


import com.wp.chat.domain.block.dto.request.BlockedIdRequest;
import com.wp.chat.domain.block.dto.response.GetBlockManageListResponse;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);
    List<Long> getBlockManagesBySellerId(Long sellerId);

    void addBlocked(BlockedIdRequest blockListRequest);
    void removeBlocked(BlockedIdRequest blockListRequest);
}

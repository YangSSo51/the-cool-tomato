package com.wp.user.domain.block.service;


import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import jakarta.servlet.http.HttpServletRequest;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);
    void addBlocked(HttpServletRequest httpServletRequest, Long blockedId);
    void removeBlocked(HttpServletRequest httpServletRequest, Long blockedId);
}

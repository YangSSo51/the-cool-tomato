package com.wp.chat.domain.block.service;

import com.wp.chat.domain.block.dto.response.GetBlockManageListResponse;
import com.wp.chat.global.common.entity.User;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface BlockManageService {
    GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest);
    List<Long> getBlockManagesBySellerId(Long sellerId);

    void addBlocked(HttpServletRequest httpServletRequest, Long blockedId);

    void add(User seller, User blocked);

    void removeBlocked(HttpServletRequest httpServletRequest, Long blockedId);

    void remove(Long blockedId, Long sellerId);
}

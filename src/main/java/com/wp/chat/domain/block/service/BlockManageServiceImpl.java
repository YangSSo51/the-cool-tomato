package com.wp.chat.domain.block.service;

import com.wp.user.domain.block.dto.request.BlockedIdRequest;
import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import com.wp.user.domain.block.entity.BlockHash;
import com.wp.user.domain.block.entity.BlockManage;
import com.wp.user.domain.block.repository.BlockHashRepository;
import com.wp.user.domain.block.repository.BlockManageRepository;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
import com.wp.user.global.common.code.ErrorCode;
import com.wp.user.global.common.request.AccessTokenRequest;
import com.wp.user.global.common.request.ExtractionRequest;
import com.wp.user.global.common.service.AuthClient;
import com.wp.user.global.common.service.JwtService;
import com.wp.user.global.exception.BusinessExceptionHandler;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class BlockManageServiceImpl implements  BlockManageService {

    private final BlockManageRepository blockManageRepository;
    private final BlockHashRepository blockHashRepository;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AuthClient authClient;

    // 차단 목록 조회
    @Override
    public GetBlockManageListResponse getBlockManages(HttpServletRequest httpServletRequest) {
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 인증
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        // 회원 정보 추출
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();
        try {
            if(!infos.get("auth").equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        // 차단 목록
        List<BlockManage> blockManages = blockManageRepository.findAllBySellerId(Long.valueOf(infos.get("userId")));
        return GetBlockManageListResponse.from(blockManages);
    }

    // 차단 목록 조회(캐시)
    @Override
    public GetBlockManageListResponse getBlockManagesCache(Long sellerId) {
        // 차단 목록
        List<BlockManage> blockManages = blockManageRepository.findAllBySellerId(sellerId);
        List<Long> blockedIds = new ArrayList<>();
        for (BlockManage blockManage : blockManages) {
            blockedIds.add(blockManage.getBlocked().getId());
        }
        blockHashRepository.save(BlockHash.builder().id(sellerId).blocked(blockedIds).build());
        return GetBlockManageListResponse.from(blockManages);
    }

    // 차단 등록
    @Override
    @Transactional
    public void addBlocked(BlockedIdRequest blockedIdListRequest) {
        // 판매자
        User seller = userRepository.findById(blockedIdListRequest.getSellerId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        User blocked = userRepository.findById(blockedIdListRequest.getBlockedId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_ID));
        blockManageRepository.save(BlockManage.builder().seller(seller).blocked(blocked).build());
        Optional<BlockHash> blockHash = blockHashRepository.findById(seller.getId());
        if(blockHash.isEmpty()) {
            blockHashRepository.save(BlockHash.builder().id(seller.getId()).blocked(List.of(blocked.getId())).build());
        }
        else {
            blockHash.get().getBlocked().add(blocked.getId());
        }
    }

    // 차단 삭제
    @Override
    @Transactional
    public void removeBlocked(BlockedIdRequest blockedIdListRequest) {
        User seller = userRepository.findById(blockedIdListRequest.getSellerId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        blockManageRepository.deleteByBlockedIdAndSellerId(blockedIdListRequest.getBlockedId(), blockedIdListRequest.getSellerId());
        BlockHash blockHash = blockHashRepository.findById(seller.getId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        blockHash.getBlocked().remove(blockedIdListRequest.getBlockedId());
    }
}

package com.wp.user.domain.block.service;

import com.wp.user.domain.block.dto.request.BlockedIdListRequest;
import com.wp.user.domain.block.dto.response.GetBlockManageListResponse;
import com.wp.user.domain.block.entity.BlockManage;
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
        return getBlockManagesBySellerId(Long.valueOf(infos.get("userId")));
    }

    // 차단 목록 조회
    @Override
    public GetBlockManageListResponse getBlockManagesBySellerId(Long sellerId) {
        // 차단 목록
        List<BlockManage> blockManages = blockManageRepository.findAllBySellerId(sellerId);
        return GetBlockManageListResponse.from(blockManages);
    }

    // 차단 등록
    @Override
    @Transactional
    public void addBlocked(BlockedIdListRequest blockedIdListRequest) {
        // 판매자
        User seller = userRepository.findById(blockedIdListRequest.getSellerId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        List<User> blockedList = userRepository.findAllById(blockedIdListRequest.getBlockedIds());
        System.out.println(blockedIdListRequest.getBlockedIds().size());
        System.out.println(blockedList.size());
        List<BlockManage> blockManageList = new ArrayList<>();
        for (User blocked : blockedList) {
            BlockManage blockManage = BlockManage.builder().seller(seller).blocked(blocked).build();
            blockManageList.add(blockManage);
        }
        blockManageRepository.saveAll(blockManageList);
    }

    // 차단 삭제
    @Override
    @Transactional
    public void removeBlocked(BlockedIdListRequest blockedIdListRequest) {
        User seller = userRepository.findById(blockedIdListRequest.getSellerId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        List<User> blockedList = userRepository.findAllById(blockedIdListRequest.getBlockedIds());
        List<BlockManage> blockManageList = new ArrayList<>();
        for (User blocked : blockedList) {
            BlockManage blockManage = BlockManage.builder().seller(seller).blocked(blocked).build();
            blockManageList.add(blockManage);
        }
        blockManageRepository.deleteAll(blockManageList);
    }
}

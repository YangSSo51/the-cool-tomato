package com.wp.user.domain.block.service;

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

import java.util.List;
import java.util.Map;

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
        List<BlockManage> blockManages = blockManageRepository.findAllBySellerId(Long.valueOf(infos.get("userId")));
        return GetBlockManageListResponse.from(blockManages);
    }

    // 차단 등록
    @Override
    @Transactional
    public void addBlocked(HttpServletRequest httpServletRequest, Long blockedId) {
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 인증
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();
        // 차단된 사용자
        User blocked = userRepository.findById(blockedId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_ID));
        // 판매자
        User seller = userRepository.findById(Long.valueOf(infos.get("userId"))).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        BlockManage blockManage = BlockManage.builder().blocked(blocked).seller(seller).build();
        blockManageRepository.save(blockManage);
    }

    // 차단 삭제
    @Override
    @Transactional
    public void removeBlocked(HttpServletRequest httpServletRequest, Long blockedId) {
        String accessToken = jwtService.resolveAccessToken(httpServletRequest);
        // 인증
        authClient.validateToken(AccessTokenRequest.builder().accessToken(accessToken).build());
        Map<String, String> infos = authClient.extraction(ExtractionRequest.builder().accessToken(accessToken).infos(List.of("userId", "auth")).build()).getInfos();
        try {
            if(!infos.get("auth").equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        blockManageRepository.deleteByBlockedIdAndSellerId(blockedId, Long.valueOf(infos.get("userId")));
    }
}

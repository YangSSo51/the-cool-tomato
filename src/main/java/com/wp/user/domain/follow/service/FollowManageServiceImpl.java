package com.wp.user.domain.follow.service;

import com.wp.user.domain.follow.dto.request.AddFollowManageRequest;
import com.wp.user.domain.follow.dto.response.FollowStatusResponse;
import com.wp.user.domain.follow.dto.response.GetFollowManageListResponse;
import com.wp.user.domain.follow.entity.FollowManage;
import com.wp.user.domain.follow.repository.FollowManageRepository;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.User;
import com.wp.user.domain.user.repository.UserRepository;
import com.wp.user.global.common.code.ErrorCode;
import com.wp.user.global.common.service.JwtService;
import com.wp.user.global.exception.BusinessExceptionHandler;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class FollowManageServiceImpl implements FollowManageService {
    private final FollowManageRepository followManageRepository;
    private final JwtService jwtService;
    private final UserRepository userRepository;

    // 팔로워 목록 조회
    @Override
    public GetFollowManageListResponse getFollowerManages(HttpServletRequest httpServletRequest) {// 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 인증
        // 회원 정보 추출

        // 팔로우 목록(임시)
        List<FollowManage> followManages = followManageRepository.findAllByFollowingId(1L);
        return GetFollowManageListResponse.from(followManages);
    }

    // 팔로잉 목록 조회
    @Override
    public GetFollowManageListResponse getFollowingManages(HttpServletRequest httpServletRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 인증
        // 회원 정보 추출

        // 팔로우 목록(임시)
        List<FollowManage> followManages = followManageRepository.findAllByFollowerId(1L);
        return GetFollowManageListResponse.from(followManages);
    }

    // 팔로우 여부 조회
    @Override
    public FollowStatusResponse getFollowStatus(HttpServletRequest httpServletRequest, Long sellerId) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 인증
        // 회원 정보 추출

        // 팔로우 여부(임시)
        boolean followStatus = followManageRepository.existsByFollowerIdAndFollowingId(1L, sellerId);
        return FollowStatusResponse.builder().isFollow(followStatus).build();
    }

    // 팔로우 등록
    @Override
    @Transactional
    public void addFollow(HttpServletRequest httpServletRequest, AddFollowManageRequest addFollowManageRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 인증
        // 회원 정보 추출

        // 팔로워(임시)
        User follower = userRepository.findById(1L).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_ID));
        // 팔로잉
        User following = userRepository.findById(addFollowManageRequest.getSellerId()).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!following.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        FollowManage followManage = FollowManage.builder()
                .follower(follower)
                .following(following)
                .followAlarmSetting(addFollowManageRequest.isAlarmSetting()).build();
        followManageRepository.save(followManage);
    }

    // 팔로우 취소
    @Override
    @Transactional
    public void removeFollow(HttpServletRequest httpServletRequest, Long sellerId) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 인증
        // 회원 정보 추출

        User seller = userRepository.findById(sellerId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(!seller.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
        }
        followManageRepository.deleteByFollowerIdAndFollowingId(1L, sellerId);
    }

    @Override
    public Long getFollowerCount(Long sellerId) {
        List<FollowManage> followManages = followManageRepository.findAllByFollowingId(sellerId);
        return (long) followManages.size();
    }
}

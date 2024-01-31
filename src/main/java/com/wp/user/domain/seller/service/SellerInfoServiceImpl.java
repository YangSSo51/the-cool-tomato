package com.wp.user.domain.seller.service;
import com.wp.user.domain.seller.dto.request.AddSellerInfoRequest;
import com.wp.user.domain.seller.dto.response.GetSellerInfoListResponse;
import com.wp.user.domain.seller.dto.response.GetSellerInfoResponse;
import com.wp.user.domain.seller.dto.response.GetSellerResponse;
import com.wp.user.domain.seller.dto.response.ModifySellerStatusResponse;
import com.wp.user.domain.seller.entity.SellerInfo;
import com.wp.user.domain.seller.repository.SellerInfoRepository;
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
public class SellerInfoServiceImpl implements SellerInfoService {
    private final SellerInfoRepository sellerInfoRepository;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    // 판매자 상세 정보 조회
    @Override
    public GetSellerResponse getSeller(Long sellerId) {
        GetSellerResponse getSellerResponse = sellerInfoRepository.findSellerByUserId(sellerId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER_ID));
        try {
            if(getSellerResponse.getSellerInfoId() == null) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER);
            }
            if(!getSellerResponse.getAuth().equals(Auth.SELLER)) {
                throw new BusinessExceptionHandler(ErrorCode.NOT_SELLER);
            }
        } catch (BusinessExceptionHandler e) {
            throw new BusinessExceptionHandler(e.getErrorCode());
        }
        return getSellerResponse;
    }

    // 판매자 전환 신청 목록 조회
    @Override
    public GetSellerInfoListResponse getSellerInfos(HttpServletRequest httpServletRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 권한이 관리자일 경우만 조회

        List<SellerInfo> sellerInfoList = sellerInfoRepository.findAll();
        return GetSellerInfoListResponse.from(sellerInfoList);
    }

    // 판매자 전환 신청 상세 조회
    @Override
    public GetSellerInfoResponse getSellerInfo(HttpServletRequest httpServletRequest, Long sellerInfoId) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 권한이 관리자 & 구매자일 경우만 조회
        SellerInfo sellerInfo = sellerInfoRepository.findById(sellerInfoId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER));
        return GetSellerInfoResponse.builder()
                .sellerInfoId(sellerInfo.getId())
                .userId(sellerInfo.getUser().getId())
                .businessNumber(sellerInfo.getBusinessNumber())
                .businessContent(sellerInfo.getBusinessContent())
                .mailOrderSalesNumber(sellerInfo.getMailOrderSalesNumber())
                .businessAddress(sellerInfo.getBusinessAddress())
                .phoneNumber(sellerInfo.getPhoneNumber())
                .registerDate(sellerInfo.getRegisterDate())
                .approvalStatus(sellerInfo.isApprovalStatus()).build();
    }

    // 판매자 전환 신청
    @Override
    @Transactional
    public void addSellerInfo(HttpServletRequest httpServletRequest, AddSellerInfoRequest addSellerInfoRequest) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 권한이 구매자일 경우만 저장


        User user = userRepository.findById(1L).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_USER_ID));
        SellerInfo sellerInfo = SellerInfo.builder()
                .user(user)
                .businessNumber(addSellerInfoRequest.getBusinessNumber())
                .businessContent(addSellerInfoRequest.getBusinessContent())
                .mailOrderSalesNumber(addSellerInfoRequest.getMailOrderSalesNumber())
                .businessAddress(addSellerInfoRequest.getBusinessAddress())
                .phoneNumber(addSellerInfoRequest.getPhoneNumber())
                .approvalStatus(false)
                .build();
        sellerInfoRepository.save(sellerInfo);
    }

    // 판매자 전환 신청 승인
    @Override
    @Transactional
    public ModifySellerStatusResponse modifySellerStatusTrue(HttpServletRequest httpServletRequest, Long sellerInfoId) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 권한이 관리자일 경우만 승인

        SellerInfo sellerInfo = sellerInfoRepository.findById(sellerInfoId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER));
        // 이미 승인된 경우
        try {
            if(sellerInfo.isApprovalStatus()) {
                throw new BusinessExceptionHandler(ErrorCode.ALREADY_APPROVE_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.ALREADY_APPROVE_SELLER);
        }
        sellerInfo.setApprovalStatus(true);
        sellerInfo.getUser().setAuth(Auth.SELLER);
        // 토큰 재발급
        return ModifySellerStatusResponse.builder()
                .profileImg(sellerInfo.getUser().getProfileImg())
                .auth(sellerInfo.getUser().getAuth())
                .accessToken("")
                .refreshToken("")
                .build();
    }

    // 판매자 전환 신청 철회
    @Override
    @Transactional
    public ModifySellerStatusResponse modifySellerStatusFalse(HttpServletRequest httpServletRequest, Long sellerInfoId) {
        // 헤더 Access Token 추출
        String accessToken = jwtService.resolveToken(httpServletRequest);
        // 회원 정보 추출

        // 권한이 관리자일 경우만 철회

        SellerInfo sellerInfo = sellerInfoRepository.findById(sellerInfoId).orElseThrow(() -> new BusinessExceptionHandler(ErrorCode.NOT_FOUND_SELLER));
        // 이미 철회된 경우
        try {
            if(!sellerInfo.isApprovalStatus()) {
                throw new BusinessExceptionHandler(ErrorCode.ALREADY_CANCEL_SELLER);
            }
        } catch (Exception e) {
            throw new BusinessExceptionHandler(ErrorCode.ALREADY_CANCEL_SELLER);
        }
        sellerInfo.setApprovalStatus(false);
        sellerInfo.getUser().setAuth(Auth.BUYER);
        // 토큰 재발급
        return ModifySellerStatusResponse.builder()
                .profileImg(sellerInfo.getUser().getProfileImg())
                .auth(sellerInfo.getUser().getAuth())
                .accessToken("")
                .refreshToken("")
                .build();
    }
}

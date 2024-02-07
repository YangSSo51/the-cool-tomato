package com.wp.live.domain.broadcast.service;

import com.wp.live.domain.broadcast.dto.common.BroadcastInfo;
import com.wp.live.domain.broadcast.dto.controller.response.SearchBySellerResponse;
import com.wp.live.domain.broadcast.dto.controller.response.SearchByTitleResponseDto;
import com.wp.live.domain.broadcast.repository.LiveBroadcastRepository;
import com.wp.live.domain.broadcast.dto.controller.response.GetCarouselResponseDto;
import com.wp.live.domain.broadcast.entity.LiveBroadcast;
import com.wp.live.domain.broadcast.entity.LiveBroadcastDocument;
import com.wp.live.domain.broadcast.entity.UserDocument;
import com.wp.live.domain.broadcast.repository.LiveBroadcastSearchRepository;
import com.wp.live.domain.broadcast.repository.UserSearchRepository;
import com.wp.live.global.common.code.ErrorCode;
import com.wp.live.global.exception.BusinessExceptionHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class BroadcastInfosServiceImpl implements BroadcastInfosService{

    private final LiveBroadcastSearchRepository liveBroadcastSearchRepository;
    private final UserSearchRepository userSearchRepository;
    private final LiveBroadcastRepository liveBroadcastRepository;
    private final StringRedisTemplate redisTemplate;
    private final String RANK = "ranking";
    private final String VIEW = "view";

    @Override
    public GetCarouselResponseDto getCarousel() {
        try{
            List<ZSetOperations.TypedTuple<String>> carouselList = Objects.requireNonNull(redisTemplate.opsForZSet().reverseRangeWithScores(RANK, 0, 19)).stream().toList();
            List<Long> liveBroadcastIds = new ArrayList<>();
            Map<Long, Long> viewCounts = new HashMap<>();
            for (ZSetOperations.TypedTuple<String> stringTypedTuple : carouselList) {
                Long id = Long.parseLong(Objects.requireNonNull(stringTypedTuple.getValue()));
                System.out.println(id);
                Long viewCount = Objects.requireNonNull(stringTypedTuple.getScore()).longValue();
                liveBroadcastIds.add(id);
                viewCounts.put(id, viewCount);
            }

            List<BroadcastInfo> infos = new ArrayList<>();
            List<LiveBroadcast> queryResults = liveBroadcastRepository.findAllById(liveBroadcastIds);
            for (LiveBroadcast queryResult : queryResults) {
                BroadcastInfo info = BroadcastInfo.builder()
                        .liveBroadcastId(queryResult.getId())
                        .broadcastTitle(queryResult.getBroadcastTitle())
                        .sellerId(queryResult.getUser().getId())
                        .viewCount(viewCounts.get(queryResult.getId()))
                        .nickName(queryResult.getUser().getNickname())
                        .build();
                infos.add(info);
            }

            return GetCarouselResponseDto.builder().broadcastInfoList(infos).build();
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR); //DB에 데이터가 없을 때 - JPA
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public SearchByTitleResponseDto searchLivebBroadcastTitle(String keyword, int page, int size) {
        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
            Page<LiveBroadcastDocument> elsResults = liveBroadcastSearchRepository.findByBroadcastTitleContainingAndIsDeleted(keyword, false, pageable);
            List<Long> liveBroadcastIds = new ArrayList<>();
            for (LiveBroadcastDocument elsResult : elsResults) {
                liveBroadcastIds.add(elsResult.getId());
            }

            List<LiveBroadcast> queryResults = liveBroadcastRepository.findAllById(liveBroadcastIds);
            List<BroadcastInfo> infos = new ArrayList<>();
            for (LiveBroadcast queryResult : queryResults) {
                Long viewCount = Long.parseLong((String) redisTemplate.opsForHash().get(VIEW, String.valueOf(queryResult.getId())));
                BroadcastInfo info = BroadcastInfo.builder()
                        .liveBroadcastId(queryResult.getId())
                        .broadcastTitle(queryResult.getBroadcastTitle())
                        .sellerId(queryResult.getUser().getId())
                        .viewCount(viewCount)
                        .nickName(queryResult.getUser().getNickname())
                        .build();
                infos.add(info);
            }

            return SearchByTitleResponseDto.builder().page(page).size(size).total(elsResults.getTotalPages()).broadcastInfoList(infos).build();
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR); //DB에 데이터가 없을 때 - JPA
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public SearchBySellerResponse searchLivebBroadcastSeller(String sellerKeyword, int page, int size) {
        try {
            List<UserDocument> elsResults = userSearchRepository.findByNicknameContaining(sellerKeyword);
            List<Long> userIds = new ArrayList<>();
            for (UserDocument elsResult : elsResults) {
                userIds.add(elsResult.getId());
            }

            Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
            Page<LiveBroadcast> queryResults = liveBroadcastRepository.findByUserIdIn(userIds, pageable);
            List<BroadcastInfo> infos = new ArrayList<>();
            for (LiveBroadcast queryResult : queryResults) {
                Long viewCount = Long.parseLong((String) redisTemplate.opsForHash().get(VIEW, String.valueOf(queryResult.getId())));
                BroadcastInfo info = BroadcastInfo.builder()
                        .liveBroadcastId(queryResult.getId())
                        .broadcastTitle(queryResult.getBroadcastTitle())
                        .sellerId(queryResult.getUser().getId())
                        .viewCount(viewCount)
                        .nickName(queryResult.getUser().getNickname())
                        .build();
                infos.add(info);
            }
            return SearchBySellerResponse.builder().page(page).size(size).total(queryResults.getTotalPages()).broadcastInfoList(infos).build();
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR); //DB에 데이터가 없을 때 - JPA
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }
}

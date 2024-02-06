package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.common.LiveBroadcastInfos;
import com.wp.broadcast.domain.live.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBySellerResponse;
import com.wp.broadcast.domain.live.entity.LiveBroadcast;
import com.wp.broadcast.domain.live.entity.LiveBroadcastDocument;
import com.wp.broadcast.domain.live.repository.LiveBroadcastRepository;
import com.wp.broadcast.domain.live.repository.LiveBroadcastSearchRepository;
import com.wp.broadcast.global.common.code.ErrorCode;
import com.wp.broadcast.global.exception.BusinessExceptionHandler;
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
    private final LiveBroadcastRepository liveBroadcastRepository;
    private final StringRedisTemplate redisTemplate;
    private final String RANK = "ranking";
    private final String VIEW = "view";

    @Override
    public List<LiveBroadcastInfos> getCarousel() {
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

            List<LiveBroadcastInfos> result = new ArrayList<>();
            List<LiveBroadcast> queryResults = liveBroadcastRepository.findAllById(liveBroadcastIds);
            for (LiveBroadcast queryResult : queryResults) {
                LiveBroadcastInfos infos = LiveBroadcastInfos.builder()
                        .liveBroadcastId(queryResult.getId())
                        .broadcastTitle(queryResult.getBroadcastTitle())
                        .sellerId(queryResult.getUser().getId())
                        .viewCount(viewCounts.get(queryResult.getId()))
                        .nickName(queryResult.getUser().getNickname())
                        .build();
                result.add(infos);
            }

            return result;
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR); //DB에 데이터가 없을 때 - JPA
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public GetBroadcastListResponseDto getLivebBroadcastList(int page, int size) {
        return null;
    }

    @Override
    public List<LiveBroadcastInfos> searchLivebBroadcastTitle(String keyword, int page, int size) {
        try {
            Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
            List<LiveBroadcastDocument> elsResults = liveBroadcastSearchRepository.findByBroadcastTitleContaining(keyword, pageable);

            List<Long> liveBroadcastIds = new ArrayList<>();
            for (LiveBroadcastDocument elsResult : elsResults) {
                if(!elsResult.getIsDeleted()) liveBroadcastIds.add(elsResult.getId());
            }

            List<LiveBroadcastInfos> result = new ArrayList<>();
            List<LiveBroadcast> queryResults = liveBroadcastRepository.findAllById(liveBroadcastIds);

            for (LiveBroadcast queryResult : queryResults) {
                Long viewCount = Long.parseLong((String) redisTemplate.opsForHash().get(VIEW, String.valueOf(queryResult.getId())));
                LiveBroadcastInfos infos = LiveBroadcastInfos.builder()
                        .liveBroadcastId(queryResult.getId())
                        .broadcastTitle(queryResult.getBroadcastTitle())
                        .sellerId(queryResult.getUser().getId())
                        .viewCount(viewCount)
                        .nickName(queryResult.getUser().getNickname())
                        .build();
                result.add(infos);
            }
            return result;
        }catch (NoSuchElementException e1){
            throw new BusinessExceptionHandler(ErrorCode.BAD_REQUEST_ERROR); //DB에 데이터가 없을 때 - JPA
        }catch (Exception e2){
            throw new BusinessExceptionHandler(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public SearchBySellerResponse searchLivebBroadcastSeller(String sellerKeyword) {

        return null;
    }
}

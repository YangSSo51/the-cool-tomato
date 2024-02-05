package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.GetCarouselResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastSellerResponse;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastTitleResponse;
import com.wp.broadcast.domain.live.dto.utils.response.ResponseDto;
import com.wp.broadcast.domain.live.repository.LiveBroadcastRepository;
import com.wp.broadcast.domain.live.repository.LiveBroadcastSearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BroadcastInfosServiceImpl implements BroadcastInfosService{


    private final LiveBroadcastSearchRepository liveBroadcastSearchRepository;
    private final LiveBroadcastRepository liveBroadcastRepository;
    private final StringRedisTemplate redisTemplate;

    @Override
    public GetCarouselResponseDto getCarousel() {
        String key = "ranking";
        ZSetOperations<String, String> ZSetOperations = redisTemplate.opsForZSet();
        List<ZSetOperations.TypedTuple<String>> carouselList = Objects.requireNonNull(ZSetOperations.reverseRangeWithScores(key, 0, 19)).stream().toList();
        for (ZSetOperations.TypedTuple<String> stringTypedTuple : carouselList) {
            String value = stringTypedTuple.getValue();

        }
        return null;
    }

    @Override
    public GetBroadcastListResponseDto getLivebBroadcastList(int page, int size) {

        return null;
    }

    @Override
    public SearchBroadcastTitleResponse searchLivebBroadcastTitle(String titleKeyword) {

        return null;
    }

    @Override
    public SearchBroadcastSellerResponse searchLivebBroadcastSeller(String sellerKeyword) {
        return null;
    }
}

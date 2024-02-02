package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.GetCarouselResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastSellerResponse;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastTitleResponse;
import com.wp.broadcast.domain.live.repository.LiveBroadcastRepository;
import com.wp.broadcast.domain.live.repository.LiveBroadcastSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BroadcastInfosServiceImpl implements BroadcastInfosService{

    @Autowired
    LiveBroadcastSearchRepository liveBroadcastSearchRepository;
    @Autowired
    LiveBroadcastRepository liveBroadcastRepository;

    @Override
    public GetCarouselResponseDto getCarousel() {
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

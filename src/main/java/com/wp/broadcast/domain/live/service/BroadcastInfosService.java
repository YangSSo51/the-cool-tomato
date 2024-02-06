package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.common.LiveBroadcastInfos;
import com.wp.broadcast.domain.live.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBySellerResponse;

import java.util.List;

public interface BroadcastInfosService {

    public List<LiveBroadcastInfos> getCarousel();
    public GetBroadcastListResponseDto getLivebBroadcastList(int page, int size);
    public List<LiveBroadcastInfos> searchLivebBroadcastTitle(String keyword, int page, int size);
    public SearchBySellerResponse searchLivebBroadcastSeller(String sellerKeyword);

}

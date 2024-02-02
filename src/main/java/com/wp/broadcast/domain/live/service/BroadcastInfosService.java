package com.wp.broadcast.domain.live.service;

import com.wp.broadcast.domain.live.dto.controller.response.GetBroadcastListResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.GetCarouselResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastSellerResponse;
import com.wp.broadcast.domain.live.dto.controller.response.SearchBroadcastTitleResponse;

public interface BroadcastInfosService {

    public GetCarouselResponseDto getCarousel();
    public GetBroadcastListResponseDto getLivebBroadcastList(int page, int size);
    public SearchBroadcastTitleResponse searchLivebBroadcastTitle(String titleKeyword);
    public SearchBroadcastSellerResponse searchLivebBroadcastSeller(String sellerKeyword);

}

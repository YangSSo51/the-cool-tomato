package com.wp.broadcast.domain.live.controller;

import com.wp.broadcast.domain.live.dto.common.LiveBroadcastInfos;
import com.wp.broadcast.domain.live.dto.controller.response.GetCarouselResponseDto;
import com.wp.broadcast.domain.live.dto.controller.response.SearchByTitleResponseDto;
import com.wp.broadcast.domain.live.service.BroadcastInfosService;
import com.wp.broadcast.global.common.response.SuccessResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/live/infos")
@Tag(name = "info", description = "라이브 API Doc")
public class InfosController {

    private final BroadcastInfosService broadcastInfosService;

    @ResponseBody
    @GetMapping("/carousel")
    @Operation(summary = "캐러셀 방송 목록", description = "캐러셀에 삽입될 방송 목록 반환합니다.")
    public ResponseEntity<SuccessResponse<GetCarouselResponseDto>> getCarousel(){
        List<LiveBroadcastInfos> carousel = broadcastInfosService.getCarousel();
        GetCarouselResponseDto result = GetCarouselResponseDto.builder().liveBroadcastInfosList(carousel).build();
        return new ResponseEntity<>(SuccessResponse.<GetCarouselResponseDto>builder().data(result).status(200).message("캐러셀 데이터 반환 성공").build(), HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/search/seller")
    @Operation(summary = "판매자 기반 방송 목록 검색", description = "판매자 이름을 기반으로 방송 목록 검색합니다.")
    public ResponseEntity<SuccessResponse<GetCarouselResponseDto>> searchBySeller(@RequestParam String name){
        return null;
    }

    @ResponseBody
    @GetMapping("/search/title")
    @Operation(summary = "방속 제목 기반 방송 목록 검색", description = "방속 제목을 기반으로 방송 목록 반환합니다.")
    public ResponseEntity<SuccessResponse<SearchByTitleResponseDto>> searchByTitle(@RequestParam String keyword, @RequestParam int page, @RequestParam int size){
        List<LiveBroadcastInfos> searchLivebBroadcastTitles = broadcastInfosService.searchLivebBroadcastTitle(keyword, page, size);
        SearchByTitleResponseDto result = SearchByTitleResponseDto.builder().liveBroadcastInfosList(searchLivebBroadcastTitles).build();
        return new ResponseEntity<>(SuccessResponse.<SearchByTitleResponseDto>builder().data(result).status(200).message("키워드 기반 검색 결과 반환 성공").build(), HttpStatus.OK);
    }
}

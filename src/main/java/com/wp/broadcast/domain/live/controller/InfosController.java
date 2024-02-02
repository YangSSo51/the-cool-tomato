package com.wp.broadcast.domain.live.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/v1/live/infos")
@Tag(name = "info", description = "라이브 API Doc")
public class InfosController {
    
}

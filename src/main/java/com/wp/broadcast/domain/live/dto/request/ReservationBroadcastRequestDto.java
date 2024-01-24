package com.wp.broadcast.domain.live.dto.request;

import java.time.LocalDate;

public class ReservationBroadcastRequestDto {
    private String accessToken;
    private String broadcastTitle;
    private String content;
    private String script;
    private Boolean ttsSetting;
    private Boolean sttSetting;
    private Boolean chatbotSetting;
    private LocalDate broadcastStartDate;
}

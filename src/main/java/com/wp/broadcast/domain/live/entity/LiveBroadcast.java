package com.wp.broadcast.domain.live.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@Table(name = "live_broadcast")
@NoArgsConstructor
@AllArgsConstructor
public class LiveBroadcast {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "live_broadcast_id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private Long sellerId;
    private String broadcastTitle;
    private String content;
    private String script;
    private Boolean ttsSetting;
    private Boolean chatbotSetting;
    private String shareUrl;
    private LocalDateTime broadcastStartDate;
    private LocalDateTime broadcastEndDate;
    private Boolean broadcastStatus;
    private Long viewCount;
    private Long sessionId;
    private String topicId;
}

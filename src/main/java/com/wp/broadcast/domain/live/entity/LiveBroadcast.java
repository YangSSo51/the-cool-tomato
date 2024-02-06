package com.wp.broadcast.domain.live.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

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

//    @Column(nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id")
    private User user;
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
    private String sessionId;
    private String topicId;

    @CreationTimestamp
    private LocalDateTime registerDate;

    @UpdateTimestamp
    private LocalDateTime modificationTime;

    @Column(nullable = false)
    private Boolean isDeleted;
}

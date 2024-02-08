package com.wp.chat.domain.chat.entity;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@RedisHash(value = "broadcast_info")
public class BroadcastInfo {
    @Id
    private String id; // roomId
    private Long sellerId;
}

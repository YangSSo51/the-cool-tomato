package com.wp.chat.domain.block.entity;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

import java.util.List;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
@RedisHash(value = "block_list", timeToLive = 60*60*24*3L)
public class BlockHash {
    @Id
    private Long id; // sellerId
    private Blocked blocked;
    @RedisHash(value = "blocked", timeToLive = 60*60*24*3L)
    static class Blocked {
        private Long id;
    }
}
package com.wp.global.config;

import io.lettuce.core.ReadFrom;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStaticMasterReplicaConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;

@RequiredArgsConstructor
@Configuration
public class RedisConfig {

    private final RedisProperties properties;

    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
                .readFrom(ReadFrom.REPLICA_PREFERRED)
                .build();
        RedisStaticMasterReplicaConfiguration staticMasterReplicaConfiguration =
                new RedisStaticMasterReplicaConfiguration(properties.getMain().getHost(), properties.getMain().getPort());

        properties.getReplicas().forEach(replica -> staticMasterReplicaConfiguration.addNode(replica.getHost(), replica.getPort()));
        return new LettuceConnectionFactory(staticMasterReplicaConfiguration, clientConfig);
    }
}
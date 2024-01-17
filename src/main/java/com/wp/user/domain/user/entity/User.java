package com.wp.user.domain.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
// 회원 기본 정보
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private Long id;

    @Column(length = 10, nullable = false)
    private Auth auth;

    @Column(length = 50, nullable = false, unique = true)
    private String loginId;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @Column(length = 100, nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 50)
    private String nickname;

    @Column(nullable = false, columnDefinition = "TINYINT", length = 1)
    private Sex sex;

    @Column(nullable = false)
    private LocalDate birthday;

    private String profileImg;

    @CreatedDate
    private LocalDateTime joinDate;
}

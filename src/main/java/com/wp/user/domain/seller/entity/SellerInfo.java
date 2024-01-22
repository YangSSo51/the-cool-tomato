package com.wp.user.domain.seller.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wp.user.domain.user.entity.Auth;
import com.wp.user.domain.user.entity.Sex;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class SellerInfo {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "seller_info_id")
    private Long id;

    @Column(length = 100)
    private String businessNumber;

    @Lob
    private String business_content;

    private String businessAddress;

    @Column(length = 20)
    private String phoneNumber;

    private boolean approvalStatus;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime registerDate;
}

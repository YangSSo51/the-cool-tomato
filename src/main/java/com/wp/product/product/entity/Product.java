package com.wp.product.product.entity;

import com.wp.product.product.dto.request.ProductUpdateRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private Long categoryId;
    private Long sellerId;
    private String productName;
    private String productContent;
    private String paymentLink;
    private int price;
    private int deliveryCharge;
    private int quantity;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime registerDate;

    public void change(ProductUpdateRequest productRequest) {
        this.categoryId = productRequest.getCategoryId();
        this.productName = productRequest.getProductName();
        this.productContent = productRequest.getProductContent();
        this.paymentLink = productRequest.getPaymentLink();
        this.price = productRequest.getPrice();
        this.deliveryCharge = productRequest.getDeliveryCharge();
        this.quantity = productRequest.getQuantity();
    }
}

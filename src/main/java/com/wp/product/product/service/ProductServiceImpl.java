package com.wp.product.product.service;

import com.wp.product.product.dto.request.ProductRequest;
import com.wp.product.product.entity.Product;
import com.wp.product.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    @Override
    public void saveProduct(ProductRequest productRequest){
        Product product = Product.builder()
                        .productName(productRequest.getProductName())
                        .productName(productRequest.getProductName())
                        .paymentLink(productRequest.getPaymentLink())
                        .price(productRequest.getPrice())
                        .deliveryCharge(productRequest.getDeliveryCharge())
                        .quantity(productRequest.getQuantity())
                        .build();
        productRepository.save(product);
    }

    @Override
    public void updateProduct(ProductRequest productRequest) {
         Long productId = productRequest.getProductId();

        Optional<Product> result = productRepository.findById(productId);

        Product product = result.orElseThrow();
        product.change(productRequest);

        productRepository.save(product);
    }
}

package com.wp.product.product.service;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.entity.Product;
import com.wp.product.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    @Override
    public void saveProduct(ProductCreateRequest productRequest){
        Product product = Product.builder()
                        .productName(productRequest.getProductName())
                        .productName(productRequest.getProductName())
                        .paymentLink(productRequest.getPaymentLink())
                        .price(productRequest.getPrice())
                        .deliveryCharge(productRequest.getDeliveryCharge())
                        .quantity(productRequest.getQuantity())
                        .build();
        try {
            productRepository.save(product);
        }catch (Exception e){
            throw new BusinessExceptionHandler("상품 등록에 실패했습니다", ErrorCode.INSERT_ERROR);
        }
    }

    @Override
    public void updateProduct(ProductUpdateRequest productRequest) {
        Long productId = productRequest.getProductId();

        Optional<Product> result = productRepository.findById(productId);

        try {
            Product product = result.orElseThrow();
            product.change(productRequest);
            productRepository.save(product);
        }catch (NoSuchElementException e){
            throw new BusinessExceptionHandler("상품이 존재하지 않습니다",ErrorCode.NO_ELEMENT_ERROR);
        }catch(Exception e){
            throw new BusinessExceptionHandler("상품 수정에 실패했습니다",ErrorCode.UPDATE_ERROR);
        }
    }
}

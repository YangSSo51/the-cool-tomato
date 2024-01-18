package com.wp.product.product.service;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
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
    public ProductFindResponse findProductById(Long productId) {
        Optional<Product> result = productRepository.findById(productId);
        Product product = result
                            .orElseThrow(()->new BusinessExceptionHandler("상품이 존재하지 않습니다",ErrorCode.NO_ELEMENT_ERROR));

        ProductFindResponse response = ProductFindResponse.builder()
                                        .productId(product.getProductId())
                                        .sellerId(product.getSellerId())
                                        .sellerName(product.getSellerId())
                                        .categoryId(product.getCategoryId())
                                        .productName(product.getProductName())
                                        .productContent(product.getProductContent())
                                        .paymentLink(product.getPaymentLink())
                                        .price(product.getPrice())
                                        .deliveryCharge(product.getDeliveryCharge())
                                        .quantity(product.getQuantity())
                                        .registerDate(product.getRegisterDate())
                                        .build();

        return response;
    }

    @Override
    public void saveProduct(ProductCreateRequest productRequest){
        Product product = Product.builder()
                         .categoryId(productRequest.getCategoryId())
                        .productName(productRequest.getProductName())
                        .productContent(productRequest.getProductContent())
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

    @Override
    public void deleteProduct(Long productId) {
            productRepository.findById(productId)
                    .orElseThrow(()->new BusinessExceptionHandler("상품이 존재하지 않습니다",ErrorCode.NO_ELEMENT_ERROR));

            productRepository.deleteById(productId);
    }
}

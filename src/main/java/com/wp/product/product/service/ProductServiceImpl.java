package com.wp.product.product.service;

import com.wp.product.category.entity.Category;
import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import com.wp.product.product.entity.Product;
import com.wp.product.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    @Override
    public Map<String, Object> searchProduct(ProductSearchRequest productSearchRequest) {
        //검색 조건에 맞는 상품 리스트 조회
        try {
            Page<ProductFindResponse> result = productRepository.search(productSearchRequest);
            Map<String, Object> map = new HashMap<>();

            map.put("list", result.getContent());
            map.put("totalCount", result.getTotalElements());

            return map;
        } catch (Exception e) {
            log.debug(e.getMessage());
            throw new BusinessExceptionHandler("상품 리스트 조회 중 에러가 발생했습니다.", ErrorCode.NO_ELEMENT_ERROR);
        }
    }

    @Override
    public Map<String, Object> searchMyProducts(ProductSearchRequest productSearchRequest) {
        //판매자가 자신이 등록한 상품 리스트 조회
        try {
            Page<ProductFindResponse> result = productRepository.searchMyProducts(productSearchRequest);
            Map<String, Object> map = new HashMap<>();

            map.put("list", result.getContent());
            map.put("totalCount", result.getTotalElements());

            return map;
        } catch (Exception e) {
            log.debug(e.getMessage());
            throw new BusinessExceptionHandler("상품 리스트 조회 중 에러가 발생했습니다.", ErrorCode.NO_ELEMENT_ERROR);
        }
    }

    @Override
    public Map<String, Object> searchRecentProducts(List<Long> idList) {
        try {
            //상품 아이디로 최근 본 상품 리스트 조회
            Page<ProductFindResponse> result = productRepository.searchRecentProducts(idList);
            Map<String, Object> map = new HashMap<>();

            map.put("list" , result.getContent());
            map.put("totalCount", result.getTotalElements());

            return map;
        }catch (Exception e){
            log.debug(e.getMessage());
            throw new BusinessExceptionHandler("유효하지 않은 상품 번호입니다.",ErrorCode.NO_ELEMENT_ERROR);
        }
    }

    @Override
    public ProductFindResponse findProductById(Long productId) {
        //상품 번호로 상품 조회
        //TODO : 판매자 아이디 확인 필요
        // 카테고리명, 판매자명 추가 조회 필요
        Optional<Product> result = productRepository.findById(productId);

        //상품이 존재하지 않으면 예외처리
        Product product = result
                            .orElseThrow(()->new BusinessExceptionHandler("상품이 존재하지 않습니다",ErrorCode.NO_ELEMENT_ERROR));

        ProductFindResponse response = ProductFindResponse.builder()
                                        .productId(product.getProductId())
                                        .sellerId(product.getSellerId())
                                        .categoryId(product.getCategory().getCategoryId())
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
        //상품 등록 객체 생성
        Product product = Product.builder()
                        .category(Category.builder().categoryId(productRequest.getCategoryId()).build())
                        .sellerId(1L)                   // TODO : 등록하는 사용자 정보로 등록
                        .productName(productRequest.getProductName())
                        .productContent(productRequest.getProductContent())
                        .paymentLink(productRequest.getPaymentLink())
                        .price(productRequest.getPrice())
                        .deliveryCharge(productRequest.getDeliveryCharge())
                        .quantity(productRequest.getQuantity())
                        .build();
        try {
            //상품을 등록함
            productRepository.save(product);
        }catch (DataIntegrityViolationException e){
            log.debug(e.getMessage());
            throw new DataIntegrityViolationException("상품 등록에 실패했습니다");
        }
    }

    @Override
    public void updateProduct(ProductUpdateRequest productRequest) {
        //상품번호로 조회된 상품이 있는지 확인
        Long productId = productRequest.getProductId();
        //TODO : 작성자와 동일한 아이디의 수정요청인지 확인 필요
        Optional<Product> result = productRepository.findById(productId);

        try {
            Product product = result.orElseThrow();
            //상품 정보 수정
            product.change(productRequest);
            productRepository.save(product);
        }catch (NoSuchElementException e){
            throw new NoSuchElementException("상품이 존재하지 않습니다");
        }catch(Exception e){
            log.debug(e.getMessage());
            throw new BusinessExceptionHandler("상품 수정에 실패했습니다",ErrorCode.UPDATE_ERROR);
        }
    }

    @Override
    public void deleteProduct(Long productId) {
        //상품 번호로 상품 조회
        //TODO : 작성자와 동일한 아이디의 삭제요청인지 확인 필요
        productRepository.findById(productId)
                .orElseThrow(()->new BusinessExceptionHandler("상품이 존재하지 않습니다",ErrorCode.NO_ELEMENT_ERROR));

        //상품 번호로 상품 삭제
        productRepository.deleteById(productId);
    }
}

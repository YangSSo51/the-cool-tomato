package com.wp.product.liveproduct.service;

import com.wp.product.global.common.code.ErrorCode;
import com.wp.product.global.exception.BusinessExceptionHandler;
import com.wp.product.global.util.DateUtil;
import com.wp.product.liveproduct.dto.request.LiveProductCreateRequest;
import com.wp.product.liveproduct.entity.LiveProduct;
import com.wp.product.liveproduct.repository.LiveProductRepository;
import com.wp.product.product.entity.Product;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class LiveProductServiceImpl implements LiveProductService{

    private final LiveProductRepository liveProductRepository;

    @Override
    public void saveLiveProduct(List<LiveProductCreateRequest> liveProductRequestList) {

        List<LiveProduct> liveProductList = new ArrayList<>();

        liveProductRequestList.forEach(liveProductCreateRequest -> {
            liveProductList.add(LiveProduct.builder()
                    .product(Product.builder().productId(liveProductCreateRequest.getProductId()).build())
                    .liveFlatPrice(liveProductCreateRequest.getLiveFlatPrice())
                    .liveRatePrice(liveProductCreateRequest.getLiveRatePrice())
                    .livePriceStartDate(DateUtil.stringToLocalDateTime(liveProductCreateRequest.getLivePriceStartDate()))
                    .livePriceEndDate(DateUtil.stringToLocalDateTime(liveProductCreateRequest.getLivePriceEndDate()))
                    .mainProductSetting(liveProductCreateRequest.getMainProductSetting())
                    .seq(liveProductCreateRequest.getSeq()).build());
        });

        try {
            liveProductRepository.saveAll(liveProductList);
        }catch (Exception e){
            throw new BusinessExceptionHandler("라이브 상품 등록에 실패했습니다. ", ErrorCode.INSERT_ERROR);
        }
    }
}

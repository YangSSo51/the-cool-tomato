package com.wp.product.liveproduct.repository.search;

import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wp.product.liveproduct.dto.request.LiveProductSearchRequest;
import com.wp.product.liveproduct.entity.LiveProduct;
import com.wp.product.liveproduct.entity.QLiveProduct;
import com.wp.product.product.entity.QProduct;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class LiveProductSearchImpl extends QuerydslRepositorySupport implements LiveProductSearch{

    private final JPAQueryFactory queryFactory;

    public LiveProductSearchImpl(JPAQueryFactory queryFactory) {
        super(LiveProduct.class);
        this.queryFactory = queryFactory;
    }

    @Override
    @Transactional
    public Page<LiveProduct> search(LiveProductSearchRequest request){
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());

        QLiveProduct liveProduct = QLiveProduct.liveProduct;
        QProduct product = QProduct.product;

        //방송 품목 조회 쿼리
        List<LiveProduct> list = queryFactory.selectFrom(liveProduct)
                .innerJoin(liveProduct.product)
                .fetchJoin()
                .innerJoin(product.category)
                .fetchJoin()
                .where(liveProduct.liveId.eq(request.getLiveId()))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        //갯수 조회 쿼리
        JPQLQuery<Long> countQuery = queryFactory.select(liveProduct.count())
                .from(liveProduct)
                .where(liveProduct.liveId.eq(request.getLiveId()));

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }
}

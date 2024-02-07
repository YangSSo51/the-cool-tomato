package com.wp.product.product.repository.search;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wp.product.category.entity.QCategory;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.response.ProductFindResponse;
import com.wp.product.product.entity.Product;
import com.wp.product.product.entity.QProduct;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;

@Repository
public class ProductSearchImpl extends QuerydslRepositorySupport implements ProductSearch{

    private final JPAQueryFactory queryFactory;

    public ProductSearchImpl(JPAQueryFactory queryFactory){
        super(Product.class);
        this.queryFactory = queryFactory;
    }

    @Override
    @Transactional
    public Page<ProductFindResponse> search(ProductSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(),request.getSize());    //페이징

        QProduct product = QProduct.product;
        QCategory category = QCategory.category;

        BooleanBuilder builder = new BooleanBuilder();

        if(request.getCategoryId() !=null){
            builder.and(category.categoryId.eq(request.getCategoryId()));
        }
        if(request.getSellerId() != null ){
            builder.and(product.sellerId.eq(request.getSellerId()));
        }

        //QueryDSL을 쓰는 경우 response DTO는 반드시 setter, NoArgsConstructor 설정이 되어있어야함
        List<ProductFindResponse> list =  queryFactory.select(Projections.bean(ProductFindResponse.class,
                    product.productId,
                    product.sellerId,
                    product.category.categoryId,
                    product.category.categoryContent.as("categoryName"),
                    product.productName,
                    product.productContent,
                    product.paymentLink,
                    product.imgSrc,
                    product.price,
                    product.deliveryCharge,
                    product.quantity,
                    product.registerDate
                ))
                .from(product)
                .leftJoin(category)
                .on(product.category.categoryId.eq(category.categoryId))
                .fetchJoin()
                .where(builder)
                .orderBy(product.registerDate.desc())
                .offset(request.getPage()*request.getSize())
                .limit(request.getSize())
                .fetch();

        JPQLQuery<Long> countQuery = queryFactory.select(product.count())
                .from(product)
                .where(builder);

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }

    @Override
    public Page<ProductFindResponse> searchMyProducts(ProductSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(),request.getSize());    //페이징

        QProduct product = QProduct.product;
        QCategory category = QCategory.category;

        BooleanBuilder builder = new BooleanBuilder();

        builder.and(product.sellerId.eq(request.getSellerId()));

        List<ProductFindResponse> list =  queryFactory.select(Projections.bean(ProductFindResponse.class,
                        product.productId,
                        product.sellerId,
                        product.category.categoryId,
                        product.category.categoryContent.as("categoryName"),
                        product.productName,
                        product.productContent,
                        product.paymentLink,
                        product.imgSrc,
                        product.price,
                        product.deliveryCharge,
                        product.quantity,
                        product.registerDate
                ))
                .from(product)
                .leftJoin(category)
                .on(product.category.categoryId.eq(category.categoryId))
                .fetchJoin()
                .where(builder)
                .orderBy(product.registerDate.desc())
                .offset(request.getPage()*request.getSize())
                .limit(request.getSize())
                .fetch();

        JPQLQuery<Long> countQuery = queryFactory.select(product.count())
                .from(product)
                .where(builder);

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }

    @Override
    @Transactional
    public Page<ProductFindResponse> searchRecentProducts(List<Long> idList) {
        //아이디 리스트로 마이페이지에서 검색
        Pageable pageable = PageRequest.of(0,10);    //페이징
        QProduct product = QProduct.product;
        QCategory category = QCategory.category;

        BooleanBuilder builder = new BooleanBuilder();
        builder.and(product.productId.in(idList));

        List<ProductFindResponse> list =  queryFactory.select(Projections.bean(ProductFindResponse.class,
                        product.productId,
                        product.sellerId,
                        product.category.categoryId,
                        product.category.categoryContent.as("categoryName"),
                        product.productName,
                        product.productContent,
                        product.paymentLink,
                        product.imgSrc,
                        product.price,
                        product.deliveryCharge,
                        product.quantity,
                        product.registerDate
                ))
                .from(product)
                .leftJoin(category)
                .on(product.category.categoryId.eq(category.categoryId))
                .fetchJoin()
                .where(builder)
                .orderBy(product.productId.desc())
                .fetch();

        //갯수 조회 쿼리
        JPQLQuery<Long> countQuery = queryFactory.select(product.count())
                .from(product)
                .where(builder);

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }
}

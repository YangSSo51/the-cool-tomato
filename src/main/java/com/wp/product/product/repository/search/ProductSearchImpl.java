package com.wp.product.product.repository.search;

import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wp.product.category.entity.QCategory;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.entity.Product;
import com.wp.product.product.entity.QProduct;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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
    public Page<Product> search(ProductSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(),request.getSize());    //페이징

        QProduct product = QProduct.product;
        QCategory category = QCategory.category;

        JPQLQuery<Product> query = from(product)                                //SELECT ... FROM PRODUCT
                .leftJoin(product.category).fetchJoin();                        //LEFT JOIN CATEGORY ON CATEGORY_ID

        if(request.getCategoryId()!=null && request.getCategoryId() != 0) {
            query.where(category.categoryId.eq(request.getCategoryId()));       //WHERE CATEGORY_ID = ?
        }

        if("seller".equals(request.getType())){
            query.where(product.sellerId.eq(request.getSellerId()));            //AND SELLER_ID = ?
        }

        query.groupBy(product)
                .orderBy(product.registerDate.desc());                          //ORDER BY REGISTER_DATE DESC
        this.getQuerydsl().applyPagination(pageable,query);                     //페이징 처리

        List<Product> list = query.fetch();                                     //쿼리 실행
        Long count = query.fetchCount();                                        //실행 결과

        return new PageImpl<>(list,pageable,count);
    }

    @Override
    @Transactional
    public Page<Product> searchInMypage(List<Long> idList) {
        //아이디 리스트로 마이페이지에서 검색
        Pageable pageable = PageRequest.of(0,10);    //페이징
        QProduct product = QProduct.product;

        List<Product> list = queryFactory.selectFrom(product)
                .leftJoin(product.category).fetchJoin()                       //LEFT JOIN CATEGORY ON CATEGORY_ID
                .where(product.productId.in(idList))                           //Product Id List
                .groupBy(product)
                .orderBy(product.registerDate.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        //갯수 조회 쿼리
        JPQLQuery<Long> countQuery = queryFactory.select(product.count())
                .from(product)
                .where(product.productId.in(idList));                           //Product Id List

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }
}

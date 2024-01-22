package com.wp.product.product.repository.search;

import com.querydsl.jpa.JPQLQuery;
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

public class ProductSearchImpl extends QuerydslRepositorySupport implements ProductSearch{
    public ProductSearchImpl(){
        super(Product.class);
    }

    @Override
    @Transactional
    public Page<Product> search(ProductSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(),request.getSize());    //페이징

        QProduct product = QProduct.product;
        QCategory category = QCategory.category;

        JPQLQuery<Product> query = from(product);                              //SELECT ... FROM PRODUCT
        query.leftJoin(category).on(product.category.eq(category));            //LEFT JOIN CATEGORY ON CATEGORY_ID

        if(request.getCategoryId()!=null && request.getCategoryId() != 0) {
            query.where(category.categoryId.eq(request.getCategoryId()));       //WHERE CATEGORY_ID = ?
        }

        if("seller".equals(request.getType())){
            query.where(product.sellerId.eq(request.getSellerId()));            //AND SELLER_ID = ?
        }

        query.groupBy(product);
        this.getQuerydsl().applyPagination(pageable,query);                     //페이징 처리
        query.orderBy(product.registerDate.desc());                             //ORDER BY REGISTER_DATE DESC

        List<Product> list = query.fetch();                                     //쿼리 실행
        Long count = query.fetchCount();                                        //실행 결과

        return new PageImpl<>(list,pageable,count);
    }
}

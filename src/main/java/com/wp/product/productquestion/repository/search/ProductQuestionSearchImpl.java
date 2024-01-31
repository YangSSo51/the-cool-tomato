package com.wp.product.productquestion.repository.search;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wp.product.productquestion.dto.request.ProductQuestionSearchRequest;
import com.wp.product.productquestion.dto.response.ProductQuestionSearchResponse;
import com.wp.product.productquestion.entity.ProductQuestion;
import com.wp.product.productquestion.entity.QProductQuestion;
import com.wp.product.user.entity.QUser;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ProductQuestionSearchImpl extends QuerydslRepositorySupport implements ProductQuestionSearch {
    private final JPAQueryFactory queryFactory;

    public ProductQuestionSearchImpl(JPAQueryFactory queryFactory){
        super(ProductQuestion.class);
        this.queryFactory = queryFactory;
    }
    @Override
    @Transactional
    public Page<ProductQuestionSearchResponse> search(ProductQuestionSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());    //페이징

        QProductQuestion qProductQuestionBoard = QProductQuestion.productQuestion;
        QUser qUser = QUser.user;

        List<ProductQuestionSearchResponse> list = queryFactory.select(Projections.bean(ProductQuestionSearchResponse.class,
                                qProductQuestionBoard.productQuestionBoardId,
                                qProductQuestionBoard.writerId,
                                qUser.nickname.as("writerNickname"),
                                qProductQuestionBoard.product.productId,
                                qProductQuestionBoard.questionContent,
                                qProductQuestionBoard.answerContent,
                                qProductQuestionBoard.questionRegisterDate,
                                qProductQuestionBoard.answerRegisterDate,
                                new CaseBuilder()
                                        .when(qProductQuestionBoard.answerContent.isNotNull())
                                        .then(1)
                                        .otherwise(0).as("answer")
                ))
                .from(qProductQuestionBoard)
                .leftJoin(qUser)
                .on(qUser.userId.eq(qProductQuestionBoard.writerId))
                .fetchJoin()
                .where(qProductQuestionBoard.product.productId.eq(request.getProductId()))
                .offset(request.getPage()*request.getSize())
                .limit(request.getSize())
                .orderBy(qProductQuestionBoard.questionRegisterDate.desc())
                .fetch();

        JPQLQuery<Long> countQuery = queryFactory.select(qProductQuestionBoard.count())
                .from(qProductQuestionBoard)
                .where(qProductQuestionBoard.product.productId.eq(request.getProductId()));

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }

    @Override
    @Transactional
    public Page<ProductQuestionMyListResponse> searchMyList(ProductQuestionSearchRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());    //페이징

        QProductQuestion qProductQuestionBoard = QProductQuestion.productQuestion;
        QUser qUser = QUser.user;

        List<ProductQuestionMyListResponse> list = queryFactory.select(Projections.bean(ProductQuestionMyListResponse.class,
                        qProductQuestionBoard.productQuestionBoardId,
                        qProductQuestionBoard.writerId,
                        qUser.nickname.as("writerNickname"),
                        qProductQuestionBoard.product.productId,
                        qProductQuestionBoard.product.productName,
                        qProductQuestionBoard.product.productContent,
                        qProductQuestionBoard.questionContent,
                        qProductQuestionBoard.answerContent,
                        qProductQuestionBoard.questionRegisterDate,
                        qProductQuestionBoard.answerRegisterDate,
                        new CaseBuilder()
                                .when(qProductQuestionBoard.answerContent.isNotNull())
                                .then(1)
                                .otherwise(0).as("answer")
                ))
                .from(qProductQuestionBoard)
                .leftJoin(qUser)
                .on(qUser.userId.eq(qProductQuestionBoard.writerId))
                .fetchJoin()
                .where(qProductQuestionBoard.writerId.eq(request.getSellerId()))
                .offset(request.getPage()*request.getSize())
                .limit(request.getSize())
                .orderBy(qProductQuestionBoard.answerContent.asc(),qProductQuestionBoard.questionRegisterDate.desc())
                .fetch();

        JPQLQuery<Long> countQuery = queryFactory.select(qProductQuestionBoard.count())
                .from(qProductQuestionBoard)
                .where(qProductQuestionBoard.writerId.eq(request.getSellerId()));

        return PageableExecutionUtils.getPage(list,pageable,countQuery::fetchOne);
    }
}

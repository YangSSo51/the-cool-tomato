package com.wp.chatbot.chatbot.repository.search;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wp.chatbot.chatbot.dto.request.ChatbotSearchRequest;
import com.wp.chatbot.chatbot.dto.response.ChatbotResponse;
import com.wp.chatbot.chatbot.entity.Chatbot;
import com.wp.chatbot.chatbot.entity.QChatbot;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public class ChatbotRepositorySearchImpl extends QuerydslRepositorySupport implements ChatbotRepositorySearch{

    private final JPAQueryFactory queryFactory;

    public ChatbotRepositorySearchImpl(JPAQueryFactory queryFactory){
        super(Chatbot.class);
        this.queryFactory = queryFactory;
    }

    @Override
    @Transactional
    public Page<ChatbotResponse> search(ChatbotSearchRequest request){
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());
        QChatbot chatbot = QChatbot.chatbot;

        List<ChatbotResponse> result = queryFactory.select(Projections.bean(ChatbotResponse.class,
                        chatbot.chatbotId,
                        chatbot.roomId,
                        chatbot.question,
                        chatbot.answer,
                        chatbot.registerDate
                ))
                .from(chatbot)
                .where(chatbot.roomId.eq(request.getRoomId()))
                .orderBy(chatbot.registerDate.desc()).fetch();

        JPQLQuery<Long> countQuery = queryFactory.select(chatbot.count())
                .from(chatbot)
                .where(chatbot.roomId.eq(request.getRoomId()));

        return PageableExecutionUtils.getPage(result,pageable,countQuery::fetchOne);
    }
}

package com.wp.product.productquestion.repository;

import com.wp.product.productquestion.entity.ProductQuestion;
import com.wp.product.productquestion.repository.search.ProductQuestionSearch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductQuestionRepository extends JpaRepository<ProductQuestion,Long>, ProductQuestionSearch {
}

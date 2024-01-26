package com.wp.product.productquestion.repository;

import com.wp.product.productquestion.entity.ProductQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductQuestionRepository extends JpaRepository<ProductQuestion,Long> {
}

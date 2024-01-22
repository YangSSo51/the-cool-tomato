package com.wp.product.product.repository.search;

import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.entity.Product;
import org.springframework.data.domain.Page;

public interface ProductSearch {
    Page<Product> search(ProductSearchRequest request);
}

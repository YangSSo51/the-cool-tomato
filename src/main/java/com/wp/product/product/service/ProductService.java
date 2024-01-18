package com.wp.product.product.service;

import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;

public interface ProductService {
    void saveProduct(ProductCreateRequest productRequest);

    void updateProduct(ProductUpdateRequest productRequest);
}

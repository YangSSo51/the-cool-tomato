package com.wp.product.product.service;

import com.wp.product.product.dto.request.ProductCreateRequest;
import com.wp.product.product.dto.request.ProductSearchRequest;
import com.wp.product.product.dto.request.ProductUpdateRequest;
import com.wp.product.product.dto.response.ProductFindResponse;

import java.util.List;

public interface ProductService {
    List<ProductFindResponse> searchProduct(ProductSearchRequest productSearchRequest);

    ProductFindResponse findProductById(Long productId);

    void saveProduct(ProductCreateRequest productRequest);

    void updateProduct(ProductUpdateRequest productRequest);

    void deleteProduct(Long productId);

}

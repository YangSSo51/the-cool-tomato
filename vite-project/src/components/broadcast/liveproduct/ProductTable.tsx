import React from "react";
import {
    ItemDetailInterface,
    liveProductPrice,
} from "../../../types/DataTypes";
import { Wrap, WrapItem, Center, Checkbox } from "@chakra-ui/react";

interface ProductTableProps {
    products: Array<ItemDetailInterface>;
    selectedProductId: Map<number, liveProductPrice>;
    handleCheck: (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number,
        price: number
    ) => void;
}

function ProductTable({
    products,
    selectedProductId,
    handleCheck,
}: ProductTableProps) {
    return (
        <>
            {/* 상품 표 헤더 */}
            <Wrap borderBottom="1px solid grey" spacing="0.1rem">
                <WrapItem>
                    <Center w="6rem" h="2.5rem">
                        상품번호
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="22rem" h="2.5rem">
                        상품이름
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="6rem" h="2.5rem">
                        수량
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="9rem" h="2.5rem">
                        가격
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="4rem" h="2.5rem">
                        선택
                    </Center>
                </WrapItem>
            </Wrap>
            {/* 상품 표 내용 */}
            {products.map((product) => {
                const id = product.productId;
                return (
                    <Wrap
                        key={product.productId}
                        borderBottom="1px solid grey"
                        spacing="0.1rem"
                    >
                        <WrapItem>
                            <Center w="6rem" h="2.5rem">
                                {id}
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="22rem" h="2.5rem">
                                {product.productName}
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="6rem" h="2.5rem">
                                {product.quantity}
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="9rem" h="2.5rem">
                                {product.price}
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w="4rem" h="2.5rem">
                                <Checkbox
                                    size="lg"
                                    colorScheme="green"
                                    data-productid={id}
                                    data-price={product.price}
                                    onChange={(e) =>
                                        handleCheck(e, id, product.price)
                                    }
                                    defaultChecked={selectedProductId.has(id)}
                                ></Checkbox>
                            </Center>
                        </WrapItem>
                    </Wrap>
                );
            })}
        </>
    );
}

export default ProductTable;

import { Text } from "@chakra-ui/layout";
import { Box, Center } from "@chakra-ui/react";
import { SellerBroadcastFetch } from "../../../api/Itemlist";
import { useEffect, useState } from "react";
import { AddItemInterface } from "../../../types/DataTypes";
import SellerProductList from "../SellerProductList";

export default function ProductList() {
    const [Data, setData] = useState<Array<AddItemInterface> | undefined>();
    useEffect(() => {
        SellerBroadcastFetch({ page: 0, size: 8 }).then((res) => {
            setData(res);
        });
    }, []);

    return (
        <>
            <Center mb={"1.5rem"}>
                <Text fontSize={"4xl"} as={"b"}>
                    상품 목록
                </Text>
            </Center>
            {Data?.map((res: AddItemInterface | undefined, index: number) => (
                <Box key={index}>
                    <SellerProductList
                        img={`${res?.imgSrc}`}
                        price={Number(`${res?.price}`)}
                        title={`${res?.productName}`}
                    />
                </Box>
            ))}
        </>
    );
}

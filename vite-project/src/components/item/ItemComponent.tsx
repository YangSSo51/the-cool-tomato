import { useEffect, useState } from "react";
import { ItemListFetch } from "../../api/Itemlist";
import { Box, Flex, Text } from "@chakra-ui/react";
import Goods from "./ItemListComponent";
import { useParams } from "react-router-dom";
import { ItemDetailInterface } from "../../types/DataTypes";

export default function ItemComponent() {
    const [dummylist, setDummylist] = useState<Array<ItemDetailInterface> | undefined>();
    const { currentpage } = useParams() as { currentpage: string };

    useEffect(() => {
        ItemListFetch({ page: Number(currentpage), size: 16 }).then(
            (res) => {
                setDummylist(res.list);
            }
        );
    }, [currentpage]);
    
    return (
        <Flex direction={"column"}>
            <Box p={"1rem"} mb={"1rem"}>
                <Text textAlign={"right"}>카테고리 항목</Text>
            </Box>
            <Flex wrap="wrap" gap={"2rem"}>
                {dummylist?.map((data : ItemDetailInterface | undefined) => (
                    <Box
                        key={data?.productId}
                        w="calc(25% - 1.5rem)"
                        mb={"3rem"}
                    >
                        <Goods
                            id={data?.productId}
                            // profile = {data?.profile}
                            img={data?.imgSrc}
                            title={data?.productName}
                            price={data?.price}
                        />
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}

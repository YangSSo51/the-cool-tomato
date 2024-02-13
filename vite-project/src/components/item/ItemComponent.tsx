import { useEffect, useState } from "react";
import { ItemListFetch } from "../../api/Itemlist";
import { Box, Flex, Text } from "@chakra-ui/react";
import Goods from "./ItemListComponent";
import { useParams } from "react-router-dom";
import { ItemWholeFetchInterface } from "../../types/DataTypes";

export default function ItemComponent() {
    const [dummylist, setDummylist] = useState<Array<ItemWholeFetchInterface> | undefined>();
    const { currentpage } = useParams() as { currentpage: string };

    useEffect(() => {
        ItemListFetch({ page: Number(currentpage), size: 16 }).then(
            (res) => {
                setDummylist(res.list);
            }
        );
    }, [currentpage]);
    
    return (
        <Flex direction={"column"} width={"100%"}>
            <Box p={"1rem"} mb={"1rem"}>
                <Text textAlign={"right"}>카테고리 항목</Text>
            </Box>
            <Flex wrap="wrap" gap={"2rem"} w={"100%"} justifyContent={"space-between"}>
                {dummylist?.map((data : ItemWholeFetchInterface | undefined) => (
                    <Flex
                        key={data?.productId}
                        w="calc(25% - 2rem)"
                        mb={"3rem"}
                        justifyContent={"center"}
                    >
                        <Goods
                            id={data?.productId}
                            profile = {data?.sellerProfile}
                            img={data?.imgSrc}
                            title={data?.productName}
                            price={data?.price}
                        />
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}

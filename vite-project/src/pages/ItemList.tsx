import { Box, Flex } from "@chakra-ui/react";
import Goods from "../components/item/ItemListComponent";
import GoodsList from "../components/item/dummylist/dummy";

export default function ItemList() {
    const dummylist = GoodsList;
    return (
        <>
        <Flex maxW={"100%"}>

        </Flex>
            <Flex wrap="wrap" maxW="1280px" m="auto" gap={6}>
                {dummylist.map((data) => (
                    <Box key={data.id} w="calc(23.33%)" p={4}>
                        <Goods
                            img={data.img}
                            title={data.title}
                            price={data.price}
                        />
                    </Box>
                ))}
            </Flex>
        </>
    );
}

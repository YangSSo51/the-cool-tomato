import { Box, Flex, Text } from "@chakra-ui/react";
import Goods from "../components/item/ItemListComponent";
import GoodsList from "../components/item/dummylist/dummy";
import "../css/ItemListComponentcss.css";
import CarouselComponent from "../components/common/CarouselComponent";

export default function ItemList() {
    const dummylist = GoodsList;

    return (
        <>
            <CarouselComponent />

            <Box width={"90%"}><Text textAlign={"right"}>카테고리 항목</Text></Box>
            <Flex wrap="wrap" maxW="85%" m="auto" gap={8}>
                {dummylist.map((data) => (
                    <Box key={data.id} w="calc(23.33%)" p={4}>
                        <Goods
                            id={data.id}
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

import { Box, Flex } from "@chakra-ui/react";
import Goods from "../components/item/ItemListComponent";
import GoodsList from "../components/item/dummylist/dummy";
import CarouselComponent from "../components/item/CarousuelComponent";
import "../css/ItemListComponentcss.css";

export default function ItemList() {
    const dummylist = GoodsList;
    return (
        <>
            <Flex
                justify={"center"}
                className="MainText"
                color={"themeGreen.500"}
            >
                현재 진행중인 라이브
            </Flex>
            <CarouselComponent />
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

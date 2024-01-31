import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Goods from "../components/item/ItemListComponent";
import GoodsList from "../components/item/dummylist/dummy";
import "../css/ItemListComponentcss.css";
import { Category } from '../api/Itemlist'
import { ItemListDetailFetch } from '../api/Itemlist'

export default function ItemList() {
    const dummylist = GoodsList;

    console.log(Category())
    console.log(ItemListDetailFetch({id:13}))

    return (
        <Container maxW={"80vw"} centerContent>
            <Flex direction={"column"}>
                <Box p={"1rem"} mb={"1rem"}>
                    <Text textAlign={"right"}>카테고리 항목</Text>
                </Box>
                <Flex wrap="wrap" justifyContent="center" gap={"2rem"}>
                    {dummylist.map((data) => (
                        <Box key={data.id} w="calc(25% - 1.5rem)" mb={"3rem"}>
                            <Goods
                                id={data.id}
                                img={data.img}
                                title={data.title}
                                price={data.price}
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Container>
    );
}

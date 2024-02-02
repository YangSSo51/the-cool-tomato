import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Goods from "../components/item/ItemListComponent";
import "../css/ItemListComponentcss.css";
import { ItemDetailDelete, ItemListFetch } from '../api/Itemlist'
import { useEffect, useState } from "react";


export default function ItemList() {
    const [dummylist, setDummylist] = useState([])

    useEffect(() => {
        ItemListFetch({page: 0, size: 10}).then((res) => {setDummylist(res)})
    }, [])

    // const onDelete = (targetId : number) => {
    //     ItemDetailDelete(targetId)
    // }

    // onClick={() => onDelete(data.productId)}

    return (
        <Container maxW={"80vw"} centerContent>
            <Flex direction={"column"}>
                <Box p={"1rem"} mb={"1rem"}>
                    <Text textAlign={"right"}>카테고리 항목</Text>
                </Box>
                <Flex wrap="wrap" justifyContent="center" gap={"2rem"}>
                    {dummylist.map((data) => (
                        <Box key={data.productId} w="calc(25% - 1.5rem)" mb={"3rem"}>
                            <Goods
                                id={data.productId}
                                img={data.img}
                                title={data.productName}
                                price={data.price}
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Container>
    );
}

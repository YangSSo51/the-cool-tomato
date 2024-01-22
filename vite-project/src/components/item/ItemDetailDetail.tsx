import { useParams } from "react-router-dom";
import Goodslist from "./dummylist/dummy"
import { Box, Image, Text } from "@chakra-ui/react";

export default function ItemDetailDetail() {
    const Goods = Goodslist;
    const { id } = useParams()
    type id = number;

    return (
        <>
        <Box maxW={"30rem"} padding={"3rem"}>
            <Image src={Goods[id].img} />
        </Box>
        <Text p={"3rem"}>{Goods[id].content}</Text>
        </>
    )
}
import { useParams } from "react-router-dom";
import Goodslist from "./dummylist/dummy";
import { Box, Image, Text } from "@chakra-ui/react";

export default function ItemDetailDetail() {
    const Goods = Goodslist;
    const { id } = useParams() as { id: string };
    const num = Number(id);

    const MoveTop = () => {
        window.scrollTo({ top: 0 })
    }
    MoveTop()

    return (
        <>
            <Box maxW={"30rem"} padding={"3rem"}>
                <Image src={Goods[num].img} />
            </Box>
            <Text p={"3rem"}>{Goods[num].content}</Text>
        </>
    );
}

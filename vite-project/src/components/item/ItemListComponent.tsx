import { Avatar, Box, Center, Flex } from "@chakra-ui/react";
import "../../css/ItemListComponentcss.css";
import { Link } from "react-router-dom";

interface GoodsProps {
    id: number | undefined;
    img: string | undefined;
    title: string | undefined;
    price: number | undefined;
    // profile: string | undefined;
}

const Goods = ({ id, img, title, price }: GoodsProps) => {
    return (
        <Link to={`/v1/items/detail/${id}`}>
            <Box>
                <Box>
                    <Box maxW={"25rem"} className="img">
                        <img src={img}></img>
                    </Box>
                    <Flex mt={"0.5rem"}>
                        <Center>
                            <Avatar
                                size="md"
                                name="Ryan Florence"
                                src="https://bit.ly/ryan-florence"
                                mr={"1rem"}
                            />
                        </Center>

                        <Box>
                            <Box className="Text">
                                <Box className="TextTitle">{title}</Box>
                            </Box>
                            <Box className="tagWrap">{price}</Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Link>
    );
};

export default Goods;

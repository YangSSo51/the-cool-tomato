import { AspectRatio, Avatar, Box, Center, Flex, Image } from "@chakra-ui/react";
import "../../css/ItemListComponentcss.css";
import { Link } from "react-router-dom";

interface GoodsProps {
    id: number | undefined;
    img: string | undefined;
    title: string | undefined;
    price: number | undefined;
}

const Goods = ({ id, img, title, price }: GoodsProps) => {
    return (
        <Link to={`/v1/items/detail/${id}`}>
            <Box>
                <Box>
                    <Box maxW={"25rem"}>
                        <AspectRatio w='256px' ratio={1 / 1}>
                            <Image
                                src={img}
                                aspectRatio="1/1"
                                objectFit="cover"
                                overflow={"hidden"}
                                position={"relative"}
                                borderRadius={"20px"}
                            />
                        </AspectRatio>
                    </Box>
                    <Flex mt={"0.5rem"}>
                        <Center>
                            <Avatar
                                size="md"
                                name="Ryan Florence"
                                // src={profile}
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

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import dummy from "../../components/item/dummylist/dummy";
import BuyerLiveItem from "./BuyerLiveItem";

export default function BuyerItem() {
    const dummylist = dummy;

    return (
        <>
            <Flex direction={"column"}>
                
                <Center p={"3px"}>
                    <Text as={"b"} fontSize={"lg"}>
                        라이브 특별 가격!
                    </Text>
                </Center>
                <Box p={"0.5rem"}>
                    {dummylist.map((data) => (
                        <BuyerLiveItem
                            id={data.id}
                            img={data.img}
                            title={data.title}
                            price={data.price}
                        />
                    ))}
                </Box>
            </Flex>
        </>
    );
}

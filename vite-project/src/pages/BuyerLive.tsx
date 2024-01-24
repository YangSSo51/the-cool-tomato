import { Box, Center, Flex } from "@chakra-ui/react";

import BuyerItem from "../components/live/BuyerItem";
import BuyerChat from "../components/live/BuyerChat";

import { CiHeart } from "react-icons/ci";
import { Icon } from "@chakra-ui/react";

function UnfilledHeart() {
    return <Icon as={CiHeart} boxSize={"3rem"} ml={"3px"} mb={"3px"} />;
}

export default function BuyerLive() {
    return (
        <>
            <Flex direction={"column"}>
                <Center mt={"1rem"} p={"1rem"}>
                    <Box w={"60%"} border={"1px"} h={"2rem"}>
                        (로고)
                    </Box>
                </Center>
                <Flex
                    direction={"row"}
                    justify={"center"}
                    h={"80vh"}
                    p={"1.5rem"}
                >
                    <Box
                        border={"1px"}
                        w={"md"}
                        borderWidth={"1px"}
                        borderRadius={"20px"}
                    >
                        <Center>라이브 화면</Center>
                    </Box>
                    <Flex direction={"column"} alignSelf={"flex-end"}>
                        <UnfilledHeart />
                    </Flex>
                    <Flex direction={"column"} ml={"2rem"}>
                        <Box
                            border={"1px"}
                            w={"xs"}
                            borderWidth={"1px"}
                            h={"50%"}
                            borderRadius={"20px"}
                            overflowY={"auto"}
                        >
                            <BuyerItem></BuyerItem>
                        </Box>
                        <Box
                            border={"1px"}
                            w={"xs"}
                            borderWidth={"1px"}
                            h={"50%"}
                            borderRadius={"20px"}
                            mt={"1rem"}
                        >
                            <BuyerChat></BuyerChat>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

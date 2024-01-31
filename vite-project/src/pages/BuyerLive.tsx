import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";

import BuyerItem from "../components/live/BuyerItem";
import BuyerChat from "../components/live/BuyerChat";

import { CiHeart } from "react-icons/ci";
import { Icon } from "@chakra-ui/react";
import BuyerLiveNav from "../components/common/BuyerLiveNav";

import OpenViduComponent from "../components/openvidu/OpenViduComponent";

function UnfilledHeart() {
    return <Icon as={CiHeart} boxSize={"3rem"} ml={"3px"} mb={"3px"} />;
}

export default function BuyerLive() {
    return (
        <>
            <BuyerLiveNav />
            <Flex direction={"column"} backgroundColor={"themeWhite.500"}>
                <Center mt={"1rem"} p={"1rem"}>
                    <Flex
                        w={"60%"}
                        h={"2rem"}
                        direction={"row"}
                        alignItems={"center"}
                    >
                        <Avatar bg="teal.500" />
                        <Text ml={"1rem"} as={"b"} fontSize={"xl"}>
                            성실한 판매자 2222{" "}
                        </Text>
                    </Flex>
                </Center>
                <Flex
                    direction={"row"}
                    justify={"center"}
                    h={"90vh"}
                    p={"2rem"}
                >
                    <Box
                        w={"lg"}
                        borderRadius={"20px"}
                        backgroundColor={"#ffffff"}
                    >
                        <OpenViduComponent type="live" />
                    </Box>
                    <Flex direction={"column"} alignSelf={"flex-end"}>
                        <UnfilledHeart />
                    </Flex>
                    <Flex direction={"column"} ml={"2rem"}>
                        <Box
                            w={"sm"}
                            h={"50%"}
                            overflowY={"auto"}
                            backgroundColor={"#ffffff"}
                            borderRadius={"20px"}
                        >
                            <BuyerItem />
                        </Box>
                        <Box
                            w={"sm"}
                            backgroundColor={"#ffffff"}
                            h={"50%"}
                            borderRadius={"20px"}
                            mt={"1rem"}
                        >
                            <BuyerChat />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

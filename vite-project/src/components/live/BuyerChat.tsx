import { Box, Center, Flex, Text } from "@chakra-ui/react";

export default function BuyerChat() {
    return (
        <>
            <Flex direction={"column"} h={"100%"} p={"1rem"}>
                <Center>
                    <Text as={"b"} fontSize={"lg"}>
                        실시간 채팅
                    </Text>
                </Center>
                <Flex
                    flex="1"
                    direction={"column"}
                    overflowY={"auto"}
                    pt={"1rem"}
                >
                    채팅 화면
                </Flex>
                <Box border={"1px"}>채팅창</Box>
            </Flex>
        </>
    );
}

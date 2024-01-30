import { Center, Divider, Flex, Input, Text } from "@chakra-ui/react";

export default function BuyerChat() {
    return (
        <>
            <Flex direction={"column"} h={"100%"} p={"1rem"}>
                <Center>
                    <Text as={"b"} fontSize={"2xl"}>
                        실시간 채팅
                    </Text>
                </Center>
                <Divider></Divider>
                <Flex
                    flex="1"
                    direction={"column"}
                    overflowY={"auto"}
                    pt={"1rem"}
                >
                    채팅 화면
                </Flex>
                <Input variant='filled' placeholder='채팅을 입력해주세요' />
            </Flex>
        </>
    );
}

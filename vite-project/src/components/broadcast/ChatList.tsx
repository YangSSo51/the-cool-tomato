import { Flex, Text, Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function ChatList() {
    return (
        <>
        <Flex alignItems="center" justifyContent="space-between" w="100%" my="4" mx="auto" borderRadius="1rem" flexDirection="column">
            <Flex justifyContent="space-between" w="full">
            <Box>
                <Button mr="1">
                    ❌
                </Button>
                <Button mr="1">
                    ❓
                </Button>
            </Box>
            <Flex alignItems="center">
                <Avatar my="1" mx="1" size="xs" bg="gray.200" />
                <Text ml="2">별명1</Text>
            </Flex>
            </Flex>
            <Text>고구마.너무.맛있어보여요. 근데 유기농 땅에서 자란 거맞지요? 저희집 애가.까딸스러워서~ 입안에 넣으면 ,흙이 좋읁 지아닌지두.바로알더라구요.ㅎ</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" w="100%" my="4" mx="auto" borderRadius="1rem">
            <Button mr="1">
                삭제
            </Button>
            <Button mr="1">
                차단
            </Button>
            <Avatar my="1" mx="1" size="xs" bg="gray.200" />
            <Text>별명2</Text>
            <Text>웹소켓 연동해서 하는듯 API 안보여서 대충쓰자요</Text>
        </Flex>
        </>
    )
}

export default ChatList
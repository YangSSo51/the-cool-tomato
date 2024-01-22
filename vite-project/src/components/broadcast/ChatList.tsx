import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function ChatList() {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" w="100%" my="4" mx="auto" borderRadius="1rem">
            <Button mr="4">
                삭제
            </Button>
            <Button mr="4">
                차단
            </Button>
            <Avatar my="4" mx="4" size="2xl" bg="gray.200" />
            <Flex alignItems="center">
                <Flex flexDirection="column">
                    <Text fontSize="1.5rem" mb="4">호철이의 블록체인 교실</Text>
                    <Text fontSize="1.1rem">10:00 ~ 12:00</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ChatList
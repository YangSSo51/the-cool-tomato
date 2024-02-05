import { Box, Text, Flex } from "@chakra-ui/layout";
import ChatList from "./ChatList";

function Chat() {
    return (
        <Box w={"33%"} borderLeft="1px" overflow="auto" p={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                채팅
            </Text>
            <Flex
                bg="gray.200"
                rounded="md"
                h="84vh"
                flexDirection="column"
                justifyContent="end"
            >
                <ChatList />
            </Flex>
        </Box>
    );
}

export default Chat;

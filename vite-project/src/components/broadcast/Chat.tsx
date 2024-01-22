import { Box, Text } from "@chakra-ui/layout";
import ChatList from "./ChatList";

function Chat() {
  return (
    <Box w="80" borderLeft="1px" overflow="auto" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        채팅
      </Text>
      <Box bg="gray.200" rounded="md" h="84vh">
            <ChatList />
      </Box>
    </Box>
  );
}

export default Chat;

// Chat.js
import { Box, Text } from "@chakra-ui/layout";

function Chat() {
  return (
    <Box w="80" borderLeft="1px" overflow="auto" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Chat
      </Text>
      <Box bg="gray.200" rounded="md" h="full" />
    </Box>
  );
}

export default Chat;

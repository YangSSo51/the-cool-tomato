// BroadcastScreen.js
import { Box, Text } from "@chakra-ui/layout";

function BroadcastScreen() {
  return (
    <Box flex="1" overflow="auto" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        방송화면
      </Text>
      <Box bg="gray.200" rounded="md" h="84vh" />
    </Box>
  );
}

export default BroadcastScreen;

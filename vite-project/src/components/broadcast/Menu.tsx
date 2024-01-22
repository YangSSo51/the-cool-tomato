// Menu.js
import { Box, Text, Button } from "@chakra-ui/react";

function Menu() {
  return (
    <Box w="80" borderLeft="1px" overflow="auto" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Menu
      </Text>
      <Box>
        <ul className="space-y-2">
          <li>
            <Button>Feedback</Button>
          </li>
          {/* 다른 메뉴 버튼들 */}
        </ul>
      </Box>
    </Box>
  );
}

export default Menu;

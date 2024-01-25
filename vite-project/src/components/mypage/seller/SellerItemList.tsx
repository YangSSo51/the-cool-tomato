import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import ItemsofItems from "./SellerItemsofItems";


function Items() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Text>내가등록한판매할상품</Text>
            <Button colorScheme='yellow'>상품등록</Button>
            <ItemsofItems />
        </Box>
    )
}

export default Items

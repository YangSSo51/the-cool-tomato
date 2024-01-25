import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import ItemsofItems from "./SellerItemsofItems";


function Items() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Button colorScheme='yellow'>상품등록</Button>
            <ItemsofItems />
        </Box>
    )
}

export default Items

import { Box } from "@chakra-ui/layout";
import LiveItems from "./SellerLiveItems";

function LiveList() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <LiveItems />
            <LiveItems />
            <LiveItems />
            <LiveItems />
            <LiveItems />
            <LiveItems />
        </Box>
    )
}

export default LiveList
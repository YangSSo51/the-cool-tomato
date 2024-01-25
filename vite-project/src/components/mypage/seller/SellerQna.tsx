import { Box, Text } from "@chakra-ui/layout";
import QnaItems from "./SellerQnaItems";

function Qna() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Text>받은 문의를 확인하세용!!!!!!!!!!!!!!!!!</Text>
            <QnaItems />
        </Box>
    )
}

export default Qna
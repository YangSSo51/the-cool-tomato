import { Box, Heading } from "@chakra-ui/layout";
import BuyerQnaItems from "./BuyerQuestionItems";

export default function Question() {

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Heading>문의한 내역이 없습니다.</Heading>
            <BuyerQnaItems />
        </Box>

    )
}

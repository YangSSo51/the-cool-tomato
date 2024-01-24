import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import PlanItems from "./SellerPlanItems";

function PlanList() {
    return (
        <>
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Flex>
                <Button leftIcon={<CalendarIcon />} size="sm" colorScheme='red' variant='solid'>
                    라이브등록
                </Button>
                <Text>예약라이브는 최대 5개까지 등록할 수 있습니다</Text>
            </Flex>
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
            <PlanItems />
        </Box>
        </>
    )
}

export default PlanList
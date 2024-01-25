import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import PlanItems from "./SellerPlanItems";

function PlanList() {
    const navigate = useNavigate();
    return (
        <>
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Flex>
                <Button leftIcon={<CalendarIcon />} mb="2" size="sm" colorScheme='red' variant='solid'
                onClick={() => {
                    navigate("/v1/live/form");
                }}>
                    라이브등록
                </Button>
                <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        mt="2"
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >예약라이브는 최대 5개까지 등록할 수 있습니다
                    </Box>
            </Flex>
            <PlanItems />

        </Box>
        </>
    )
}

export default PlanList
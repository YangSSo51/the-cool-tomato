import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PlanItems from "./SellerPlanItems";

function PlanList() {
    const navigate = useNavigate();
    // const [ livePlans, setLivePlans ] = useState([]);
    const [ livePlans ] = useState([]);

    useEffect(() => {
        // const response = PlanItems();
        // setLivePlans(plans);
    }, []);

    const liveplanData = livePlans.map((item, index) => (
        // <PlanItems key={index} plans={item} />
        <PlanItems key={index} />
    ));

    return (
        <>
        <Box flexDirection="column" w="90%" h="full" mb="10">
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
            {liveplanData.length ? liveplanData : 
                <Flex mt="20" flexDir="column">
                    <Text fontSize='5xl' color="gray.500" mb="5">등록된 라이브 예약이 없습니다!</Text>
                    <Button colorScheme="themeGreen" onClick={() => navigate("/v1/live/form")}>라이브 예약하러 가기</Button>
                </Flex>
            }
        </Box>
        </>
    )
}

export default PlanList
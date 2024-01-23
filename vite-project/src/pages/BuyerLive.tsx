import { Box, Flex } from '@chakra-ui/react'

import BuyerItem from '../components/live/BuyerItem'
import BuyerChat from '../components/live/BuyerChat'

export default function BuyerLive() {
    return (
        <>
        <Box>김면지</Box>
            <Flex direction={"row"} justify={"center"} h={"80vh"} p={"1.5rem"}>
                <Box border={"1px"} w={'md'} borderWidth={"1px"} borderRadius={"20px"}>
                    라이브 화면
                </Box>
                <Flex direction={"column"} ml={"1rem"}>
                    <Box border={"1px"} w={'xs'} borderWidth={"1px"} h={"50%"} borderRadius={"20px"}>
                    <BuyerItem></BuyerItem>
                </Box>
                    <Box border={"1px"} w={'xs'} borderWidth={"1px"} h={"50%"} borderRadius={"20px"} mt={"1rem"}>
                        <BuyerChat></BuyerChat>
                    </Box>
                    </Flex>

            </Flex>
        </>
    )
}
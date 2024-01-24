import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function LiveItems() {
    return (
        <>
        <Box display="flex" alignItems="center" justifyContent="space-between" w="100%" my="4" mx="auto" border="5px solid gray" borderRadius="1rem" boxShadow="2px 2px 2px gray">
            <Flex alignItems="center">
                <Avatar my="4" mx="4" size="2xl" bg="gray.200" />
                <Flex flexDirection="column">
                    <Text fontSize="1.5rem" mb="4">현종아조씨의 비밀스러운 고구마</Text>
                    <Text fontSize="1.1rem">방송시간 10:00 ~ 12:00</Text>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >시청수 9.3만 하트수 8만
                    </Box>
                </Flex>
            </Flex>
            <Button mr="4">
                바로가기
            </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" w="100%" my="4" mx="auto" border="5px solid gray" borderRadius="1rem" boxShadow="2px 2px 2px gray">
            <Flex alignItems="center">
                <Avatar my="4" mx="4" size="2xl" bg="gray.200" />
                <Flex flexDirection="column">
                    <Text fontSize="1.5rem" mb="4">호철이의 블록체인 교실</Text>
                    <Text fontSize="1.1rem">10:00 ~ 12:00</Text>
                </Flex>
            </Flex>
            <Button mr="4">
                바로가기
            </Button>
        </Box>
        </>
    )
}

export default LiveItems
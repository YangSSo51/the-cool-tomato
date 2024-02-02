import { Box, Text, Flex } from "@chakra-ui/layout";
import { Avatar, Badge } from "@chakra-ui/react";

function BanUser() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <Text>차단차단</Text>
            <Flex>
                <Avatar src='https://bit.ly/sage-adebayo' />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                    Segun Adebayo
                    <Badge ml='1' colorScheme='green'>
                        New
                    </Badge>
                    </Text>
                    <Text fontSize='sm'>UI Engineer</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default BanUser

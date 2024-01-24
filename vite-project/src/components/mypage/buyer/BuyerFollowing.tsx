import { Box, Heading, Text, Flex, Badge } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";

export default function Following() {

    return (
        <Box w="75%" bg="white" rounded="lg" overflow="hidden">
            <Box h="full" pl={4}>
                <Box h="full" flexDir="column" p={4}>
                    <Heading size="lg" fontWeight="bold" mb={4}>
                    팔로잉 목록
                    </Heading>

                    {Array.from({ length: 3 }).map((_, index) => (
                    <Box key={index} w="full" borderBottom="1px" pb={4} mb={4} >
                        <Avatar mt="4" size="xl" src="https://raw.githubusercontent.com/printilikepenguin/forUserContent/master/profile.png" />
                        <Box>
                        <Text color="gray.700" fontWeight="medium">
                            userId{index + 1}
                        </Text>
                        <Text color="gray.500">nickname{index + 1}</Text>
                        </Box>
                    </Box>
                    ))}
                    
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
            </Box>
        </Box>
    )
}
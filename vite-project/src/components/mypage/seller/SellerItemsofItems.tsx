import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar, Button, Card, Image, Stack, CardBody, Heading, CardFooter } from "@chakra-ui/react";

function ItemsofItems() {
    return (
        <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>The perfect latte</Heading>

                <Text py='2'>
                    Caffè latte is a coffee beverage of Italian origin made with espresso
                    and steamed milk.
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Buy Latte
                </Button>
                </CardFooter>
            </Stack>
        </Card>
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
        </>
    )
}

export default ItemsofItems


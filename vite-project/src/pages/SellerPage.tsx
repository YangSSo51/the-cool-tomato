import { Button } from "@chakra-ui/react";
import { Box, Flex, Text, Center } from "@chakra-ui/layout";
import { Avatar, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function SellerPage() {
    let navigate = useNavigate()

    return (
        <Box bg="#C1D8B5" minH="100vh">

            <Box>
                <Center>
                    판매자 마이페이지
                </Center>
            </Box>

        <Flex m="auto" bg="black" rounded="lg" w="90vw" minH="90vh">
            <Flex m="auto" bg="blue" rounded="lg" w="80vw" minH="80vh" px="2">

                <Box w="25%" pr="4">

                <Box w="full" bg="white" rounded="lg" overflow="hidden">
                    <Flex direction="column" align="center" py="6">

                    <Button onClick={()=>{ navigate('/v1/buyer') }}>
                        구매자 정보 보기
                    </Button>

                    <Avatar mt="4" size="xl" bg="gray.200" />

                    <Button mt="4" variant="outline">
                        계정정보수정
                    </Button>

                    <Box w="full"  mt="6" pt="6">
                        <List spacing="4">
                        <ListItem>
                            예고한 라이브
                        </ListItem>
                        <ListItem>
                            완료한 라이브
                        </ListItem>
                        <ListItem>
                            상품 목록
                        </ListItem>
                        <ListItem>
                            상품 문의 확인
                        </ListItem>
                        <ListItem>
                            차단한 사용자 목록
                        </ListItem>
                        <ListItem>
                            챗봇 설정
                        </ListItem>
                        <ListItem>
                            금지어 설정
                        </ListItem>
                        </List>
                    </Box>

                    </Flex>
                </Box>
                </Box>
                
                <Box w="75%" bg="white" rounded="lg" overflow="hidden">
                <Box h="full" pl="4">
                    <Flex justify="center" align="center" h="full">
                    <Text color="gray.400">Content goes here</Text>
                    </Flex>
                </Box>
                </Box>
            </Flex>

        </Flex>
        </Box>
  );
}

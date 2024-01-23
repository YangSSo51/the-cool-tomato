import { Button } from "@chakra-ui/react";
import { Box, Flex, Text, Center } from "@chakra-ui/layout";
import { Avatar, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UserinfoPage() {
    let navigate = useNavigate()


  return (
    <Box bg="#126F54" minH="100vh">

        <Box>
            <Center>
                마이페이지
            </Center>
        </Box>

      <Flex m="auto" bg="black" w="90vw" minH="80vh">
        <Flex m="auto" bg="blue" w="80vw" px="2">

            <Box w="25%" pr="4">

              <Box w="full" bg="white" rounded="lg" overflow="hidden">
                <Flex direction="column" align="center" py="6">

                <Button onClick={()=>{ navigate('/v1/seller') }}>
                    판매자 정보 보기
                  </Button>

                  <Avatar size="xl" bg="gray.200" />

                  <Button mt="4" variant="outline">
                    계정정보수정
                  </Button>

                  <Box w="full"  mt="6" pt="6">
                    <List spacing="4">
                      <ListItem>
                        최근 본 상품
                      </ListItem>
                      <ListItem>
                        팔로잉 목록
                      </ListItem>
                      <ListItem>
                        작성 가능한 리뷰
                      </ListItem>
                      <ListItem>
                        작성한 리뷰
                      </ListItem>
                      <ListItem>
                        내가 한 문의
                      </ListItem>
                      <ListItem>
                        판매자 신청
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

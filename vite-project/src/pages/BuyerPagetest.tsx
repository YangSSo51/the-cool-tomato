import { Button } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar, Divider, List, ListItem } from "@chakra-ui/react";

export default function BuyerPagetest() {
  return (
    <Box bg="#126F54" minH="100vh">
      <Flex>
        <Box maxW="4xl" mx="auto" px="4">
          <Flex>
            <Box w="1/4" pr="4">
              <Box w="full" bg="white" rounded="lg" overflow="hidden">
                <Flex direction="column" align="center" py="6">
                  <Avatar size="xl" bg="gray.200" />

                  <Button mt="4" variant="outline">
                    계정정보수정
                  </Button>

                  <Box w="full"  mt="6" pt="6">
                    <List spacing="4">
                      <ListItem color="gray.700" fontWeight="medium">
                        최근 본 상품
                      </ListItem>
                      <ListItem color="gray.700" fontWeight="medium">
                        팔로잉 목록
                      </ListItem>
                      <ListItem color="gray.700" fontWeight="medium">
                        작성 가능한 리뷰
                      </ListItem>
                      <ListItem color="gray.700" fontWeight="medium">
                        작성한 리뷰
                      </ListItem>
                      <ListItem color="gray.700" fontWeight="medium">
                        내가 한 문의
                      </ListItem>
                      <ListItem color="gray.700" fontWeight="medium">
                        판매자 신청
                      </ListItem>
                    </List>
                  </Box>
                </Flex>
              </Box>
            </Box>
            
            <Box w="3/4" bg="white" rounded="lg" overflow="hidden">
              <Box h="full" pl="4">
                <Flex justify="center" align="center" h="full">
                  <Text color="gray.400">Content goes here</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>

        </Box>
      </Flex>
    </Box>
  );
}

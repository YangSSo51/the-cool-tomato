import { Box, Flex, Center } from "@chakra-ui/layout";
import { Avatar, Button, List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import PlanList from "../components/mypage/SellerPlanList"
import "../css/SellerPage.css"


export default function SellerPage() {
    const navigate = useNavigate()
    // 여기부터
    const [ categories, setCategories ] = useState([
        {
            title: "예고한 라이브",
            isSelected: false
        },
        {
            title: "완료한 라이브", 
            isSelected: false
        },
        {
            title: "상품 목록",
            isSelected: false
        },
        {
            title: "상품 문의 확인",
            isSelected: false
        },
        {
            title: "차단한 사용자 목록",
            isSelected: false
        },
        {
            title: "챗봇 설정",
            isSelected: false
        },
        {
            title: "금지어 설정",
            isSelected: false
        },
    ])
    const changeSelect = (e) => {
        setCategories(categories.map((item, index) => {
            return {
              ...item,
              isSelected: e.target.value == index,
            };
          })
        );
    }
    const categoryList = categories.map((item, index) => {
        return (
            <ListItem key={index} value={index} padding=".5rem 1rem" cursor="pointer" className={item.isSelected ? "active" : null} onClick={(e) => changeSelect(e)}>{item.title}</ListItem>
        )
    })
    // 여기까지
    return (
        <Box bg="#C1D8B5" minH="100vh" paddingBlock="6rem">
            <Box>
                <Center style={{ fontSize: "6rem", fontFamily: "GmkBold"}}>
                    판매자 마이페이지
                </Center>
            </Box>

        <Flex m="auto"  rounded="lg" w="90vw" minH="90vh">
            <Flex m="auto" rounded="lg" w="80vw" maxH="80vh" px="2">
                <Box w="25%" pr="4">
                <Box w="full" bg="white" rounded="lg" overflow="hidden">
                    <Flex direction="column" align="center" py="6">
                    <Button mb="4" onClick={()=>{ navigate('/v1/buyer') }} minW="70%" fontSize="1.2em" boxShadow="2px 2px 2px gray">
                        구매자 정보 보기
                    </Button>
                    <Avatar my="4" size="2xl" bg="gray.200" />
                    <Button mt="4" variant="outline" minW="70%" fontSize="1.2em" boxShadow="2px 2px 2px gray">
                        계정정보수정
                    </Button>

                    {/* <Button
                        onClick={() => {
                        navigate("/v1/seller/" + {userId});
                        }}
                    >판매자 정보 보기
                    </Button>

                    {userInfo ? <Avatar mt="4" size="xl" src={userInfo.profile_img} /> : 로딩중 }

                    <Button
                        mt="4"
                        onClick={() => {
                        navigate("/v1/userinfo");
                        }}
                    >계정정보수정
                    </Button> */}

                    <Box w="full"  mt="6" pt="6">
                        <List spacing="4">
                            {/* 여기 바뀜 */}
                            {categoryList}
                        </List>
                    </Box>

                    </Flex>
                </Box>
                </Box>
                
                <Box w="75%" bg="white" rounded="lg" overflow="hidden">
                    <Box h="full" pl="4">
                        <Flex justify="center" align="center" h="full">
                        {/* <Text color="gray.400">Content goes here</Text> */}
                        <PlanList />
                        </Flex>
                    </Box>
                </Box>
            </Flex>

        </Flex>
        </Box>
  );
}

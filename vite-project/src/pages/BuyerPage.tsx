import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Center, Text } from "@chakra-ui/layout";
import { Button, Avatar, List, ListItem } from "@chakra-ui/react";
import axios from "axios";
import "../css/SellerPage.css"

// import { getUserInfoAPI } from '../api/user'

import Recent from "../components/mypage/buyer/BuyerRecent";
import Following from "../components/mypage/buyer/BuyerFollowing";
import Reviews from "../components/mypage/buyer/BuyerReviews";
import Reviewed from "../components/mypage/buyer/BuyerReviewed";
import Question from "../components/mypage/buyer/BuyerQuestion";
import Sellerform from "../components/mypage/Sellerform";

export default function BuyerPage() {

    const navigate = useNavigate();
    const { userId } = useParams();
    const [ userInfo, setUserInfo ] = useState([]);
    const [ tab, setTab ] = useState(0);
    const [ categoryTabs, setCategoryTabs ] = useState([
        { id: 0, isSelected: true , name: '최근 본 상품', component: <Recent userId={userId} /> },
        { id: 1, isSelected: false , name: '팔로잉 목록', component: <Following userId={userId} /> },
        { id: 2, isSelected: false , name: '작성 가능한 리뷰', component: <Reviews userId={userId} /> },
        { id: 3, isSelected: false , name: '작성한 리뷰', component: <Reviewed userId={userId} /> },
        { id: 4, isSelected: false , name: '내가 한 문의', component: <Question userId={userId} /> },
        { id: 5, isSelected: false , name: '판매자 신청', component: <Sellerform userId={userId} /> },
    ]);
    const changeSelect = (e) => {
        setTab(e.target.value)
        setCategoryTabs(categoryTabs.map((item, index) => {
            return {
              ...item,
              isSelected: e.target.value == index,
            };
          })
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1'
                // params: {
                    // "Content-Type": "application/json",
                    // "Authorization": ${ACCESS_TOKEN}
                // }
                );
            console.log(response.data)
            setUserInfo({...response.data, profile_img:"data:image/jpeg;base64,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" });
            console.log(userInfo)
            } catch (error) {
            console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box minH="100vh" mb="10" paddingBlock="6rem">

            <Center fontFamily="GmkBold" fontSize="6rem" color={"themeGreen.500"}>
                마이페이지
            </Center>

            <Flex m="auto" border="2px" borderColor="themeGreen.500" rounded="lg" w="85vw" minH="85vh">
                <Flex m="auto" rounded="lg" w="80vw" maxH="80vh" px="2">
                    <Box w="25%" pr="4">
                        <Box w="full" bg="white" rounded="lg" overflow="hidden">
                            <Flex direction="column" align="center" py="6">

                                <Button
                                    mb="4"
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
                                </Button>

                                <Box w="full" mt="6" pt="6">
                                    <List spacing="4">
                                    {categoryTabs.map((category) => (
                                        <ListItem
                                        key={category.id}
                                        value={category.id}
                                        padding=".5rem 1rem"
                                        className={category.isSelected ? "active" : null}
                                        onClick={(e) => changeSelect(e)}
                                        _hover={{ color: "themeRed.500", cursor:"pointer" }}
                                        _active={{ color: "themeRed.500", bg: "themeRed.100" }}
                                        >{category.name}
                                        </ListItem>
                                    ))}
                                    </List>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>

                    <Box w="75%" bg="white" rounded="lg" overflow="hidden">
                        <Box h="full" pl="4">
                            <Flex justify="center" align="center" h="full">
                            {categoryTabs[tab].component}
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

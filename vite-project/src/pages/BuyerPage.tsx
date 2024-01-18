import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Center } from "@chakra-ui/layout";
import { Button, Avatar, List, ListItem } from "@chakra-ui/react";
import axios from "axios";

import Recent from "../components/mypage/recent";
import Following from "../components/mypage/Following";
import Reviews from "../components/mypage/Reviews";
import Reviewed from "../components/mypage/Reviewed";
import Question from "../components/mypage/Question";
import Sellerform from "../components/mypage/Sellerform";

export default function BuyerPage() {

  const navigate = useNavigate();
  const { userId } = useParams();
  const [ userInfo, setUserInfo ] = useState([]);
  console.log(userInfo)
  const [ tab, setTab ] = useState(0);
  const categoryTabs = [
    { id: 0, name: '최근 본 상품', component: <Recent userId={userId} /> },
    { id: 1, name: '팔로잉 목록', component: <Following userId={userId} /> },
    { id: 2, name: '작성 가능한 리뷰', component: <Reviews userId={userId} /> },
    { id: 3, name: '작성한 리뷰', component: <Reviewed userId={userId} /> },
    { id: 4, name: '내가 한 문의', component: <Question userId={userId} /> },
    { id: 5, name: '판매자 신청', component: <Sellerform userId={userId} /> },
  ];

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(
                "https://raw.githubusercontent.com/printilikepenguin/forUserContent/master/user.json"
                // params: {
                    // "Content-Type": "application/json",
                    // "Authorization": ${ACCESS_TOKEN}
                // }
                );
            setUserInfo(response.data);
            console.log(response.data[0].profile_img)
            console.log(typeof(response.data))
            // console.log(JSON.stringify(userInfo, ['profile_img']))
            } catch (error) {
            console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);

  return (
    <Box bg="yellow" minH="100vh">
      <Box>
        <Center>마이페이지</Center>
      </Box>

      <Flex m="auto" bg="black" rounded="lg" w="90vw" minH="90vh">
        <Flex m="auto" bg="blue" rounded="lg" w="80vw" minH="80vh" px="2">
          <Box w="25%" pr="4">
            <Box w="full" bg="white" rounded="lg" overflow="hidden">
              <Flex direction="column" align="center" py="6">

                <Button
                  onClick={() => {
                    navigate("/v1/seller");
                  }}
                >판매자 정보 보기
                </Button>

                <Avatar mt="4" size="xl" src={JSON.stringify(userInfo, ['profile_img'])} />

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
                        onClick={() => setTab(category.id)}
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

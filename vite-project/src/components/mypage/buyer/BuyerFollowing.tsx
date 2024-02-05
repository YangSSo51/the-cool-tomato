import { Box, Text, Flex, Badge } from "@chakra-ui/layout";
import { Avatar, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getFollowingListAPI } from "../../../api/user";

export default function Following() {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const accessToken = user.accessToken;
    const [following, setFollowing] = useState([]);
    const followingData = following.map((item, index) => (
        <FollowingItem key={index} following={item} />
    ));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFollowingListAPI(accessToken)
                if (response.data.list) {
                  setFollowing(response.data.list)
                } else {
                  console.error('조회는 성공했는데 팔로잉 목록이 엄서용');
                  setFollowing([]);  // set to empty array as fallback
                }
            } catch (error) {
                console.error(error)
                setFollowing([]);  // set to empty array as fallback
            }
        };
        fetchData();
    }, [])
    

    function onclick() {
        navigate(`/v1/live/list`);
    }

    return (
        <Box flexDirection="column" w="90%" h="full" mb="10">
            <Flex flexDir="column" h="full" m="auto">
                    {followingData.length ? followingData : 
                        <Flex m="auto" flexDir="column">
                            <Text fontSize='5xl' color="gray.500" mb="5">팔로잉한 사람이 없습니다!</Text>
                            <Button colorScheme="themeGreen" onClick={onclick}>라이브 구경하러 가기</Button>
                        </Flex>
                    }                    
            </Flex>
        </Box>
    )
}

function FollowingItem(props) {
    return (
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
    );
}
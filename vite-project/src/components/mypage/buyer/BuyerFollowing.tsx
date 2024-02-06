import { Box, Text, Flex } from "@chakra-ui/layout";
import { Avatar, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getFollowingListAPI, unfollowSellerAPI } from "../../../api/user";
import { followerItem } from "../../../types/DataTypes";

export default function Following() {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const accessToken = user.accessToken;
    const [following, setFollowing] = useState([]);
    const followingData = following.map((item, index) => (
        <FollowingItem key={index} following={item} accessToken={accessToken} />
    ));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFollowingListAPI(accessToken)
                console.log(response.data)
                if (response.data.follow) {
                  setFollowing(response.data.follow)
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

function FollowingItem({following, accessToken} : {following: followerItem, accessToken: string}) {
    console.log(following)

    
    const onClickUnfollow = () => {
        unfollowSellerAPI(following.userId, accessToken).then((result) => {
            if (result === 1) {
                //이 팔로잉 목록을 삭제
            } else {
                // sellerId: number, alarmSetting: boolean, accessToken: string 
            }
        });
    };

    return (
        <Flex p="2" m="2" justifyContent="space-between">
            <Flex>
                <Avatar src={following.profileImg} />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                    {following.nickname}
                    </Text>
                    <Text fontSize='sm'>상메? ㅎ 없으니까 심심하냐</Text>
                </Box>
            </Flex>

            <Button onClick={onClickUnfollow} color="white" backgroundColor="themeGreen.500" _hover={{ backgroundColor: "white", color: "red" }}>
                팔로잉중</Button>
        </Flex>

    );
}
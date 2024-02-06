import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { followSellerAPI, unfollowSellerAPI } from "../../api/user";

export default function SellerHeader(props) {
    const user = useSelector((state: RootState) => state.user);
    const [following, setFollowing] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [followerCount, setFollowerCount] = useState(0);

    const onClickFollow = () => {
        followSellerAPI(props.sellerId, true, user.accessToken).then((result) => {
            if (result === 1) {
                setFollowing(true)
                setFollowerCount((followerCount) => followerCount + 1);
            } else {
                // sellerId: number, alarmSetting: boolean, accessToken: string 
            }
        });
    };

    const onClickUnfollow = () => {
        unfollowSellerAPI(props.sellerId, user.accessToken).then((result) => {
            if (result === 1) {
                setFollowing(false)
                setFollowerCount((followerCount) => followerCount - 1);
            } else {
                // sellerId: number, alarmSetting: boolean, accessToken: string 
            }
        });
    };

    useEffect(() => {
      if (props.sellerInfo.followerCount != 0) {
        setFollowerCount(props.sellerInfo.followerCount);
        setIsLoading(true);
      }
    }, []);

    console.log(props.sellerInfo.followerCount) // {}

    return (
        <>
            <Flex align="center" mb={4}>
                <Avatar size="xl" name="Username" src={props.sellerInfo.profileImg} />
                <Box ml={5} mr={10}>
                    <Text fontSize="xl" fontWeight="bold">
                        {props.sellerInfo.nickname}
                    </Text>
                </Box>
                <Box flex="1" textAlign="center" mr="5">
                    <Text fontWeight="bold">판매상품수</Text>
                    <Text>123</Text>
                </Box>
                <Box flex="1" textAlign="center" mr="5">
                    <Text fontWeight="bold">팔로워</Text>
                {
                    isLoading ?
                    <Text>{followerCount}</Text>
                    : 
                    <Text>{props.sellerInfo.followerCount} hello</Text>
                }
                    
                </Box>
                {
                    !following ? (
                    <Button onClick={onClickFollow} _hover={{ backgroundColor: "themeGreen.500", color: "white" }}>팔로우하기</Button>
                    ) : (
                    <Button onClick={onClickUnfollow} color="white" backgroundColor="themeGreen.500" _hover={{ backgroundColor: "white", color: "red" }}>팔로잉중</Button>    
                    )
                }
            </Flex>

            <Text color="gray.500">User Bio or Additional Info</Text>
        </>
    )
}

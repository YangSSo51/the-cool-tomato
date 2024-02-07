import { Flex, Box, Text, Button, Avatar } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { followSellerAPI, unfollowSellerAPI, checkFollowAPI } from "../../api/user";
import { SellerInfo } from "../../types/DataTypes";

export default function SellerHeader( { sellerId , sellerInfo, productsCount } : {sellerId : number, sellerInfo: SellerInfo, productsCount: number}) {
    const user = useSelector((state: RootState) => state.user);
    const count = productsCount
    const [ following, setFollowing ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ followerCount, setFollowerCount ] = useState(0);

    const onClickFollow = () => {
        followSellerAPI(sellerId, true, user.accessToken).then((result) => {
            if (result === 1) {
                setFollowing(true)
                setFollowerCount((followerCount) => followerCount + 1);
            } else {
                // sellerId: number, alarmSetting: boolean, accessToken: string 
            }
        });
    };

    const onClickUnfollow = () => {
        unfollowSellerAPI(sellerId, user.accessToken).then((result) => {
            if (result === 1) {
                setFollowing(false)
                setFollowerCount((followerCount) => followerCount - 1);
            } else {
                // sellerId: number, alarmSetting: boolean, accessToken: string 
            }
        });
    };

    useEffect(() => {
      if (sellerInfo.followerCount != 0) {
        setFollowerCount(sellerInfo.followerCount);
        setIsLoading(true);
      }
    }, []);

    // 초기에 팔로잉 여부 조회 함수: 왜안먹지?????
    useEffect(() => {
        checkFollowAPI(sellerId, user.accessToken).then((result) => {
            if (result === 1) {
                setFollowing(true)
            } else {
                setFollowing(false)
            }
        })
    }, [following])

    return (
        <>
            <Flex align="center" mb={4}>
                <Avatar size="xl" name="Username" src={sellerInfo.profileImg} />
                <Box ml={5} mr={10}>
                    <Text fontSize="3xl" fontWeight="bold">
                        {sellerInfo.nickname}
                    </Text>
                </Box>
                <Box flex="1" textAlign="center" mr="5" w="7rem">
                    <Text fontWeight="bold">판매상품수</Text>
                    <Text>{count}</Text>
                </Box>
                <Box flex="1" textAlign="center" mr="5">
                    <Text fontWeight="bold">팔로워</Text>
                {
                    isLoading ?
                    <Text>{followerCount}</Text>
                    : 
                    <Text>{sellerInfo.followerCount}</Text>
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

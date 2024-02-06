import { Box, Text, Flex } from "@chakra-ui/layout";
import { Avatar, Badge } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getFollowerListAPI } from "../../../api/user";
import { followerItem } from "../../../types/DataTypes";

function Followers() {
    const user = useSelector((state: RootState) => state.user);
    const [followerItem, setFollowerItem] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFollowerListAPI(user.accessToken)
                setFollowerItem(response.data.follow)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <Box flexDirection="column" w="90%" h="full">
            { followerItem && followerItem.map((item, index) => {
                return <FollowersItem key={index} followerItem={followerItem[index]} i={index} />
                })
            }
        </Box>
    )
}

export default Followers

function FollowersItem({ followerItem, i }: { followerItem: followerItem, i: number }) {
    console.log(followerItem)

    return (
        <Flex p="2" m="2">
            <Avatar src={followerItem.profileImg} />
            <Box ml='3'>
                <Text fontWeight='bold'>
                    {followerItem.nickname}
                    {i >= 0 && i <= 2 && (
                        <Badge ml='5' colorScheme='green'>
                            New
                        </Badge>
                    )}
                </Text>
            </Box>
        </Flex>
    )
}
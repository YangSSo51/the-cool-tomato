import { Box, Text, Flex } from "@chakra-ui/layout";
import { Avatar, Badge, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores/store";
import { getBlockUserAPI, deleteBlockUserAPI } from "../../../api/chatblock";
import { followerItem } from "../../../types/DataTypes";

function BanUser() {
    const accessToken = useSelector((state: RootState) => { return state.user.accessToken })
    const [ blockList, setBlockList ] = useState<Array<followerItem>>([])

    useEffect(() => {
        // const response = getBlockUserAPI(accessToken);
        // setBlockList(response)
        setBlockList([{
            "id": 1,
            "userId": 1,
            "loginId": "ssafy",
            "nickname": "김싸피",
            "profileImg": "${PROFILE_IMG_URL}"
    },
    {
            "id": 2,
            "userId": 2,
            "loginId": "ssafy2",
            "nickname": "김싸피2",
            "profileImg": "${PROFILE_IMG_URL}"
    }])
    }, [])

    const onClickUnBlock = (userId: number) => {
        deleteBlockUserAPI(userId, accessToken).then(() => {
            
        });
    };

    return (

        blockList.map((item) => (
            <Flex justifyContent="space-between" w="90%" h="full" key={item.id}>
                <Flex>
                    <Avatar src={item.profileImg} />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                        {item.nickname}
                        <Badge ml='1' colorScheme='green'>
                            New
                        </Badge>
                        </Text>
                    </Box>
                </Flex>
        
                <Button 
                    onClick={() => onClickUnBlock(item.userId)} 
                    color="white" 
                    backgroundColor="themeGreen.500" 
                    _hover={{ backgroundColor: "white", color: "red" }}>
                    차단해제
                </Button>
            </Flex>
            ))
    )
}

export default BanUser

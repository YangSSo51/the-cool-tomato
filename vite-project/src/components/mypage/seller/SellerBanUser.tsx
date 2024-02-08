import { Box, Text, Flex } from "@chakra-ui/layout";
import { Avatar, Badge, Button } from "@chakra-ui/react";

function BanUser() {

    // const onClickUnBan = () => {
    //     unfollowSellerAPI(following.userId, accessToken).then((result) => {
    //         if (result === 1) {
    //             updateFollowing(following.userId);
    //         } else {
    //             // sellerId: number, alarmSetting: boolean, accessToken: string 
    //         }
    //     });
    // };

    return (
        <Flex justifyContent="space-between" w="90%" h="full">
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

            <Button 
                // onClick={onClickUnBan} 
                color="white" 
                backgroundColor="themeGreen.500" 
                _hover={{ backgroundColor: "white", color: "red" }}>
                차단해제</Button>
        </Flex>
    )
}

export default BanUser

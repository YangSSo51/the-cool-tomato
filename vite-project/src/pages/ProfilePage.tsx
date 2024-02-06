import { Text, Button, Flex, Box, Image, Link, Grid, Center, Container, Avatar, useDisclosure } from "@chakra-ui/react";
import { FaCog, FaHeart, FaPaperPlane, FaComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSellerDetailAPI } from "../api/user";
import { useParams } from "react-router-dom";

function ProfilePage() {
    const { sellerId } = useParams<{ sellerId: string }>();
    const sellerIdNumber = parseInt(sellerId);
    console.log('sellerId:', typeof(sellerId));
    console.log('sellerIdNumber:', typeof(sellerIdNumber))

    const [sellerInfo, setSellerInfo] = useState([])
    const photos = [
        { id: 1, title: "Photo 1", src: "/path/to/photo1.jpg" },
        { id: 2, title: "Photo 2", src: "/path/to/photo2.jpg" },
        { id: 3, title: "Photo 3", src: "/path/to/photo3.jpg" },
        // ... 추가적인 사진 데이터 추가
      ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSellerDetailAPI(sellerIdNumber)
                setSellerInfo(response.data)
                console.log(response.data)
                console.log(sellerInfo)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, [])

    return (
        <>
            <Flex
                direction={"column"}
                p={"1rem"}
                alignItems={"center"}
                mt={"2rem"}
                mb={"2rem"}
                maxW={"100vw"}
            >
                <Flex align="center" mb={4}>
                    <Avatar size="xl" name="Username" src={sellerInfo.profileImg} />
                    <Box ml={5} mr={10}>
                        <Text fontSize="xl" fontWeight="bold">
                            {sellerInfo.nickname}
                        </Text>
                    </Box>
                    <Box flex="1" textAlign="center" mr="5">
                        <Text fontWeight="bold">판매상품</Text>
                        <Text>123</Text>
                    </Box>
                    <Box flex="1" textAlign="center" mr="5">
                        <Text fontWeight="bold">팔로워</Text>
                        <Text>456</Text>
                    </Box>
                    <Button>팔로우하기</Button>
                </Flex>
                
                <Text color="gray.500">User Bio or Additional Info</Text>

                <Grid templateColumns="repeat(3, 1fr)" gap={4} maxW="900px" mx="auto" mt={8}>
                {photos.map((photo) => (
                    <Box key={photo.id} position="relative">
                    <Image
                        src={photo.src}
                        alt={photo.title}
                        w="100%"
                        h="auto"
                        borderRadius="md"
                        transition="transform 0.3s"
                        _hover={{ transform: "scale(1.05)" }}
                    />
                    <Flex
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        align="center"
                        justify="center"
                        opacity={0}
                        transition="opacity 0.3s"
                        _hover={{ opacity: 1 }}
                    >
                        <Text color="white" fontWeight="bold">
                        {photo.title}
                        </Text>
                    </Flex>
                    </Box>
                ))}
                </Grid>
            </Flex>
        </>
    );
}

export default ProfilePage;

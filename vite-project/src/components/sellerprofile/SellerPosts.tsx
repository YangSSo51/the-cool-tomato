import { Flex, Box, Text, Grid, Image } from "@chakra-ui/react"

export default function SellerPosts() {
    const photos = [
        { id: 1, title: "Photo 1", src: "/path/to/photo1.jpg" },
        { id: 2, title: "Photo 2", src: "/path/to/photo2.jpg" },
        { id: 3, title: "Photo 3", src: "/path/to/photo3.jpg" },
        // ... 추가적인 사진 데이터 추가
      ];
    return (
        <>
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
        </>
    )
}

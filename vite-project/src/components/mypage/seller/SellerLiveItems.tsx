import { Box, Flex } from "@chakra-ui/layout";
import { Image, Badge, Button } from "@chakra-ui/react";


function LiveItems() {
    const LiveInfo = {
      imageUrl: 'https://www.vegannews.co.kr/data/photos/20230727/art_1688713002447_e60ce1.png',
      imageAlt: 'Rear view of modern home with pool',
      title: '병창농부의 특급 제안-소나무같은 브룩껄리',
      time: '2024.01.25 오후 8시 13분',
      viewers: 98150,
      Likes: 8512,
      reviewCount: 34,
      rating: 4,
    }
    return (
        <Flex justifyContent="space-between" alignItems="center" my="4" mx="auto" p="2" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex p="2">
                <Image mr="2" boxSize="100px" src={LiveInfo.imageUrl} alt={LiveInfo.imageAlt} />

                <Box ml="2" pt="4">
                    <Box display='flex' alignItems='baseline'>
                        <Badge colorScheme='green'>방송종료</Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                            >
                            시청자수 {LiveInfo.viewers} &bull; 하트수 {LiveInfo.Likes} 
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        >
                        {LiveInfo.title}
                    </Box>

                    <Box>
                        <Box as='span' color='gray.600' fontSize='sm'>
                            실제방송시작시간 / {LiveInfo.time}
                        </Box>
                    </Box>
                </Box>
            </Flex>

            <Button>
                데이터확인!
            </Button>
        </Flex>
    )
}

export default LiveItems
import { Box, Flex } from "@chakra-ui/layout";
import { Badge, Button } from "@chakra-ui/react";

interface broadcastInfo {
    liveBroadcastId: number;
    broadcastTitle: string;
    nickName: string;
    viewCount: number;
    sellerId: number;
    broadcastStatus: boolean;
}

function LiveItems({lives} : {lives: broadcastInfo}) {
    return (
        <Flex justifyContent="space-between" alignItems="center" my="4" mx="auto" p="2" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex p="2">

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
                            시청자수 {lives.viewCount}
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        >
                        {lives.broadcastTitle}
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
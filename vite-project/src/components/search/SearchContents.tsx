import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Card, CardBody, Tag, TagLabel } from "@chakra-ui/react";

interface searchtitleResults {
    liveBroadcastId: number;
    broadcastTitle: string;
    nickName: string;
    viewCount: number;
    sellerId: number;
    broadcastStatus: boolean;
}

interface searchsellerResults {
    liveBroadcastId: number;
    broadcastTitle: string;
    nickName: string;
    viewCount: number;
    sellerId: number;
    broadcastStatus: boolean;
}

export default function SearchContents({
    searchtitleResults,
    searchsellerResults
    }: {searchtitleResults: searchtitleResults[], searchsellerResults: searchsellerResults[]}) {

    return (
        <Box ml="10" mr="10" mb="15">
            <Tag size="lg" variant='subtle' colorScheme='green' mb="10">
                <TagLabel>라이브 검색 결과</TagLabel>
            </Tag>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {searchtitleResults.length > 0 ? (
                    searchtitleResults.map((item) => (
                        <GridItem key={item.liveBroadcastId}>
                            <Card>
                                <CardBody p={6}>

                                <Text fontSize="lg" fontWeight="semibold" mb={2}>
                                    라이브명: {item.broadcastTitle}
                                </Text>
                                <Text color="gray.500">
                                    {item.broadcastStatus ? "방송중!" : "방송예정"}
                                </Text>
                                </CardBody>
                            </Card>
                        </GridItem>
                    ))
                ) : (
                    <Text>검색 결과가 없습니다.</Text>
                )}
        </Grid>

            <Tag size="lg" variant='subtle' colorScheme='green' mt="10" mb="10">
                <TagLabel>판매자 검색 결과</TagLabel>
            </Tag>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {searchsellerResults.map((item) => (
                <GridItem key={item.liveBroadcastId}>
                <Card>
                    <CardBody p={6}>
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                        {item.broadcastTitle}
                    </Text>
                    <Text color="gray.500">
                        {item.broadcastStatus ? "방송중!" : "방송예정"}
                    </Text>
                    </CardBody>
                </Card>
                </GridItem>
            ))}
            </Grid>
        </Box>

    )
}

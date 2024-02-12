import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Card, CardBody, Tag, TagLabel } from "@chakra-ui/react";

interface SearchContentsProps {
    searchKeyword: string;
    searchtitleResults: [];
    searchsellerResults: [];
}

export default function SearchContents({
    searchKeyword,
    searchtitleResults,
    searchsellerResults
    }: SearchContentsProps) {

    return (
        <Box ml="10" mr="10" mb="15">
            <Tag size="lg" variant='subtle' colorScheme='green' mb="10">
                <TagLabel>라이브 검색 결과</TagLabel>
            </Tag>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {[1, 2, 3, 4].map((productNumber) => (
                <GridItem key={productNumber}>
                <Card>
                    <CardBody p={6}>
                    <img
                        alt={`Product ${productNumber} Image`}
                        className="w-full h-32 object-cover mb-2"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                        }}
                        width="200"
                    />
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                        Product {productNumber}
                    </Text>
                    <Text color="gray.500">
                        This is a short description of the product.
                    </Text>
                    </CardBody>
                </Card>
                </GridItem>
            ))}
            </Grid>

            <Tag size="lg" variant='subtle' colorScheme='green' mt="10" mb="10">
                <TagLabel>판매자 검색 결과</TagLabel>
            </Tag>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {[1, 2, 3, 4].map((productNumber) => (
                <GridItem key={productNumber}>
                <Card>
                    <CardBody p={6}>
                    <img
                        alt={`Product ${productNumber} Image`}
                        className="w-full h-32 object-cover mb-2"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                        }}
                        width="200"
                    />
                    <Text fontSize="lg" fontWeight="semibold" mb={2}>
                        Product {productNumber}
                    </Text>
                    <Text color="gray.500">
                        This is a short description of the product.
                    </Text>
                    </CardBody>
                </Card>
                </GridItem>
            ))}
            </Grid>
        </Box>

    )
}

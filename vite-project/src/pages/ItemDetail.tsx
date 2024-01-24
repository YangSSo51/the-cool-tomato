import {
    Box,
    Button,
    Flex,
    Text,
    Image,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import GoodsList from "../components/item/dummylist/dummy";
import ItemDetailDetail from "../components/item/ItemDetailDetail";
import { useParams } from "react-router-dom";
import ItemDetailReview from "../components/item/ItemDetailReview";
import ItemDetailQnA from "../components/item/ItemDetailQnA";

export default function ItemDetail() {
    const Goods = GoodsList;
    type id = number;
    const { id } = useParams();

    return (
        <>
            <Flex direction={"column"} alignItems={"center"} justify={"center"}>
                <Flex>
                    <Box maxW={"4xl"} mx={"auto"} p={6}>
                        <Flex grow={1}>
                            <Box maxW={"26rem"}>
                                <Image
                                    src={Goods[id].img}
                                    aspectRatio="1/1"
                                    objectFit="cover"
                                    width="100%"
                                    overflow={"hidden"}
                                    position={"relative"}
                                    borderRadius={"20px"}
                                />
                            </Box>

                            <Flex display={"block"} pl={"2.5rem"}>
                                <Text fontSize={"2xl"} as={"b"} mb={"4"}>
                                    {Goods[id].title}
                                </Text>
                                <Text fontSize={"lg"} mb={"1"}>
                                    <Text color={"themeRed.500"} as={"b"}>
                                        33% 9,900원
                                    </Text>
                                    <Text
                                        ml={"1rem"}
                                        color={"black"}
                                        as={"b"}
                                        textDecorationLine={"line-through"}
                                    >
                                        {Goods[id].price}
                                    </Text>
                                </Text>
                                <Box mb={"4"}>
                                    <Text as={"b"} color={"themeGreen.500"}>
                                        라이브 기간만 적용되는 가격입니다.
                                    </Text>
                                </Box>
                                <Box mb={4}>
                                    <Text fontSize={"lg"} as={"b"} mb={2}>
                                        배송
                                    </Text>
                                    <Text>수도권 및 일부지역 당일배송</Text>
                                </Box>
                                <Box mb={4}>
                                    <Text fontSize={"lg"} as={"b"} mb={2}>
                                        포장타입
                                    </Text>
                                    <Text>선물용 / 가정용</Text>
                                </Box>
                                <Box mb={4}>
                                    <Text fontSize={"lg"} as={"b"} mb={2}>
                                        유통기한
                                    </Text>
                                    <Text>상품 별도 표기</Text>
                                </Box>
                                <Box mb={4}>
                                    <Text fontSize={"lg"} as={"b"} mb={2}>
                                        상품 문의
                                    </Text>
                                    <Text>010-4944-9850</Text>
                                </Box>
                                <Box mb={6} alignItems={"center"}>
                                    <Button
                                        borderRadius={"md"}
                                        bg={"themeGreen.500"}
                                    >
                                        <Text color={"white"}>바로구매</Text>
                                    </Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent={"center"}>
                <Tabs isFitted variant="enclosed" w={"4xl"}>
                    <TabList mb="1em">
                        <Tab
                            _selected={{ color: "white", bg: "themeGreen.500" }}
                        >
                            <Text as={"b"}>상품상세정보</Text>
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "themeGreen.500" }}
                        >
                            <Text as={"b"}>상품 리뷰</Text>
                        </Tab>
                        <Tab
                            _selected={{ color: "white", bg: "themeGreen.500" }}
                        >
                            <Text as={"b"}>상품 문의</Text>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Flex
                                direction={"column"}
                                alignItems={"center"}
                                justify={"center"}
                            >
                                <ItemDetailDetail />
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex
                                direction={"column"}
                                alignItems={"center"}
                                justify={"center"}
                            >
                                <ItemDetailReview />
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex
                                direction={"column"}
                                alignItems={"center"}
                                justify={"center"}
                            >
                                <ItemDetailQnA />
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    );
}

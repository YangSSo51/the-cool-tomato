import MainCarouselComponent from "../components/common/MainCarouselComponent";
import {
    Image,
    Box,
    Flex,
    Text,
    Card,
    Button,
    CardBody,
    CardFooter,
    Heading,
    Stack,
} from "@chakra-ui/react";
import CloudLeft from "/img/shape_02.png";
import RainLeft from "/img/shape_02_l.png";
import CloudLeftBottom from "/img/shape_03.png";
import CloudRightBottom from "/img/shape_04.png";
import Fruit from "/img/brandImage.png"
import "../css/MainPage.css";

export default function MainPage() {
    return (
        <>
            <Flex w={"100vw"} justifyContent={"center"}>
                <Box position="relative">
                    <MainCarouselComponent />
                    <Image
                        className="mainLeftCloud"
                        position="absolute"
                        top={-8}
                        left={-10}
                        w={"10vw"}
                        src={CloudLeft}
                        alt=""
                    />
                    <Image
                        className="mainLeft"
                        position="absolute"
                        top={4}
                        left={4}
                        w={"7vw"}
                        src={RainLeft}
                        alt=""
                    />
                    <Image
                        className="mainLeftBottom"
                        position="absolute"
                        bottom={-20}
                        left={-20}
                        w={"18vw"}
                        src={CloudLeftBottom}
                        zIndex={-1}
                        alt=""
                    />
                    <Image
                        className="mainRightBottom"
                        position="absolute"
                        bottom={-20}
                        right={-20}
                        w={"18vw"}
                        src={CloudRightBottom}
                        alt=""
                    />
                </Box>
            </Flex>
            <Flex className="scroll-downs" direction={"column"} gap={2}>
                <Text fontSize={"1.2rem"}>scroll</Text>
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </Flex>
            <Box height={"10rem"}></Box>
            <Flex alignItems={"center"} direction={"column"} gap={10}>
                <Flex direction={"column"} gap={2}>
                    <Text fontSize={".8rem"} textAlign={"center"}>
                        멋쟁이 토마토
                    </Text>
                    <Text fontSize={"2rem"} fontWeight={"bold"}>
                        이달의 멋쟁이
                    </Text>
                </Flex>
                <Flex wrap={"wrap"} justifyContent={"center"} gap={10}>
                    <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        w={"40%"}
                        borderRadius={"1rem"}
                    >
                        <Image
                            objectFit="fill"
                            minW={{ sm: "300px" }}
                            maxW={{ sm: "300px" }}
                            maxH={{ sm: "300px"}}
                            minH={{ sm: "300px"}}
                            src="https://img.sbs.co.kr/newimg/news/20230329/201766751_1280.jpg"
                            alt="Caffe Latte"
                        />

                        <Stack>
                            <CardBody>
                                <Heading size="md">싱싱한 토마토</Heading>

                                <Text py="2">
                                  겁나 신선한 토마토 팝니다 사가세요~~~
                                  먹어보면 반합니다
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant="solid" colorScheme="blue">
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                    <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        w={"40%"}
                        borderRadius={"1rem"}
                    >
                        <Image
                            objectFit="fill"
                            minW={{ sm: "300px" }}
                            maxW={{ sm: "300px" }}
                            maxH={{ sm: "300px"}}
                            minH={{ sm: "300px"}}
                            src="https://tgzzmmgvheix1905536.cdn.ntruss.com/2021/10/ff8332a172ee493eaf3bb61911e43815"
                            alt="Caffe Latte"
                        />

                        <Stack>
                            <CardBody>
                                <Heading size="md">산지직송 양파</Heading>

                                <Text py="2">
                                    직접 재배한 양파
                                    양파의 신선함과 풍부한 영양을 만끽하세요! 건강한 삶의 조각, 양파가 당신을 기다립니다
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant="solid" colorScheme="blue">
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Flex>
            </Flex>
            <Box height={"20rem"}></Box>
            <Flex h={"100vh"} direction={"column"}>
              <Box w={"100%"} background={'url(https://cdn.imweb.me/upload/S201804055ac60211e0c1d/d049e61e55652.jpg) center/cover no-repeat'} h={"30%"}></Box>
              <Flex h={"70%"} backgroundColor={"#0E3E30"} justifyContent={"center"} alignItems={"center"}>
                <Flex maxW={"107rem"} h={"80%"} gap={32} color={"white"}>
                  <Flex w={"55rem"} direction={"column"} gap={5}>
                    <Text mb={5} fontSize={"2rem"}>맛있는 토마토!</Text>
                    <Text fontSize={"1.5rem"}>멋쟁이 토마토는 푸른 대자연의 품에서 자란 최상급 토마토로, 자연의 향기와 풍미를 그대로 담아내어 여러분의 식탁을 찾아갑니다.</Text>
                    <Text fontSize={"1.5rem"}>신선하고 풍요로운 농장에서 선별된 토마토들은 우리의 엄격한 품질 기준을 통과하여 생산되었으며, 그 결과 멋쟁이 토마토는 최상의 맛과 영양을 보장합니다.</Text>
                    <Text fontSize={"1.5rem"}>달콤한 맛과 고소한 향이 어우러진 멋쟁이 토마토는 다양한 요리에 활용되어 건강하고 맛있는 식사를 제공할 뿐만 아니라, 식탁 위의 아름다운 장식물로도 빛을 발합니다.</Text>
                    <Text fontSize={"1.5rem"}>우리의 농부들이 마음을 담아 성장시킨 멋쟁이 토마토로, 당신의 일상에 자연의 축복과 즐거움을 더해보세요.</Text>
                    <Text fontSize={"1.5rem"}>신선함과 맛의 완벽한 조화, 멋쟁이 토마토가 여러분을 찾아갑니다!</Text>
                    <Text fontSize={"1.5rem"}>자연의 향기와 풍미가 담긴 토마토로 건강하고 맛있는 삶을 채우세요.</Text>
                  </Flex>
                  <Image src={Fruit}></Image>
                </Flex>
              </Flex>
            </Flex>
        </>
    );
}

import { Flex, Text, Box, Container, Center } from "@chakra-ui/react";
import { Avatar, Badge, Image, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { postmortemAPI } from "../api/analyze";
import { getLiveProduct } from "../api/liveProduct";
import { RootState } from "../redux/stores/store";
import { LiveProductAll } from "../types/DataTypes";
import logo from "/img/newlogo.png";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface ProductType {
    imgSrc: string;
    productId: number;
    productName: string;
    price: number;
    liveFlatPrice: number;
    mainProductSetting: boolean;
}

export default function LiveResultPage() {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const accessToken = useSelector(
        (state: RootState) => state.user.accessToken
    );
    const { broadcastId } = useParams<{ broadcastId: string }>();
    const broadcastIdNumber = Number(broadcastId);
    const [liveResult, setLiveResult] = useState([]);
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await postmortemAPI(
                broadcastIdNumber,
                accessToken
            );
            console.log(response);
            setLiveResult(response.connNum);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLiveProduct(
                { "live-id": broadcastIdNumber },
                accessToken
            );
            const selectedProducts = response.list.map(
                (item: LiveProductAll) => ({
                    imgSrc: item.imgSrc,
                    productId: item.productId,
                    productName: item.productName,
                    price: item.price,
                    liveFlatPrice: item.liveFlatPrice,
                    mainProductSetting: item.mainProductSetting,
                })
            );
            // console.log(response);
            setProducts(selectedProducts);
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getEndedLiveAPI(
    //                 { page: 0, size: 10 },
    //                 accessToken
    //             );
    //             if (response) {
    //                 setLivedItem(response);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <Container centerContent>
                <Button
                    p={"1.5rem"}
                    size={"lg"}
                    leftIcon={<CloseIcon />}
                    colorScheme="teal"
                    variant="link"
                    onClick={() => {
                        navigate("/v1/seller");
                    }}
                >
                    <Center>
                        <Text as={"b"}>나가기</Text>
                    </Center>
                </Button>
            </Container>
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                width={"100%"}
            >
                <Box
                    mb="3"
                    width={"12rem"}
                    height={"8rem"}
                    onClick={() => {
                        navigate("./main");
                    }}
                    _hover={{
                        opacity: 1,
                        cursor: "pointer",
                    }}
                >
                    <Image
                        width={"100%"}
                        height={"100%"}
                        objectFit={"cover"}
                        src={logo}
                    />
                </Box>

                <Flex
                    w="80vw"
                    direction="column"
                    align="center"
                    py={8}
                    border="2px"
                    mb="10"
                    borderColor="themeLightGreen.500"
                >
                    <Avatar mt="4" size="xl" src="임시링크" />

                    <Text mt={4} mb={4} fontSize="3xl" fontWeight="bold">
                        "{user.nickname}"님의 "발품팔이의 다단계 발품코치"
                    </Text>

                    <Text
                        mt="2"
                        fontSize="2xl"
                        fontWeight="semibold"
                        mb={2}
                        textAlign="center"
                    >
                        라이브 정보!
                    </Text>
                    <Text mt="2" mb="4" textAlign="center">
                        예정 방송시간: 2024년 2월 12일 오후 8시
                        <br />
                        실제 방송시간: 2024년 2월 12일 오후 7시 47분
                        <br />
                        방송종료시간: 2024년 2월 12일 오후 10시 34분
                    </Text>

                    <Text
                        mt="2"
                        fontSize="2xl"
                        fontWeight="semibold"
                        mb={2}
                        textAlign="center"
                    >
                        판매한 상품!
                    </Text>

                    {products.slice(0, 5).map((product) => (
                        <Flex key={product.productId} direction="column">
                            <Avatar
                                size="xl"
                                src={product.imgSrc}
                                width="100%"
                            />
                            <Text width="100%" textAlign="center">
                                {product.productName}
                            </Text>
                        </Flex>
                    ))}

                    <Flex justify="space-around" py={8}>
                        <Box>
                            <Text fontSize="xl" fontWeight="semibold">
                                전체 조회수
                            </Text>
                            <Text fontSize="5xl" fontWeight="bold">
                                15,561
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize="xl" fontWeight="semibold">
                                전체 좋아요수
                            </Text>
                            <Text fontSize="5xl" fontWeight="bold">
                                1,268
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize="xl" fontWeight="semibold">
                                남은 재고량 상품
                            </Text>
                            <Text fontSize="5xl" fontWeight="bold">
                                남은량
                            </Text>
                        </Box>
                    </Flex>

                    <Box mb="4">
                        <Text
                            fontSize="2xl"
                            fontWeight="semibold"
                            mb={4}
                            textAlign="center"
                        >
                            채팅에서 많이 나온 키워드 5개!
                        </Text>
                        <Flex justify="space-around" mb="4">
                            <Badge variant="secondary">품질</Badge>
                            <Badge variant="secondary">상세</Badge>
                            <Badge variant="secondary">맛</Badge>
                            <Badge variant="secondary">풍취</Badge>
                            <Badge variant="secondary">자세히</Badge>
                        </Flex>
                    </Box>

                    <Box>
                        <Text
                            fontSize="2xl"
                            fontWeight="semibold"
                            mb={4}
                            textAlign="center"
                        >
                            시간대별 접속자 추이
                        </Text>
                        <LineLine />
                    </Box>
                </Flex>
            </Flex>
        </>
    );
}

export function LineLine() {
    const labels = [
        "30분",
        "1시간",
        "1시간 30분",
        "2시간",
        "2시간 30분",
        "3시간",
    ];
    // const [viewerData, setViewerData] = useState([]);

    const data = {
        labels,
        datasets: [
            {
                label: "30분 간격 시청자수",
                // data: viewerData.map((data) => data.e),
                data: 0,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
        },
    };

    return <Line options={options} data={data} />;
}

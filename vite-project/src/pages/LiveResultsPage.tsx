import { Flex, Text, Box, Container, Center } from "@chakra-ui/react";
import { Avatar, Badge, Image, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
// import { Line } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/stores/store";
import logo from "/img/newlogo.png";

export default function LiveResultPage() {
    const navigate = useNavigate();
    // const accessToken = useSelector((state: RootState) => state.user.accessToken);
    // const [ liveResult, setLiveResult ] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = getLiveResultAPI(accessToken);
    //         console.log(response)
    //     }
    // },  [])

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
                <Center><Text as={"b"}>나가기</Text></Center>
                
            </Button>
        </Container>
        <Flex justifyContent="center" direction="column" alignItems="center" width={"100%"}>

        <Box
            mb="3"
            width={"12rem"}
            height={"8rem"}
            onClick={() => {
                navigate("./main")}}
                _hover={{ 
                    opacity: 1,
                    cursor: "pointer"
                }}
                >
            <Image
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                src={logo}
                />
        </Box>

        <Flex w="80vw" direction="column" align="center" py={8} border="2px" mb="10" borderColor="themeLightGreen.500">

            <Avatar mt="4" size="xl" src="임시링크" />
            
            <Text mt={4} fontSize="3xl" fontWeight="bold">"셀러"님의 "발품팔이의 다단계 발품코치"</Text>
            <Text mt={2} textAlign="center">
                라이브 정보!                
                <br />
                예정 방송시간: 2024년 2월 12일 오후 8시
                <br />
                실제 방송시간: 2024년 2월 12일 오후 7시 47분
                <br />
                방송종료시간: 2024년 2월 12일 오후 10시 34분
            </Text>

            
            <Text mt={2} textAlign="center">
                판매한 상품!               
            </Text>
            <Flex>
                <Avatar mt="4" size="xl" src="임시링크" />
                <Avatar mt="4" size="xl" src="임시링크" />
                <Avatar mt="4" size="xl" src="임시링크" />
                <Avatar mt="4" size="xl" src="임시링크" />
            </Flex>

            <Flex justify="space-around" py={8}>
                <Box>
                    <Text fontSize="xl" fontWeight="semibold">전체 조회수</Text>
                    <Text fontSize="5xl" fontWeight="bold">15,561</Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="semibold">전체 좋아요수</Text>
                    <Text fontSize="5xl" fontWeight="bold">1,268</Text>
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="semibold">남은 재고량 상품</Text>
                    <Text fontSize="5xl" fontWeight="bold">남은량</Text>
                </Box>
            </Flex>

            <Box>
                <Text fontSize="2xl" fontWeight="semibold" mb={4} textAlign="center">채팅에서 많이 나온 키워드 5개!</Text>
                <Flex justify="space-around">
                    <Badge variant="secondary">품질</Badge>
                    <Badge variant="secondary">상세</Badge>
                    <Badge variant="secondary">맛</Badge>
                    <Badge variant="secondary">풍취</Badge>
                    <Badge variant="secondary">자세히</Badge>
                </Flex>
            </Box>

            <Box>
                <Text fontSize="2xl" fontWeight="semibold" mb={4} textAlign="center">시간대별 접속자 추이</Text>
                {/* <LineChart /> */}
            </Box>
        </Flex>

        </Flex>    
    </>

    );
}
    
// function LineChart(props) {
    //     const labels = ["30분", "1시간", "1시간30분", "2시간", "2시간30분"];
    //     const dataLine = {
        //         labels: labels,
        //         datasets: [{
            //             label: '30분 간격 시청차 추이',
            //             data: [65, 59, 80, 81, 56],
            //             fill: false,
            //             borderColor: 'rgb(75, 192, 192)',
            //             tension: 0.1
            //         }]
//     };
//     return (
//         <Line data={dataLine} />
//     );
// }

import { Flex, Text, Box } from "@chakra-ui/react";
import { Avatar, Badge } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import { ResponsiveLine } from "@nivo/line";

export default function LiveResultPage() {

    return (
    
        <Flex direction="column" align="center" py={8}>

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
                <LineChart className="w-full h-[200px]" />
            </Box>
        </Flex>
    );
}
    
function LineChart(props) {
    return (
        <Text>임시선차트</Text>
    // <div {...props}>
    //     <ResponsiveLine
    //     data={[
    //         {
    //         id: "Desktop",
    //         data: [
    //             { x: "Jan", y: 43 },
    //             { x: "Feb", y: 137 },
    //             { x: "Mar", y: 61 },
    //             { x: "Apr", y: 145 },
    //             { x: "May", y: 26 },
    //             { x: "Jun", y: 154 },
    //         ],
    //         },
    //         {
    //         id: "Mobile",
    //         data: [
    //             { x: "Jan", y: 60 },
    //             { x: "Feb", y: 48 },
    //             { x: "Mar", y: 177 },
    //             { x: "Apr", y: 78 },
    //             { x: "May", y: 96 },
    //             { x: "Jun", y: 204 },
    //         ],
    //         },
    //     ]}
    //     margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
    //     xScale={{
    //         type: "point",
    //     }}
    //     yScale={{
    //         type: "linear",
    //     }}
    //     axisTop={null}
    //     axisRight={null}
    //     axisBottom={{
    //         tickSize: 0,
    //         tickPadding: 16,
    //     }}
    //     axisLeft={{
    //         tickSize: 0,
    //         tickValues: 5,
    //         tickPadding: 16,
    //     }}
    //     colors={["#2563eb", "#e11d48"]}
    //     pointSize={6}
    //     useMesh={true}
    //     gridYValues={6}
    //     theme={{
    //         tooltip: {
    //         chip: {
    //             borderRadius: "9999px",
    //         },
    //         container: {
    //             fontSize: "12px",
    //             textTransform: "capitalize",
    //             borderRadius: "6px",
    //         },
    //         },
    //         grid: {
    //         line: {
    //             stroke: "#f3f4f6",
    //         },
    //         },
    //     }}
    //     role="application"
    //     />
    // </div>
    );
}

import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import dummylivelist from "../item/dummylist/dummylivelist";

export default function LiveCalendar() {
    const dummylive = dummylivelist;
    return (
        <>
            <Flex
                alignItems={"center"}
                px={"6"}
                py={"6"}
                justify={"space-between"}
            >
                <Flex alignItems={"center"} gap={"4"}>
                    <Flex direction={"row"} gap={"1"}>
                        <Button backgroundColor={"themeRed.500"}>
                            <Text color={"white"}>현재 라이브 중</Text>
                        </Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={"4"}>
                    카테고리 항목
                </Flex>
            </Flex>
            <Flex
                direction={"column"}
                px={"6"}
                py={"4"}
                gap={"4"}
                overflowY={"hidden"}
            >
                {dummylive.map((data, index) => (
                    <Flex alignItems={"center"} gap={"4"} key={index} mb={"1rem"}>
                        <Flex
                            direction={"column"}
                            justifyContent={"flex-start"}
                            mr={"1rem"}
                        >
                            <Text fontSize={"1.7rem"} fontFamily={"GmkBold"}>10 : 00</Text>
                        </Flex>
                        <Box w={"12rem"} h={"100%"} mr={"1rem"}>
                            <Image
                                src={`${dummylive[data.id].img}`}
                                objectFit={"cover"}
                            />
                        </Box>
                        <Flex
                            direction={"column"}
                            justifyContent={"flex-start"}
                            key={index}
                        >
                            <Text
                                fontSize={"xl"}
                                mb={"1"}
                                as={"b"}
                                color={"themeGreen.500"}
                            >
                                Monday
                            </Text>
                            <Text fontSize={"2xl"} mb={"1"} as={"b"}>
                                {data.title}
                            </Text>
                            <Text fontSize={"lg"}>{data.content}</Text>
                            <Flex alignItems={"center"} mt={"2"}>
                                <Text fontSize={"lg"} mr={"2"}>
                                    46%
                                </Text>
                                <Text fontSize={"md"}>{data.price}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </>
    );
}

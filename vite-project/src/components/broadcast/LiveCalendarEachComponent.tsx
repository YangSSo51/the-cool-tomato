import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";
import { LiveCalendarWithGoodsInterface } from "../../types/DataTypes";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

interface LiveCalendarComponentProps {
    data: LiveCalendarWithGoodsInterface[] | undefined;
}

export default function LiveCalendarEachComponent({
    data,
}: Array<LiveCalendarComponentProps>) {
    useEffect(() => {
        console.log(data[0]);
    }, [data]);

    return (
        <>
            {data ? (
                <>
                    <Flex
                        direction={"column"}
                        px={"6"}
                        py={"4"}
                        gap={"4"}
                        overflowY={"hidden"}
                    >
                        {data?.map((data) => (
                            <Flex
                                alignItems={"center"}
                                gap={"4"}
                                key={index}
                                mb={"1rem"}
                            >
                                <Flex
                                    direction={"column"}
                                    justifyContent={"flex-start"}
                                    mr={"1rem"}
                                >
                                    <Text
                                        fontSize={"1.7rem"}
                                        fontFamily={"GmkBold"}
                                    >
                                        {" "}
                                        {dayjs
                                            .utc(data.startDate)
                                            .local()
                                            .format("HH:mm")}{" "}
                                    </Text>
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
                                        {data?.broadcastTitle}
                                    </Text>
                                    <Text fontSize={"2xl"} mb={"1"} as={"b"}>
                                        {data?.broadcastTitle}
                                    </Text>
                                    {/* <Text fontSize={"lg"}>{data.content}</Text> */}
                                    <Flex alignItems={"center"} mt={"2"}>
                                        <Text fontSize={"lg"} mr={"2"}>
                                            46%
                                        </Text>
                                        {/* <Text fontSize={"md"}>{data?.price}</Text> */}
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </>
            ) : (
                ""
            )}
        </>
    );
}

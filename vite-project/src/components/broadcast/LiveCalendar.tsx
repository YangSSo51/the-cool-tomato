import { LiveCalendarInterface } from "../../types/DataTypes";
import { useEffect, useState } from "react";
import { fetchCalendarItem } from "../../api/liveProduct";
import { Flex, Box, Button, Text, Image } from "@chakra-ui/react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";
import { fetchLiveCalendar } from "../../api/live";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function LiveCalendar({ date }: { date: number }) {
    const today = dayjs();
    const dates = today.add(date, "day").format("YY-MM-DD");

    const [enrichedLiveCalendar, setEnrichedLiveCalendar] =
        useState<Array<LiveCalendarInterface>>();

    const [LiveCalendar, setLiveCalendar] =
        useState<Array<LiveCalendarInterface>>();

    useEffect(() => {
        fetchLiveCalendar(dates, 0, 10).then((res) => {
            setLiveCalendar(res.data.data.broadcastInfoList);
        });
    }, []);

    useEffect(() => {
        if (LiveCalendar) {
            Promise.all(
                LiveCalendar.map((item) =>
                    fetchCalendarItem(0, 10, item.liveBroadcastId)
                )
            )
                .then((details) => {
                    const combinedData = LiveCalendar.map((item, index) => ({
                        
                        ...item,
                        details: details[index].data, 
                    }));
                    setEnrichedLiveCalendar(combinedData); 
                })
                .catch((error) => {
                    console.error(
                        "Error fetching additional calendar item details:",
                        error
                    );
                });
        }
    }, [LiveCalendar]);

    useEffect(() => {
        console.log(enrichedLiveCalendar)
    }, [enrichedLiveCalendar])

    return (
        <>
            {enrichedLiveCalendar?.map((res, index) => (
                <Flex
                    direction={"column"}
                    px={"6"}
                    py={"4"}
                    gap={"4"}
                    overflowY={"hidden"}
                    key={index}
                >
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
                            <Text fontSize={"1.7rem"} fontFamily={"GmkBold"}>
                                {" "}
                                {dayjs.utc(res.startDate).local().format("HH:mm")}{" "}
                            </Text>
                        </Flex>
                        <Box w={"12rem"} h={"100%"} mr={"1rem"}>
                            <Image
                                src={res.details.data.list.imgSrc}
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
                                {/* {data?.broadcastTitle} */}
                            </Text>
                            <Text fontSize={"2xl"} mb={"1"} as={"b"}>
                                {/* {data?.broadcastTitle} */}
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
                </Flex>
            ))}
        </>
    );
}

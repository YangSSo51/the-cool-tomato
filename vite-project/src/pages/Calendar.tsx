import {
    Flex,
    Text,
    Container,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Divider,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import LiveCalendar from "../components/broadcast/LiveCalendar";
import { fetchLiveCalendar } from "../api/live";
import { LiveCalendarInterface } from "../types/DataTypes";
import { useEffect, useState } from "react";

export default function Calendar() {
    const today = dayjs();
    const [firstCalendar, setFirstCalendar] =
        useState<Array<LiveCalendarInterface>>();
    const [secondCalendar, setSecondCalendar] =
        useState<Array<LiveCalendarInterface>>();
    const [thirdCalendar, setThirdCalendar] =
        useState<Array<LiveCalendarInterface>>();
    const [fourthCalendar, setFourthCalendar] =
        useState<Array<LiveCalendarInterface>>();

    const dates = [0, 1, 2, 3].map((offset) =>
        today.add(offset, "day").format("YY-MM-DD")
    );

    useEffect(() => {
        try {
            dates.forEach((date, index) => {
                fetchLiveCalendar(date, 0, 3).then((res) => {
                    const setData = [
                        setFirstCalendar,
                        setSecondCalendar,
                        setThirdCalendar,
                        setFourthCalendar,
                    ][index];
                    setData(res.data.data.broadcastInfoList);
                });
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container maxW={"7xl"} minH={"100vh"} p={"2rem"}>
            <Divider />
            <Tabs variant="unstyled">
                <TabList mt={"1.5rem"} mb={"1.5rem"}>
                    <Tab
                        _selected={{ color: "white", bg: "themeRed.500" }}
                        mr={"2rem"}
                    >
                        <Flex direction={"column"}>
                            <Text as={"b"}>Today</Text>
                            <Text fontFamily={"GmkBold"} as={"b"}>
                                {today.date()}
                            </Text>
                        </Flex>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "themeRed.500" }}
                        mr={"2rem"}
                    >
                        <Flex direction={"column"}>
                            <Text as={"b"}>
                                {today.add(1, "day").format("ddd")}
                            </Text>
                            <Text fontFamily={"GmkBold"} as={"b"}>
                                {today.add(1, "day").date()}
                            </Text>
                        </Flex>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "themeRed.500" }}
                        mr={"2rem"}
                    >
                        <Flex direction={"column"}>
                            <Text as={"b"}>
                                {today.add(2, "day").format("ddd")}
                            </Text>
                            <Text fontFamily={"GmkBold"} as={"b"}>
                                {today.add(2, "day").date()}
                            </Text>
                        </Flex>
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "themeRed.500" }}
                        mr={"2rem"}
                    >
                        <Flex direction={"column"}>
                            <Text as={"b"}>
                                {today.add(3, "day").format("ddd")}
                            </Text>
                            <Text fontFamily={"GmkBold"} as={"b"}>
                                {today.add(3, "day").date()}
                            </Text>
                        </Flex>
                    </Tab>
                </TabList>
                <Divider />
                <TabPanels>
                    <TabPanel>
                        <LiveCalendar data={firstCalendar} />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar data={secondCalendar} />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar data={thirdCalendar} />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar data={fourthCalendar} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

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

export default function Calendar() {
    const today = dayjs();

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
                            <Text fontFamily={"GmkBold"} as={"b"}>{today.date()}</Text>
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
                            <Text fontFamily={"GmkBold"} as={"b"}>{today.add(1, "day").date()}</Text>
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
                            <Text fontFamily={"GmkBold"} as={"b"}>{today.add(2, "day").date()}</Text>
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
                            <Text fontFamily={"GmkBold"} as={"b"}>{today.add(3, "day").date()}</Text>
                        </Flex>
                    </Tab>
                </TabList>
                <Divider />
                <TabPanels>
                    <TabPanel>
                        <LiveCalendar />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar />
                    </TabPanel>
                    <TabPanel>
                        <LiveCalendar />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

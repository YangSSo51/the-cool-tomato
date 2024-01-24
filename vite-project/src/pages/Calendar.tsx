import { Box, Button, Flex, Text, Image, Container, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import dummylivelist from "../components/item/dummylist/dummylivelist";

export default function Calendar() {
    const dummylive = dummylivelist;
    const today = new Date();

    return (
        <Container maxW={"7xl"} minH={"100vh"} p={"2rem"}>
            <Tabs variant="unstyled">
                <TabList>
                    <Tab _selected={{ color: "white", bg: "themeRed.500" }}>
                        <Text></Text>
                    </Tab>
                    <Tab _selected={{ color: "white", bg: "green.400" }}>
                        Tab 2
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex
                alignItems={"center"}
                px={"6"}
                py={"6"}
                justify={"space-between"}
            >
                <Flex alignItems={"center"} gap={"4"}>
                    <Flex direction={"row"} gap={"1"}>
                        <Button backgroundColor={"themeRed.500"}>
                            <Text color={"white"}>LIVE</Text>
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
                py={"2"}
                gap={"4"}
                overflowY={"hidden"}
            >
                {dummylive.map((data, index) => (
                    <Flex alignItems={"center"} gap={"4"}>
                        <Box w={"12rem"} h={"100%"}>
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
        </Container>
    );
}

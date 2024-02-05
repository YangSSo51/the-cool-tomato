// Menu.js
import {
    Box,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Spacer,
} from "@chakra-ui/react";

import LiveInfo from "./menu/LiveInfo";
import Feedback from "./menu/Feedback";
import NewProduct from "./menu/NewProduct";
import ProductList from "./menu/ProductList";
import Prompter from "./menu/Prompter";
import Statistic from "./menu/Statistic";



function Menu() {
    return (
        <Box w={"33%"} borderLeft="1px" overflow="auto" p={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={"2rem"}>
                메뉴
            </Text>

            <Tabs variant="soft-rounded" colorScheme="green">
                <TabList>
                    <Flex w={"100%"}>
                        <Tab>실시간 피드백</Tab>
                        <Spacer />
                        <Tab>실시간 통계</Tab>
                        <Spacer />
                        <Tab>상품 목록</Tab>
                    </Flex>
                </TabList>
                <TabList mt={"0.7rem"}>
                    <Flex w={"100%"}>
                        <Tab>새상품 등록하기</Tab>
                        <Spacer />
                        <Tab>방송 정보 수정</Tab>
                        <Spacer />
                        <Tab>대본 보기</Tab>
                    </Flex>
                </TabList>
                <TabPanels mt={"1rem"}>
                    <TabPanel>
                        <Feedback />
                    </TabPanel>
                    <TabPanel>
                        <Statistic />
                    </TabPanel>
                    <TabPanel>
                        <ProductList />
                    </TabPanel>
                    <TabPanel>
                        <NewProduct />
                    </TabPanel>
                    <TabPanel>
                        <LiveInfo />
                    </TabPanel>
                    <TabPanel>
                        <Prompter />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default Menu;

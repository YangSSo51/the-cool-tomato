// Menu.js
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import LiveInfo from "./menu/LiveInfo";
import Feedback from "./menu/Feedback";
import NewProduct from "./menu/NewProduct";
import ProductList from "./menu/ProductList";
import Prompter from "./menu/Prompter";
import Statistic from "./menu/Statistic";

function Menu() {
  return (
    <Box w="80" borderLeft="1px" overflow="auto" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        메뉴
      </Text>

        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>피드백</Tab>
                <Tab>통계</Tab>
                <Tab>상품목록</Tab>
            </TabList>
            <TabList>
                <Tab>새상품등록하기</Tab>
                <Tab>방송정보수정</Tab>
                <Tab>대본보기</Tab>
            </TabList>
            <TabPanels>
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

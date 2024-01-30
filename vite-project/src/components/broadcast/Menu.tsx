// Menu.js
import {
    Box,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";

import LiveInfo from "./menu/LiveInfo";
import Feedback from "./menu/Feedback";
import NewProduct from "./menu/NewProduct";
import ProductList from "./menu/ProductList";
import Prompter from "./menu/Prompter";
import Statistic from "./menu/Statistic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

function Menu() {
    return (

        <Box w="80" borderLeft="1px" overflow="auto" p={6}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                메뉴
            </Text>

            <Tabs variant="soft-rounded" colorScheme="green">
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
            <Doughnut data={data} />
        </Box>
    );
}

export default Menu;

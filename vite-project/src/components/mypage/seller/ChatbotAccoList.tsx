import {
    Box,
    Accordion,
    AccordionButton,
    AccordionItem,
    TableContainer,
    AccordionPanel,
    AccordionIcon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
} from "@chakra-ui/react";
// import { useState, ChangeEvent } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../redux/stores/store";
import ChatbotItem from "./ChatbotAccoItem";

// 임시로 지정
interface ChatbotData {
    roomId: number;
    livetitle: string;
}

function ChatbotList({ dummydata }: { dummydata: ChatbotData[]}) {
    // const user = useSelector((state: RootState) => state.user);


    return (
        <>
        <Accordion allowMultiple>
            {dummydata.map((item, index) => (
                <AccordionItem key={index}>
                    {/* 아코디언 초기 상태 */}
                    <AccordionButton justifyContent="space-between">
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xl'
                            textTransform='uppercase'
                            ml='2'
                        >
                            예약방송: {item.livetitle}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    {/* 아코디언 펼쳐졌을 때 내용 */}
                    <AccordionPanel>
                        <TableContainer style={{ overflowX: "hidden" }}>
                            <Table variant='simple' style={{ tableLayout: "fixed", width: "100%" }}>
                                <Thead>
                                    <Tr>
                                        <Th width="10%">키워드</Th>
                                        <Th width="70%">자동답변</Th>
                                        <Th width="20%">관리</Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {/* props 분리해놨습니다 */}
                                    <ChatbotItem />
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </AccordionPanel>

                </AccordionItem>
            ))}
        </Accordion>
            
        </>
    );
}

export default ChatbotList;

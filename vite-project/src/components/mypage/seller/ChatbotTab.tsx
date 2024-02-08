import { Box, Flex } from "@chakra-ui/layout";
import {
    Button
  } from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import ChatbotRegistrationModal from "./ChatbotRegister";
import ChatbotList from "./ChatbotAccoList"

// 임시로 지정
interface ChatbotData {
    roomId: number;
    livetitle: string;
}

function Chatbot() {
    const [modalOpen, setModalOpen] = useState(false);
    const dummydata: ChatbotData[] = [
        {roomId : 1, livetitle : "불금을 빛낼 불타는 고구마"},
        {roomId : 2, livetitle : "설날떡국에 빠질 수 없는 토종 김 특별할인"}
    ]

    function handleModalOpen() {
        setModalOpen(!modalOpen);
    }

    return (
        <Box flexDirection="column" w="90%" h="full">

            {/* 챗봇 등록 모달 오픈 버튼 */}
            <Flex justifyContent={"flex-end"} mb="5">
                <ChatbotRegistrationModal
                    isOpen={modalOpen}
                    handleModalOpen={handleModalOpen}
                    dummydata={dummydata}
                />
                <Button
                    leftIcon={<FaEdit />}
                    colorScheme="themeGreen"
                    size={"sm"}
                    onClick={handleModalOpen}
                >
                    자동응답 추가
                </Button>
            </Flex>

            {/* 방송 별 챗봇 리스트 */}
            <ChatbotList dummydata={dummydata} />
        </Box>
    )
}

export default Chatbot
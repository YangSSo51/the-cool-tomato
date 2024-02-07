import { Box, Flex } from "@chakra-ui/layout";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
  } from '@chakra-ui/react'
  import { FaEdit } from "react-icons/fa";
  import { useState } from "react";
  import ChatbotRegistrationModal from "./SellerChatbotRegister";

function Chatbot() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModalOpen() {
        setModalOpen(!modalOpen);
    }

    return (
        <Box flexDirection="column" w="90%" h="full">

            {/* 챗봇 등록 모달 오픈 버튼 */}
            <Flex justifyContent={"flex-end"}>
                <ChatbotRegistrationModal
                    isOpen={modalOpen}
                    handleModalOpen={handleModalOpen}
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
            <TableContainer mt="3">
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>키워드</Th>
                        <Th>답변</Th>
                        <Th>관리</Th>
                        {/* <Th isNumeric>multiply by</Th> */}
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                    <Td>!싸피</Td>
                        <Td>가기싫다</Td>
                        <Td display="flex" justifyContent="space-around">
                            <Button colorScheme='whatsapp'>수정</Button>
                            <Button colorScheme="red">삭제</Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>!집</Td>
                        <Td>집가고싶다</Td>
                        <Td display="flex" justifyContent="space-around">
                            <Button colorScheme='whatsapp'>수정</Button>
                            <Button colorScheme="red">삭제</Button>
                        </Td>
                        {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Chatbot
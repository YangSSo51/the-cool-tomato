import { Box, Text } from "@chakra-ui/layout";
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

function Chatbot() {
    return (
        <Box flexDirection="column" w="90%" h="full">
            <Button colorScheme='purple'>채팅 명령어 추가</Button>
            <TableContainer mt="20">
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>명령어</Th>
                        <Th>내용</Th>
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
import { Box, Text } from "@chakra-ui/layout";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function Chatbot() {
    return (
        <Box flexDirection="column" w="90%" h="full" overflowY="scroll">
            <TableContainer>
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
                        <Td>!대표</Td>
                        <Td>?? 어케설정</Td>
                        <Td>수정 삭제</Td>
                        {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Chatbot
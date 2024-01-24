import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/table";
import { FormControl, FormLabel, Input, Switch, Text } from "@chakra-ui/react";

export default function AddGoods() {
    return (
        <TableContainer p={"1rem"}>
            <Table variant="simple" size={"lg"}>
                <Thead>
                    <Tr>
                        <Th bgSize={"50rem"}>
                            <Text as={"b"} fontSize={"xl"}>
                                상품
                            </Text>
                        </Th>
                        <Th>
                            <Text as={"b"} fontSize={"xl"}>
                                가격
                            </Text>
                        </Th>
                        <Th>
                            <Text as={"b"} fontSize={"xl"}>
                                할인율
                            </Text>
                        </Th>
                        <Th>
                            <Text as={"b"} fontSize={"xl"}>
                                대표상품 선택
                            </Text>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>유기농 싱싱한 고구마(못난이)</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>현종이 아조씨의 비밀 감자(못난이)</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>면지 아조씨의 단짠단짠 고등어</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>소영 아조씨의 매끈매끈 갈치</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>병창 할아버지의 매끈매끈 갈치</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>혜승 아조씨의 엄마는 외계인</Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>가격을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율을 입력해주세요</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <Switch size={"lg"} />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}

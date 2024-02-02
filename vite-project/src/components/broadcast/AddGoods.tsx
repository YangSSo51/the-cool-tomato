import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/table";
import {
    CloseButton,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Switch,
    Text,
} from "@chakra-ui/react";
import LiveItemAdd from "./LiveItemAdd";

type Typeprops = {
    isSelected: boolean;
    isSelectedState: (value: boolean) => void;
};

export default function AddGoods(props: Typeprops) {
    return (
        <TableContainer p={"1rem"}>
            {props.isSelected ? (
                <LiveItemAdd
                    isSelected={props.isSelected}
                    isSelectedState={props.isSelectedState}
                />
            ) : null}

            <Table variant="simple" size={"lg"}>
                <Thead>
                    <Tr>
                        <Th width={"10rem"}>
                            <Text as={"b"} fontSize={"xl"}>
                                상품
                            </Text>
                        </Th>
                        <Th width={"16rem"}>
                            <Text as={"b"} fontSize={"xl"}>
                                가격
                            </Text>
                        </Th>
                        <Th width={"12rem"}>
                            <Text as={"b"} fontSize={"xl"}>
                                할인율
                            </Text>
                        </Th>
                        <Th>
                            <Text as={"b"} fontSize={"xl"}>
                                대표상품
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
                                <FormLabel>가격 입력</FormLabel>
                            </FormControl>
                        </Td>
                        <Td>
                            <FormControl
                                variant="floating"
                                isRequired
                                isInvalid
                            >
                                <Input placeholder=" " />
                                <FormLabel>할인율 입력</FormLabel>
                            </FormControl>
                        </Td>

                        <Td width={"1rem"}>
                            <Flex justifyContent={"right"}>
                                <Switch size={"md"} />
                            </Flex>
                        </Td>
                        <Td>
                            <Flex justifyContent={"right"}>
                                <CloseButton size="md" />
                            </Flex>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
}

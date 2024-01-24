import {
    Text,
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Center,
    Flex,
    FormControl,
    Input,
    Textarea,
    Select,
} from "@chakra-ui/react";
import React from "react";

export default function ItemAdd() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const GoodsTitle = React.useRef(null);
    const GoodsPrice = React.useRef(null);

    return (
        <>
            <Button
                ml={"1rem"}
                mr={"1rem"}
                color={"black"}
                _hover={{ color: "#126F54" }}
                onClick={onOpen}
                variant={"link"}
            >
                <Text fontSize={"large"}>상품 등록</Text>
            </Button>

            <Modal onClose={onClose} size={"4xl"} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Center>
                            <Text fontSize={"3xl"} as={"b"}>
                                상품 등록
                            </Text>
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex p={"1rem"}>
                            <Box w={"27rem"}>사진 목록입니다.</Box>
                            <Flex display={"block"}>
                                <FormControl>
                                    <Flex direction={"row"} p={"0.5rem"}>
                                        <Center w={"5rem"}>
                                            <Text as={"b"}>상품명</Text>
                                        </Center>

                                        <Input
                                            variant={"outline"}
                                            size={"md"}
                                            ref={GoodsTitle}
                                            placeholder="상품명"
                                        />
                                    </Flex>
                                </FormControl>
                                <FormControl>
                                    <Flex direction={"row"} p={"0.5rem"}>
                                        <Center w={"5rem"}>
                                            <Text as={"b"}>가격</Text>
                                        </Center>

                                        <Input
                                            variant={"outline"}
                                            size={"md"}
                                            ref={GoodsPrice}
                                            placeholder="가격"
                                        />
                                    </Flex>
                                </FormControl>
                            </Flex>
                        </Flex>
                        <Box p={"1rem"}>
                            <Text as={"b"}>제품 상세설명</Text>
                            <Textarea
                                mt={"10px"}
                                placeholder="상세 내용을 입력해주세요."
                            ></Textarea>
                        </Box>
                        <Flex p={"1rem"}>
                            <Text as={"b"}>카테고리</Text>
                        </Flex>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button bgColor={"themeGreen.500"} mr={3}>
                            <Text as={"samp"} color={"white"}>
                                등록
                            </Text>
                        </Button>
                        <Button bgColor={"themeRed.500"} onClick={onClose}>
                            <Text as={"samp"} color={"white"}>
                                닫기
                            </Text>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

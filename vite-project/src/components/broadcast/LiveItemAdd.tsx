import { Button } from "@chakra-ui/button";
import { Text, Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import {
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalFooter,
    ModalBody,
} from "@chakra-ui/modal";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, useDisclosure } from "@chakra-ui/react";

export default function LiveItemAdd() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                variant={"ghost"}
                _hover={{ color: "themeGreen.500" }}
                onClick={onOpen}
            >
                <Text as={"b"} fontSize={"3xl"}>
                    라이브 할 상품 클릭
                </Text>
            </Button>

            <Modal size={"5xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent p={"2rem"}>
                    <ModalHeader>
                        <Center>
                            <Text as={"b"} fontSize={"3xl"}>
                                판매중인 상품 목록
                            </Text>
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />

                    <Flex
                        minWidth={"max-content"}
                        alignItems={"center"}
                        gap={"2"}
                    >
                        <Box />
                        <Spacer />
                        <Flex gap={"2"} p={"1rem"}>
                            <Search2Icon boxSize={"2rem"} />
                            <Input size={"md"} placeholder="검색" />
                        </Flex>
                    </Flex>
                    <ModalBody>
                        <Box p={"3rem"}>
                            <Box
                                h={"50vh"}
                                borderWidth={"4px"}
                                borderRadius={"30px"}
                            >
                                <Box h={"50vh"} display={"block"} p={"1rem"}>
                                    <Text fontSize={"2xl"} p={"1rem"}>상품</Text>
                                    <Text fontSize={"2xl"} p={"1rem"}>상품</Text>
                                    <Text fontSize={"2xl"} p={"1rem"}>상품</Text>
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter p={"1rem"}>
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

import {
    Button,
    Checkbox,
    Input,
    useDisclosure,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../redux/stores/store";
import { useEffect, useState } from "react";
import { ItemDetailInterface } from "../../types/DataTypes";
import { ItemListSellerGet } from "../../api/Itemlist";

interface Typeprops {
    isSelected: boolean;
    isSelectedState: (value: boolean) => void;
}

export default function LiveItemAdd(props: Typeprops) {
    const size = 5;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const accessToken = useSelector(
        (state: RootState) => state.user.accessToken
    );
    const [products, setProducts] = useState<Array<ItemDetailInterface>>([]);
    const [selectedProduct, setSelectedProduct] = useState<
        Array<ItemDetailInterface>
    >([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        ItemListSellerGet({ page, size }, accessToken)
            .then((res) => {
                setProducts([...products, ...res.data.data.list]);
            })
            .catch((error) => {
                console.log("useEffect ItemListSellerGer Error");
                console.log(error);
            });
    }, [page]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {};
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("React.ChangeEvent<HTMLInputElement>");
        console.log(e.target);
        const id = e.target.value;
        const product = products.find(
            (product) => product.productId === parseInt(id)
        );
        if (!product) {
            console.log("product not found");
            return;
        }
        console.log("product");
        console.log(product);
        console.log("e.target.checked");
        console.log(e.target.checked);
        if (e.target.checked) {
            console.log("e.target.checked true");
            if (selectedProduct.length === 0) {
                console.log("selectedProduct length is 0");
                console.log(selectedProduct);
                setSelectedProduct([product]);
            } else {
                console.log("selectedProduct length is not 0");
                console.log(selectedProduct);
                setSelectedProduct([...selectedProduct, product]);
            }
        } else {
            console.log("e.target.checked false");
            setSelectedProduct(
                selectedProduct?.filter(
                    (item) => item.productId !== product.productId
                )
            );
        }
        console.log("handleCheck selectedProduct");
        console.log(selectedProduct);
    };
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.value;
        const product = products.find(
            (product) => product.productId === parseInt(id)
        );
        if (!product) {
            console.log("product not found");
            return;
        }
        const test = selectedProduct.find(
            (item) => item.productId === product.productId
        );
    };

    return (
        <>
            {props.isSelected ? (
                <Flex justifyContent={"flex-end"} mr={"0.5rem"}>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        onClick={onOpen}
                    >
                        <Text as={"b"} fontSize={"md"}>
                            상품 추가
                        </Text>
                    </Button>
                </Flex>
            ) : (
                <Button colorScheme="teal" variant="link" onClick={onOpen}>
                    <Text as={"b"} fontSize={"3xl"}>
                        라이브 할 상품 클릭
                    </Text>
                </Button>
            )}

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
                                    <Wrap border="1px solid black">
                                        <WrapItem>
                                            <Center
                                                w="80px"
                                                h="40px"
                                                bg="red.200"
                                            >
                                                상품번호
                                            </Center>
                                        </WrapItem>
                                        <WrapItem>
                                            <Center
                                                w="350px"
                                                h="40px"
                                                bg="green.200"
                                            >
                                                상품이름
                                            </Center>
                                        </WrapItem>
                                        <WrapItem>
                                            <Center
                                                w="80px"
                                                h="40px"
                                                bg="tomato"
                                            >
                                                수량
                                            </Center>
                                        </WrapItem>
                                        <WrapItem>
                                            <Center
                                                w="140px"
                                                h="40px"
                                                bg="blue.200"
                                            >
                                                가격
                                            </Center>
                                        </WrapItem>
                                        <WrapItem>
                                            <Center
                                                w="80px"
                                                h="40px"
                                                bg="blackAlpha.200"
                                            >
                                                선택
                                            </Center>
                                        </WrapItem>
                                    </Wrap>
                                    {products.map((product) => {
                                        const id = product.productId;
                                        return (
                                            <Wrap
                                                key={product.productId}
                                                border="1px solid black"
                                            >
                                                <WrapItem>
                                                    <Center
                                                        w="80px"
                                                        h="40px"
                                                        bg="red.200"
                                                    >
                                                        {id}
                                                    </Center>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Center
                                                        w="350px"
                                                        h="40px"
                                                        bg="green.200"
                                                    >
                                                        {product.productName}
                                                    </Center>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Center
                                                        w="80px"
                                                        h="40px"
                                                        bg="tomato"
                                                    >
                                                        {product.quantity}
                                                    </Center>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Center
                                                        w="140px"
                                                        h="40px"
                                                        bg="blue.200"
                                                    >
                                                        {product.price}
                                                    </Center>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Center
                                                        w="80px"
                                                        h="40px"
                                                        bg="blackAlpha.200"
                                                    >
                                                        <Checkbox
                                                            size="lg"
                                                            colorScheme="green"
                                                            value={id}
                                                            onChange={
                                                                handleCheck
                                                            }
                                                            checked={}
                                                        ></Checkbox>
                                                    </Center>
                                                </WrapItem>
                                            </Wrap>
                                        );
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter p={"1rem"}>
                        <Button
                            bgColor={"themeGreen.500"}
                            mr={3}
                            onClick={() => props.isSelectedState(true)}
                        >
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

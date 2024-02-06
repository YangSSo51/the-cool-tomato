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
    Button,
    CloseButton,
    Flex,
    FormControl,
    Input,
    Switch,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ItemDetailInterface, liveProductPrice } from "../../types/DataTypes";

type Typeprops = {
    isSelected: boolean;
    isSelectedState: (value: boolean) => void;
    products: Array<ItemDetailInterface>;
    setProducts: React.Dispatch<React.SetStateAction<ItemDetailInterface[]>>;
    selectedProductId: Map<number, liveProductPrice>;
    setSelectedProductId: React.Dispatch<
        React.SetStateAction<Map<number, liveProductPrice>>
    >;
    mainProductId: number;
    setMainProductId: React.Dispatch<React.SetStateAction<number>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddGoods({
    isSelected,
    isSelectedState,
    products,
    setProducts,
    selectedProductId,
    setSelectedProductId,
    mainProductId,
    setMainProductId,
    setIsOpen,
}: Typeprops) {
    const [selected, setSelected] = useState<Array<ItemDetailInterface>>([]);
    useEffect(() => {
        const temp = products.filter((x) => selectedProductId.has(x.productId));
        setSelected(temp);
    }, [selectedProductId]);

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
        const id = parseInt(e.currentTarget.value);
        selectedProductId.delete(id);
        setSelectedProductId(new Map(selectedProductId));
    }
    function handleMainProduct(e: React.ChangeEvent<HTMLInputElement>) {
        const id = parseInt(e.currentTarget.value);
        setMainProductId(id);
    }
    function onOpen() {
        setIsOpen(true);
    }
    function handlePriceBlur(e: React.FocusEvent<HTMLInputElement>) {
        console.log("handlePriceBlur");
        if (e.target.dataset.productid === undefined) return;
        const id = parseInt(e.target.dataset.productid);
        const price = parseInt(e.target.value);
        const temp = selectedProductId.get(id);
        if (temp === undefined) return;
        temp.price = price;
        temp.discount = Math.floor((price / temp.originalPrice) * 100);
        selectedProductId.set(id, temp);
        setSelectedProductId(new Map(selectedProductId));
    }
    function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("handlePriceChange");
        if (e.target.dataset.productid === undefined) return;
        const id = parseInt(e.target.dataset.productid);
        const price = parseInt(e.target.value);
        const temp = selectedProductId.get(id);
        if (temp === undefined) return;
        temp.price = price;
        selectedProductId.set(id, temp);
        setSelectedProductId(new Map(selectedProductId));
    }
    function handleDiscountBlur(e: React.FocusEvent<HTMLInputElement>) {
        console.log("handleDiscountBlur");
        if (e.target.dataset.productid === undefined) return;
        const id = parseInt(e.target.dataset.productid);
        const discount = parseInt(e.target.value);
        const temp = selectedProductId.get(id);
        if (temp === undefined) return;
        temp.discount = discount;
        temp.price = Math.floor((temp.originalPrice * discount) / 100);
        selectedProductId.set(id, temp);
        setSelectedProductId(new Map(selectedProductId));
    }
    function handleDiscountChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("handleDiscountChange");
        if (e.target.dataset.productid === undefined) return;
        const id = parseInt(e.target.dataset.productid);
        const discount = parseInt(e.target.value);
        const temp = selectedProductId.get(id);
        if (temp === undefined) return;
        temp.discount = discount;
        selectedProductId.set(id, temp);
        setSelectedProductId(new Map(selectedProductId));
    }
    return (
        <TableContainer p={"0.1rem"}>
            {isSelected ? (
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
            ) : null}

            <Table variant="simple" size={"lg"}>
                <Thead>
                    <Tr>
                        <Th width={"10rem"} textAlign="center">
                            <Text as={"b"} fontSize={"xl"}>
                                상품이름
                            </Text>
                        </Th>
                        <Th width={"4rem"} textAlign="center">
                            <Text as={"b"} fontSize={"xl"}>
                                가격
                            </Text>
                        </Th>
                        <Th width={"9rem"} textAlign="center">
                            <Text as={"b"} fontSize={"xl"}>
                                라이브 가격
                            </Text>
                        </Th>
                        <Th width={"9rem"} textAlign="center">
                            <Text as={"b"} fontSize={"xl"}>
                                할인율
                            </Text>
                        </Th>
                        <Th textAlign="center" width="">
                            <Text as={"b"} fontSize={"xl"}>
                                대표상품
                            </Text>
                        </Th>
                        <Th textAlign="center">
                            <Text as={"b"} fontSize={"xl"} textAlign="center">
                                취소
                            </Text>
                        </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {selected.map((product) => {
                        const id = product.productId;
                        return (
                            <Tr key={product.productId}>
                                <Td textAlign="center">
                                    <Text
                                        as={"b"}
                                        fontSize={"xl"}
                                        textAlign="center"
                                    >
                                        {product.productName.length > 5
                                            ? product.productName.slice(0, 5) +
                                              "..."
                                            : product.productName}
                                    </Text>
                                </Td>
                                <Td textAlign="center">
                                    <Text
                                        as={"b"}
                                        fontSize={"xl"}
                                        textAlign="center"
                                    >
                                        {product.price}
                                    </Text>
                                </Td>
                                <Td textAlign="center">
                                    <FormControl
                                        variant="floating"
                                        isRequired
                                        isInvalid
                                    >
                                        <Input
                                            type="number"
                                            data-productid={product.productId}
                                            value={
                                                selectedProductId.get(id)?.price
                                            }
                                            onBlur={handlePriceBlur}
                                            onChange={handlePriceChange}
                                        />
                                        {/* <FormLabel>가격 입력</FormLabel> */}
                                    </FormControl>
                                </Td>
                                <Td textAlign="center">
                                    <FormControl
                                        variant="floating"
                                        isRequired
                                        isInvalid
                                    >
                                        <Input
                                            type="number"
                                            data-productid={product.productId}
                                            value={
                                                selectedProductId.get(id)
                                                    ?.discount
                                            }
                                            onBlur={handleDiscountBlur}
                                            onChange={handleDiscountChange}
                                        />
                                        {/* <FormLabel>할인율 입력</FormLabel> */}
                                    </FormControl>
                                </Td>

                                <Td width={"1rem"} textAlign="center">
                                    <Flex justifyContent={"right"}>
                                        <Switch
                                            value={id}
                                            onChange={handleMainProduct}
                                            isChecked={id === mainProductId}
                                            size={"md"}
                                        />
                                    </Flex>
                                </Td>
                                <Td textAlign="center">
                                    <Flex justifyContent={"right"}>
                                        <CloseButton
                                            size="md"
                                            onClick={handleDelete}
                                            value={id}
                                        />
                                    </Flex>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
